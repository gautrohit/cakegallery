import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../Styles/Navbar.css";

function Navbar(props) {
  var [title, setTitle] = useState("Cake Gallery");
  var [searchText, setSearch] = useState(undefined);

  // function getSeachText(e) {
  //   setSearch(e.target.value);
  // }
  function searchBtn(e) {
    e.preventDefault();

    if (searchText) {
      var url = "/search?q=" + searchText;
      props.history.push(url);
    }
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
            <Link to="/login">
              <button class="btn btn-primary my-2 my-sm-0 login-btn">
                Login
              </button>
            </Link>
          </form>
        </div>
      </nav>
    </div>
  );
}
export default Navbar = withRouter(Navbar);
