import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";

export default function Navbar() {
  var [title, setTitle] = useState("Cake Gallery");
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
              value={title}
            />
            <Link to="/search">
              <button
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
