import React, { Component} from "react";
import "./css/App.css";
import Chat from "./chat.js";
import Footer from "./footer.js";

class App extends Component{
  render(){
    return(
      <div className="App">
        <h1 className="header"> Welcome! </h1>
        <hr></hr>
        <Chat />
        <Footer />
      </div> 
    );
  }
}

export default App;