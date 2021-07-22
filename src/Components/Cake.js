import React from "react";
import "../Styles/Cake.css";

function Cake() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <br></br>
          <img src="./cake2.jpg" class="img-fluid" alt="Responsive image"></img>
        </div>
        <div class="col-sm-6 other text-center">
          <br />
          <h4>Molten Cake</h4>
          <div>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star"></span>
            <span class="fa fa-star"></span>
            &nbsp;&nbsp; <span>3.0</span>
          </div>
          <div className="pb-2">200 Views</div>
          <div className="pb-2">
            <h5>AMolten chocolate cake for a party of 2 people.</h5>
          </div>
          <div className="pb-2">
            <h5>Current Price : ₹ 315</h5>
          </div>
          <div className="pb-2">
            <h5>Weight :0.5 Kg</h5>
          </div>
          <div className="pb-2">
            <h5>Flavour : Chocolate</h5>
          </div>
          <div className="pb-2">
            <h5>Occasion : Special</h5>
          </div>
        </div>
      </div>
      <div className="row">
        <div class="col-sm-4">
          <h3>Ingredients:</h3>
          <ul class="a">
            <li>milk</li>
            <li>egg</li>
            <li>Chocolate</li>
            <li>granulated sugar</li>
            <li>butter</li>
          </ul>
        </div>
        <div class="col-sm-8 text-center">
          <button className="btn btn-primary"> Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Cake;
