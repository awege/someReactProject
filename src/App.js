import React, { Component } from "react";
import "./css/App.css";
import Chat from "./chat.js";
import Footer from "./footer.js";
import "./css/login.css";
import LoadContent from "./loadContent.js";
import { setAccount, setWikiRes, setWikiImage } from './store/actions/index.js';
import { connect } from 'react-redux';
import LogIn from './login.js'
import WikiSearch from './wikipediaSearch';
import WikiResult from './wikiResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnClicked: [false, false, false],
    };
    this.navigationButtonClick = this.navigationButtonClick.bind(this);
  }

  navigationButtonClick(e) {
    e.preventDefault();
    e.target.blur();
    const name = parseInt(e.target.name);
    const changeClick = [false, false, false];
    if (this.state.btnClicked[name] === false){
      changeClick[name] = true;
    }
    this.setState({ btnClicked: changeClick });
  }

  render() {
    const clickedBckgrnd = {
      background: 'lightgrey',
    };
    const nonClickedBckgrnd = {
      background: 'white',
    };
    let isWikiRes = false;
    if (this.props.wikiResult.length > 0) {
      isWikiRes = true;
    }
    return (
      <div className="App">
        <h1 className="header"> Welcome! </h1>
        <hr></hr>
        <div className="Navigation-buttons" >
          <button
            className="Navigation-button1"
            name="0"
            onClick={this.navigationButtonClick}
            style={this.state.btnClicked[0] ? clickedBckgrnd : nonClickedBckgrnd}
            value="Harry"
          >
            Harry
          </button>
          <button
            className="Navigation-button1"
            name="1"
            onClick={this.navigationButtonClick}
            style={this.state.btnClicked[1] ? clickedBckgrnd : nonClickedBckgrnd}
            value="Ron"
          >
            Ron
          </button>
          <button
            className="Navigation-button1"
            name="2"
            onClick={this.navigationButtonClick}
            style={this.state.btnClicked[2] ? clickedBckgrnd : nonClickedBckgrnd}
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
          {this.state.btnClicked[0] ? <LoadContent character='Harry' /> : ''}
          {this.state.btnClicked[1] ? <LoadContent character='Ron' /> : ''}
          {this.state.btnClicked[2] ? <LoadContent character='Hermione' /> : ''}
          {isWikiRes ? <WikiResult wikiRes={this.props.wikiResult} wikiImage={this.props.wikiImage}/> : ''}
        </div>
        <WikiSearch
          setWikiRes={this.props.setWikiRes}
          setWikiImage={this.props.setWikiImage}
        />
        <Footer />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => (
  {
    setAccount: (text) => { dispatch(setAccount(text)); },
    setWikiRes: (array) => { dispatch(setWikiRes(array)); },
    setWikiImage: (text) => { dispatch(setWikiImage(text)); },
  }
);

const mapStateToProps = state => (
  {
    nicknamers: state.bestSite.accountIdText,
    wikiResult: state.bestSite.wikiRes,
    wikiImage: state.bestSite.wikiImage,
  }
);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);