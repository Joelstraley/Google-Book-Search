import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark top" >
        <div className="container-fluid" id="nav">
            <Link className="navbar-brand" href="#">Google Books
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                <Link
              to="/"
              className={
                window.location.pathname === "/Search" || window.location.pathname === "/Search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link >      
            </li>     
                <li className="nav-item">
                <Link
              to="/Saved"
              className={
                window.location.pathname === "/Saved" || window.location.pathname === "/Saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
             Saved
             
            </Link>     
            </li>
            </ul>
            </div>
        </div>
        </nav>
  );
}

export default Navbar;
