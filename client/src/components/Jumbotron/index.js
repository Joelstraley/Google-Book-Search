import React from "react";


function Jumbotron({ children }) {
    return (
      <div
        style={{ height: 115, clear: "both", paddingTop: 10, marginTop: 20, textAlign: "center" }}
        className="jumbotron" id="jumbo"
      >
        {children}
      </div>
    );
  }
  
  export default Jumbotron;
  