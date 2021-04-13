import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Wrapper>
          <Route exact path="/" component={Search} />
{/*           <Route exact path="/saved" component={Saved} />
 */}        </Wrapper>
      </div>
    </Router>
  );
}

export default App;