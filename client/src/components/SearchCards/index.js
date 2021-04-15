import React from "react";

function SearchCards(props) {
  return (

          <div className="card border-primary mb-3"  style= {{justifyItems: "center", boxShadow: "5px 5px 3px 3px blue"}}>
            <div className="Row">
          <div className="col-12" style={{justifyItems: "center"}} id="cards"> 
            <h4 className="card-title" style={{paddingTop: 10}}>{props.title}</h4>
            <h5 className="card-title">{props.subtitle}</h5>
          <div className="card-body col-6" style={{justifyItems: "center"}}>
          <h4>{props.author}</h4>
            <img src={props.image} style={{padding: 5 }} alt="Card image cap"></img>
            <p>{props.description}</p>
            <a href={props.link} className="button"><button className="button">view</button></a>
            <button className="button" onClick={event => props.databaseSave(props.title, props.subtitle, props.description)}>save</button>
        </div>
        <div>
      </div>
      </div>
    </div>
    </div>

);
}

export default SearchCards; 