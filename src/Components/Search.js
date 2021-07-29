import React, { useEffect, useState } from "react";
import querryString from "query-string";
import axios from "axios";
import { Link } from "react-router-dom";
import Cake from "./Cake";
import CakeItem from "./CakeItem";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Search(props) {
  const classes = useStyles();
  var [cakeResult, setCakeResult] = useState([]);
  const [loading, setLoading] = useState(false);
  var query = querryString.parse(props.location.search);
  useEffect(async () => {
    let apiurl =
      "https://apifromashu.herokuapp.com/api/searchcakes?q=" + query.q;
    console.log("API::::" + apiurl);

    await axios({
      method: "get",
      url: apiurl,
    }).then((res) => {
      console.log(
        "*******Seach Responce from all cakes*********",
        res.data.data
      );
      setCakeResult(res.data.data);
    });
    setLoading(true);
  }, [query.q]);
  return (
    <>
      {loading ? (
        <div className="container mt-5">
          <div className="row">
            <h1>Search Result: {query.q}</h1>
          </div>
          <div className="row">
            {cakeResult.map((each, index) => {
              console.log("MAP check::" + each.name);

              return <Cake data={each} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
export default Search;
