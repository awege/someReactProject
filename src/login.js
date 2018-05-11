import React, { Component } from "react";
import "./css/login.css";

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      nickName: '',
      nickNameChange: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render() {
    const nick = this.state.nickName;
    return (
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

    );
}
}