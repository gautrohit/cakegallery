import React, { useEffect, useState } from "react";
import querryString from "query-string";
import axios from "axios";
import { Link } from "react-router-dom";
import Cake from "./Cake";
import CakeItem from "./CakeItem";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { ToastContainer, toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "gray",
  },
}));

function Search(props) {
  const classes = useStyles();
  var [cakeResult, setCakeResult] = useState([]);
  const [loading, setLoading] = useState(false);
  var [emptyRsponse, setEmptyResponse] = useState([]);

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
      if (!res.data.data.length) {
        setEmptyResponse(true);
        toast.error("No Cake found");
      } else {
        setEmptyResponse(false);
        toast.success("Search Cake fetch successfully");
      }
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
          {emptyRsponse && (
            <div
              className="card"
              style={{ padding: "2rem", textAlign: "center" }}
            >
              <h3>No Cake Found</h3>
            </div>
          )}
          <div className="row">
            {cakeResult.map((each, index) => {
              console.log("MAP check::" + each.name);

              return <Cake data={each} key={index} />;
            })}
          </div>
        </div>
      ) : (
        <Backdrop className={classes.backdrop} open>
          <h4 className="pr-5">Loading Cake data</h4>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
      <ToastContainer />
    </>
  );
}
export default Search;
