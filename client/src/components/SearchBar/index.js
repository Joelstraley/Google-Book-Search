import React from "react";

function SearchBar(props) {
  return (

    <nav className="navbar navbar-dark bg-dark">
    <form className="form-inline">
        <input    
          onChange={props.handleInputChange}
          value={props.value}
          className="form-control mr-sm-2" 
          name="search"
          type="text" 
          placeholder="Search..." 
          aria-label="Search"
          id="search"></input>
        <button onClick={props.handleFormSubmit} className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form>
    </nav>

);
}


export default SearchBar; 