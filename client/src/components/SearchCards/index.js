import React from "react";

function SearchCards(props) {
  return (
    <div className="Row">
          <div className="card border-primary mb-3" /* style="max-width: 18rem;" */>
            <div className="card mb-3 col-6">
            <img className="card-img" src={props.image} alt="Card image cap"></img>
            <h5 className="card-title">{props.title}</h5>
                  <h4 className="card-title">{props.subtitle}</h4>  
            <div className="col-6">
              
                  <button className="button">view</button>
                <button className="button" onClick={event => props.databaseSave(props.title, props.subtitle, props.description)}>save</button>
                </div>
                </div>
          <div className="card-body col-6">
          <h4 className="card-title">{props.author}</h4>
        {/*   <div className="mb-5">
          <img className="card-img-top" src={props.image} alt="Card image cap"></img>
        </div> */}
        <div>
        <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
    </div>
  
);
}

export default SearchCards; 