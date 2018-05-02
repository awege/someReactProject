import React, { Component} from "react";
import "./css/App.css";
import Navigation from "./navigation.js";
import Footer from "./footer.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="header"> Welcome! </h1>
        <hr></hr>
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;