import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar(props) {
  console.log(props.userLoggedIn);
  var [title, setTitle] = useState("Cake Gallery");
  var [searchText, setSearch] = useState(undefined);

  function searchBtn(e) {
    e.preventDefault();

    if (searchText) {
      var url = "/search?q=" + searchText;
      props.history.push(url);
    }
  }
  function logout() {
    alert("Are you sure want to Logout");
    localStorage.removeItem("token");
    window.location.reload();
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <Link class="navbar-brand" to="/">
          {title}
        </Link>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form class="form-inline my-2 my-lg-0">
            <input
              id="serchinput"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <Link to="/search">
              <button
                onClick={searchBtn}
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </Link>
            {!props.userLoggedIn && (
              <form class="form-inline my-2 my-lg-0">
                <Link to="/login">
                  <button class="btn btn-primary my-2 my-sm-0 login-btn">
                    Login
                  </button>
                </Link>
              </form>
            )}
            {props.userLoggedIn && (
              <form class="form-inline my-2 my-lg-0">
                <Link to="/login">
                  <button
                    onClick={logout}
                    class="btn btn-danger my-2 my-sm-0 login-btn"
                  >
                    Logout
                  </button>
                </Link>
                <Link to="/cart">
                  <button class="btn btn-warning my-2 my-sm-0 login-btn">
                    Cart
                  </button>
                </Link>
              </form>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
}
export default Navbar = withRouter(Navbar);
