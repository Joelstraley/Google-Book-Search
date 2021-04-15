import React from "react";

function SavedCards(props) {
  return (
    <div className="card border-primary mb-3" /* style="max-width: 18rem;" */>
    <div className="card mb-3">
        <button>VIEW - LINK to GOOGLE BOOKS PAGE</button>
        <button>DELETE - save to mongodb</button>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h4 className="card-title">{props.subtitle}</h4>
          <h4 className="card-title">{props.author}</h4>
          <div className="mb-5">
          <img className="card-img-top" src={props.image} alt="Card image cap"></img>
        </div>
        <div>
        <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
    </div>
);
}

export default SavedCards; 