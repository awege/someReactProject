import React, { Component} from "react";
import "./css/App.css";
import Chat from "./chat.js";
import Footer from "./footer.js";
import "./css/login.css";
import LoadContent from "./loadContent.js";
import { setAccount } from './store/actions/index.js';
import { connect } from 'react-redux';
import LogIn from './login.js'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: [false, false ,false],
    };
    this.navigationButtonClick = this.navigationButtonClick.bind(this);
  }

  navigationButtonClick(e) {
    e.preventDefault();
    e.target.blur();
    const name = parseInt(e.target.name);
    const changeClick = [false, false, false];
    changeClick[name] = true;
    this.setState({ btnClicked: changeClick }); 
    console.log(this.state.btnClicked);
  
  }

  render(){
    console.log(this.props.nicknamers);
    return(
      <div className="App">
        <h1 className="header"> Welcome! </h1>
        <hr></hr>
        <div className="Navigation-buttons" >
          <button
            className="Navigation-button1"
            name="0"
            onClick={this.navigationButtonClick}
            value="Harry"
          >
            Harry
          </button>
          <button
            className="Navigation-button1"
            name="1"
            onClick={this.navigationButtonClick}
            value="Ron"         
          >
            Ron
          </button>
          <button
            className="Navigation-button1"
            name="2"
            onClick={this.navigationButtonClick}
            value="Hermione"
          >
            Hermione
          </button>  
        </div>
        <hr></hr>
        <LogIn 
          setAccount={this.props.setAccount}
          currentNick={this.props.nicknamers}
        />
        <Chat
          nickname={this.props.nicknamers}
        />
        <div className="MiddleContent">
          {this.state.btnClicked[0] ? <LoadContent character='Harry'/>:''}
          {this.state.btnClicked[1] ? <LoadContent character='Ron'/>:''}
          {this.state.btnClicked[2] ? <LoadContent character='Hermione'/>:''}
        </div>
        <Footer />
      </div> 
    );
  }
}
const mapDispatchToProps = dispatch => (
  {
    setAccount: (text) => { dispatch(setAccount(text)); },
  }
);

export default connect(
  state => (
    {
      nicknamers: state.bestSite.accountIdText,
    }),
  mapDispatchToProps,
)(App);