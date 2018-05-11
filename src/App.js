import React, { Component} from "react";
import "./css/App.css";
import Chat from "./chat.js";
import Footer from "./footer.js";
import "./css/login.css";
import LoadContent from "./loadContent.js"

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      nickName: 'Anonymous',
      nickNameChange: '',
      btnClicked: [false, false ,false],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.navigationButtonClick = this.navigationButtonClick.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const nickNameChanges = target.value;

    this.setState({
      nickNameChange: nickNameChanges
    });
  }

  handleSubmit(event) {
    const newNick = this.state.nickNameChange.toString();
    event.preventDefault();
    this.setState({
      loggedIn: true,
      nickName: newNick,
      nickNameChange: '',
    });
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
        <div className="LogIn">
            <div className="LogIn-header">
                <h2> Please write your nickname </h2>
            </div>
            <form onSubmit={this.handleSubmit}>
                    <input 
                        className="NickNameChangeField"
                        type="text"
                        name="nickNameChange"
                        value={this.state.nickNameChange}
                        onChange={this.handleChange}
                    />
                <input className="NickName-submitBtn" type="submit" value="Set nickname" />
            </form>
            {this.state.loggedIn ? this.state.nickName : ''}
        </div>
        <Chat
          nickname={this.state.nickName}
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

export default App;