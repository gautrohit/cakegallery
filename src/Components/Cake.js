import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Styles/Cake.css";
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

function Cake(props) {
  const classes = useStyles();
  const [cakedetails, setCakedetails] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    let apiUrl = "https://apifromashu.herokuapp.com/api/cake/";
    await axios({
      url: apiUrl,
      method: "get",
    }).then(
      (response) => {
        console.log("success", response.data.data);
        setCakedetails(response.data.data);
        setIngredients(response.data.data.ingredients);
      },
      (error) => {
        console.log("error", error);
      }
    );
    setLoading(true);
  }, []);

  return (
    <>
      {loading ? (
        <div className="container mt-5" style={{ border: "1px solid #000" }}>
          <h1>{cakedetails.name}</h1>
          <div className="row">
            <div className="col-sm-4">
              <br></br>
              <img
                src={cakedetails.image}
                className="img-fluid"
                alt="Responsive image"
              ></img>
            </div>
            <div className="col-sm-6 other text-center">
              <br />
              <h4>{cakedetails.name}</h4>
              <div>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
                &nbsp;&nbsp; <span>{cakedetails.ratings}</span>
              </div>
              <div className="pb-2">{cakedetails.reviews} Views</div>
              <div className="pb-2">
                <h5>{cakedetails.description}</h5>
              </div>
              <div className="pb-2">
                <h5>Current Price : ₹ {cakedetails.price}</h5>
              </div>
              <div className="pb-2">
                <h5>Weight :{cakedetails.weight} Kg</h5>
              </div>
              <div className="pb-2">
                <h5>Flavour : {cakedetails.flavour}</h5>
              </div>
              <div className="pb-2">
                <h5>Occasion : {cakedetails.type}</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <h3>Ingredients:</h3>
              {ingredients.map((each, index) => {
                return <li key={index}>{each}</li>;
              })}
            </div>
            <div className="col-sm-8 text-center">
              <Link to={"/cart/" + cakedetails.cakeid}>
                <button className="btn btn-primary"> Add to Cart</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Backdrop className={classes.backdrop} open>
          <h4 className="pr-5">Loading Cake details</h4>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  );
}

export default withRouter(Cake);
