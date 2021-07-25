import { Link } from "react-router-dom";
import Cake from "./Cake";

function CakeItem(props) {
  console.log("cake item data by props:::::" + props.data);
  return (
    <div className="card cakeItem m-3" style={{ width: "14rem" }}>
      <img
        style={{ height: "18rem" }}
        src={props.data.image}
        class="card-img-top"
        alt=""
      />

      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="price">&#8377; {props.data.price} </h6>
        <button className="btn btn-primary">Order Now</button>
      </div>
    </div>
  );
}
export default CakeItem;
