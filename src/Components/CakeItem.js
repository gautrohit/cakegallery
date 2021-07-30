import { Link, withRouter } from "react-router-dom";
import Cake from "./Cake";

function CakeItem(props) {
  console.log("cake item data by props:::::" + props.data);

  // let viewCake = (event) => {
  //   event.preventDefault();
  //   props.history.push("/cake/" + props.data.cakeid);
  // };

  return (
    <div
      className="card cakeItem m-3"
      style={{ width: "14rem", cursor: "pointer" }}
    >
      <img
        style={{ height: "18rem" }}
        src={props.data.image}
        class="card-img-top"
        alt=""
      />

      <div className="card-body">
        <h5 className="card-title">{props.data.name}</h5>
        <h6 className="price">&#8377; {props.data.price} </h6>

        <Link to={"/cake/" + props.data.cakeid}>
          <button className="btn btn-primary">View Cake</button>
        </Link>
      </div>
    </div>
  );
}
export default withRouter(CakeItem);
