import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "../Styles/Cart.css";

function Cart(props) {
  const [cartDetails, setCartDetails] = useState([]);
  useEffect(async () => {
    let apiUrl =
      "https://apifromashu.herokuapp.com/api/addcaketocart" +
      props.match.params.cakeid;
    await axios({
      url: apiUrl,
      method: "get",
    }).then(
      (response) => {
        console.log("CArrrrrrrrrrrrrrrrrrrrrrrrTTTTTTT", response.data.data);
        setCartDetails(response.data.data);
      },
      (error) => {
        console.log("error", error);
      }
    );
  }, []);
  if (props.userLoggedIn === false) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="conatiner mt-5">
      <div className="container-fluid">
        <div className="row">
          <aside className="col-lg-9">
            <div className="card">
              <div className="table-responsive">
                <table className="table table-borderless table-shopping-cart">
                  <thead className="text-muted">
                    <tr className="small text-uppercase">
                      <th scope="col">Product</th>
                      <th scope="col" width="120">
                        Quantity
                      </th>
                      <th scope="col" width="120">
                        Price
                      </th>
                      <th
                        scope="col"
                        className="text-right d-none d-md-block"
                        width="200"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <figure className="itemside align-items-center">
                          <div className="aside">
                            <img
                              src="https://i.imgur.com/8J3XpiD.jpeg"
                              className="img-sm"
                            />
                          </div>
                          <figcaption className="info">
                            <a
                              href="#"
                              className="title text-dark"
                              data-abc="true"
                            >
                              Choco Lava Cake
                            </a>
                            {/* <p className="text-muted small">
                              SIZE: L <br /> Brand: MAXTRA
                            </p> */}
                          </figcaption>
                        </figure>
                      </td>
                      <td>
                        <select className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                        </select>
                      </td>
                      <td>
                        <div className="price-wrap">
                          <var className="price">₹800</var>
                          {/* <small className="text-muted"> $9.20 each </small> */}
                        </div>
                      </td>
                      <td className="text-right d-none d-md-block">
                        <button className="btn btn-light">Remove</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </aside>
          <aside className="col-lg-3">
            <div className="card">
              <div className="card-body">
                <dl className="dlist-align">
                  <dt>Total price:</dt>
                  <dd className="text-right ml-3">₹800</dd>
                </dl>
                <hr />
                <button className="btn btn-primary  btn-main">
                  Make Purchase
                </button>
                <button className="btn  btn-success btn-square btn-main mt-2">
                  Continue Shopping
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

export default connect(function (state, props) {
  return {
    userLoggedIn: state["AuthReducer"]["userLoggedIn"],
  };
})(Cart);
