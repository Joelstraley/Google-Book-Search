import React from "react";

function SearchCard() {
  return (
    <div className="card border-primary mb-3" /* style="max-width: 18rem;" */>
    <div className="card mb-3">
        <button>VIEW - LINK to GOOGLE BOOKS PAGE</button>
        <button>SAVE - save to mongodb</button>
        <div className="card-body">
          <h5 className="card-title">Book Title</h5>
          <h4 className="card-title">Book Subtitle</h4>
          <h4 className="card-title">Author Name</h4>
          <div>
          <img className="card-img-top" src="..." alt="Card image cap"></img>
          <p className="card-text">Description</p>
        </div>
      </div>
    </div>
    </div>
);
}

export default SearchCard; 