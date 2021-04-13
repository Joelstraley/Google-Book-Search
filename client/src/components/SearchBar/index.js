import React from "react";

function SearchBar() {
  return (

    <nav className="navbar navbar-dark bg-dark">
    <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search"></input>
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    </nav>

);
}


export default SearchBar; 