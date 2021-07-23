import axios from "axios";
import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  user = {};

  login = (e) => {
    e.preventDefault();
    let apiurl = "https://apifromashu.herokuapp.com/api/login";

    axios({
      method: "post",
      url: apiurl,
      data: this.user,
    }).then((res) => {
      console.log("*******Responce from Login API*********", res);

      if (res.data.token) {
        this.props.loggedIn();
        localStorage.token = res.data.token;
      }
    });
  };

  render() {
    return (
      <div style={{ width: "50%", margin: "auto" }}>
        <form>
          <h1>Login Here</h1>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              onChange={(e) => (this.user.email = e.target.value)}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
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
              onChange={(e) => (this.user.password = e.target.value)}
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div>
            <Link to="/signup">New User? Signup Here</Link>
          </div>
          <div>
            <label className="errormessage">{this.state.errorMessage}</label>
            <button
              style={{ float: "right" }}
              onClick={this.login}
              type="submit"
              class="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
