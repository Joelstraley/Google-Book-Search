import React from "react";

function SavedCards(props) {
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
            <button className="button">view</button>
            <button className="button" onClick={event => props.databaseSave(props.title, props.subtitle, props.description)}>delete</button>
        </div>
        <div>
    </div>
    </div>
    </div>
    </div>

);
}
export default SavedCards; 