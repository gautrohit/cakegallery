import React, { useState } from "react";
import "../Styles/Cake.css";

function Cake(props) {
  const [ingred, setIngred] = useState([]);
  const {
    image,
    name,
    price,
    weight,
    description,
    likes,
    ratings,
    reviews,
    type,
    flavour,
    eggless,
    ingredients,
  } = props.data;
  return (
    <div class="container mt-5" style={{ border: "1px solid #000" }}>
      <div class="row">
        <div class="col-sm-4">
          <br></br>
          <img src={image} class="img-fluid" alt="Responsive image"></img>
        </div>
        <div class="col-sm-6 other text-center">
          <br />
          <h4>{name}</h4>
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            &nbsp;&nbsp; <span>{ratings}</span>
          </div>
          <div className="pb-2">{reviews} Views</div>
          <div className="pb-2">
            <h5>{description}</h5>
          </div>
          <div className="pb-2">
            <h5>Current Price : ₹ {price}</h5>
          </div>
          <div className="pb-2">
            <h5>Weight :{weight} Kg</h5>
          </div>
          <div className="pb-2">
            <h5>Flavour : {flavour}</h5>
          </div>
          <div className="pb-2">
            <h5>Occasion : {type}</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-sm-4">
          <h3>Ingredients:</h3>
          {ingredients.map((each, index) => {
            console.log("ingred::" + each);
            return <li>{each}</li>;
          })}
        </div>
        <div class="col-sm-8 text-center">
          <button className="btn btn-primary"> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cake;
