import axios from "axios";
import { useEffect, useState } from "react";
import CakeItem from "./CakeItem";
import { withRouter } from "react-router";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
    backgroundColor: "gray",
  },
}));

function CakeList() {
  const classes = useStyles();
  var [cakes, setCakes] = useState([]);
  var [loading, setLoading] = useState(false);
  useEffect(async () => {
    let apiurl = "https://apifromashu.herokuapp.com/api/allcakes";

    await axios({
      method: "get",
      url: apiurl,
    }).then(
      (res) => {
        console.log("*******Responce from all cakes*********", res.data);
        setCakes(res.data.data);
      },
      (err) => {
        console.log("*******error from all the cakes api********", err);
      }
    );
    setLoading(true);
  }, []);

  console.log("Loader^^^^^^^^^^^^" + loading);
  return (
    <>
      {loading ? (
        <div className="container">
          <div className="row">
            {cakes.map((each, index) => {
              return <CakeItem key={index} data={each} />;
            })}
          </div>
        </div>
      ) : (
        <Backdrop className={classes.backdrop} open>
          <h4 className="pr-5">Loading data</h4>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}
export default withRouter(CakeList);
