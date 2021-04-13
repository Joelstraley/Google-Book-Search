import React from "react";

function Nav() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
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
                window.location.pathname === "/" || window.location.pathname === "/"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>      
            </li>     
                <li className="nav-item">
                <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/Saved"
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

export default Nav;
