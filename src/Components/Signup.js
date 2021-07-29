import axios from "axios";
import { Component, PureComponent } from "react";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";

class Signup extends PureComponent {
  constructor() {
    super();
    // initialising the state
    this.state = {
      name: "",
    };
  }
  user = {};

  handleEmail = (event) => {
    this.user.email = event.target.value;
  };
  handlePassword = (event) => {
    this.user.password = event.target.value;
  };
  handleName = (event) => {
    this.user.name = event.target.value;
  };
  signup = (event) => {
    event.preventDefault();
    let apiurl = "https://apifromashu.herokuapp.com/api/register";

    axios({
      method: "post",
      url: apiurl,
      data: this.user,
    })
      .then((res) => {
        console.log("post done" + res);
      })
      .catch((err) => {
        console.log("error!!" + err);
      });

    if (
      this.user.name === "" ||
      this.user.email === "" ||
      this.user.password === ""
    ) {
      toast.info("Please Enter Field", {
        position: "top-center",
      });
    } else {
      toast.success("Thank-you for Signing Up", {
        position: "top-right",
      });
    }
  };

  render() {
    return (
      <div className="mt-5" style={{ width: "50%", margin: "auto" }}>
        <form>
          <h1>Signup Here</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              required
              onChange={this.handleName}
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter name"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              required
              onChange={this.handleEmail}
              type="email"
              class="form-control"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              required
              onChange={this.handlePassword}
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="errormessage">{this.state.errorMessage}</label>
            <button
              style={{ float: "right" }}
              onClick={this.signup}
              type="submit"
              class="btn btn-primary"
            >
              Signup
            </button>
          </div>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default Signup;
