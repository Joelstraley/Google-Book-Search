import React from "react";

function SearchCards(props) {
  return (
    <div className="card border-primary mb-3" /* style="max-width: 18rem;" */>
      <div className="Row">
    <div className="card mb-3 col-6">
    <img className="card-img-top" src="..." alt="Card image cap"></img>
        <button>VIEW - LINK to GOOGLE BOOKS PAGE</button>
        <button onClick={event => props.databaseSave(props.title, props.subtitle, props.description)}>SAVE - </button>
        </div>
        <div className="card-body col-6">
          <h5 className="card-title">title is {props.title}</h5>
          <h4 className="card-title">{props.subtitle}</h4>
          <h4 className="card-title">Author Name</h4>
          <div className="mb-5">
          <img className="card-img-top" src="..." alt="Card image cap"></img>
        </div>
        <div>
        <p className="card-text">Description</p>
        </div>
      </div>
    </div>
    </div>
  
);
}

export default SearchCards; 