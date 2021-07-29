import axios from "axios";
import { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { connect } from "react-redux";
function Login(props) {
  var [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const user = {};

  const login = (e) => {
    e.preventDefault();
    let apiurl = "https://apifromashu.herokuapp.com/api/login";

    axios({
      method: "post",
      url: apiurl,
      data: user,
    }).then((res) => {
      console.log("*******Responce from Login API*********", res);

      if (res.data.token) {
        props.dispatch({
          type: "LOGIN",
          payload: res.data,
        });

        localStorage.token = res.data.token;
        props.history.push("/cart");
        toast.success("Login Passed", {
          position: "top-right",
        });
      } else {
        toast.error("Login Failed!", {
          position: "top-right",
        });
      }
    });

    console.log("^^^^^^^^^^", user.email, user.password);
    if (user.email === "" || user.password === "") {
      toast.info("Please Enter Field", {
        position: "top-center",
      });
    }
  };

  return (
    <div className="mt-5" style={{ width: "50%", margin: "auto" }}>
      <form>
        <h1>Login Here</h1>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            onChange={(e) => (user.email = e.target.value)}
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
            onChange={(e) => (user.password = e.target.value)}
            type="password"
            class="form-control"
            placeholder="Password"
          />
        </div>
        <div>
          <Link to="/signup">New User? Signup Here</Link>
        </div>
        <div>
          <label className="errormessage">{name.errorMessage}</label>
          <button
            style={{ float: "right" }}
            onClick={login}
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

Login = withRouter(Login);

export default connect()(Login);
