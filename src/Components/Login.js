import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

function Login(props) {
  const classes = useStyles();
  var [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const user = {};

  const login = async (e) => {
    e.preventDefault();
    let apiurl = "https://apifromashu.herokuapp.com/api/login";

    await axios({
      method: "post",
      url: apiurl,
      data: user,
    }).then((res) => {
      console.log("*******Responce from Login API*********", res);

      if (res.data.token) {
        props.loggedIn();
        localStorage.token = res.data.token;
      }
    });
  };

  return (
    <div style={{ width: "50%", margin: "auto" }}>
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
    </div>
  );
}

export default Login;
