import React, { Component } from 'react';
import { getUsers } from './users';
import './css/login.css';

export default class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickNameChange: '',
      passwordChange: '',
      newNick: '',
      newPassword: '',
      invalidUser: false,
      invalidUserText: 'Invalid username or passowrd',
      signUp: false,
    };
    this.handleNickNameChange = this.handleNickNameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleNewNickChange = this.handleNewNickChange.bind(this);
    this.handleNewPasswordChange = this.handleNewPasswordChange.bind(this);
    this.handleSignInSubmit = this.handleSignInSubmit.bind(this);
    this.handleSignUpClick = this.handleSignUpClick.bind(this);
    this.users = getUsers();
  }

  handleNickNameChange(event) {
    const target = event.target;
    const nickNameChanges = target.value;
    this.setState({
      nickNameChange: nickNameChanges,
    });
  }

  handlePasswordChange(event) {
    const target = event.target;
    const passwordChanges = target.value;
    this.setState({
      passwordChange: passwordChanges,
    });
  }

  handleNewPasswordChange(event) {
    const target = event.target;
    const passwordChanges = target.value;
    this.setState({
      newPassword: passwordChanges,
    });
  }

  handleNewNickChange(event) {
    const target = event.target;
    const nickNameChanges = target.value;
    this.setState({
      newNick: nickNameChanges,
    });
  }

  handleSignInSubmit(event) {
    event.preventDefault();
    this.users.push({
      username: this.state.newNick,
      password: this.state.newPassword,
    });
    this.setState({
      newNick: '',
      newPassword: '',
      signUp: false,
    })
  }

  handleSignUpClick(event) {
    event.preventDefault();
    this.setState({
      signUp: true,
    })
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    const nickChange = this.state.nickNameChange.toString();
    const passwordChange = this.state.passwordChange.toString();
    const userCheck = this.users.find(u => u.username === nickChange);
    if (userCheck !== undefined && userCheck.password === passwordChange) {
      this.props.setAccount([nickChange, this.state.passwordChange]);
      this.setState({
        nickNameChange: '',
        passwordChange: '',
        invalidUser: false,
    });
    } else {
      this.setState({
        nickNameChange: '',
        passwordChange: '',
        invalidUser: true,
    });
    }
  }

  render() {
    
    return (
        <div className="LogIn">
            <div className="LogIn-header">
                <h2> Log in </h2>
            </div>
            <form onSubmit={this.handleLoginSubmit}>
                    <input 
                        className="NickNameChangeField"
                        type="text"
                        name="nickNameChange"
                        value={this.state.nickNameChange}
                        onChange={this.handleNickNameChange}
                    />
                    <input 
                        className="PasswordChangeField"
                        type="text"
                        name="passwordChange"
                        value={this.state.passwordChange}
                        onChange={this.handlePasswordChange}
                    />
                <input className="NickName-submitBtn" type="submit" value="Log in" />
            </form>
            <div className="SignIn-Button">
              <button
                onClick={this.handleSignUpClick}
              >
                Sign up
              </button>
              { this.state.signUp && 
              <form onSubmit={this.handleSignInSubmit}>
              <input 
                  className="NickNameChangeField"
                  type="text"
                  name="nickNameChange"
                  value={this.state.newNick}
                  onChange={this.handleNewNickChange}
              />
              <input 
                  className="PasswordChangeField"
                  type="text"
                  name="passwordChange"
                  value={this.state.newPassword}
                  onChange={this.handleNewPasswordChange}
              />
          <input className="NickName-submitBtn" type="submit" value="Join!" />
      </form>}
            </div>
            {this.state.invalidUser ? this.state.invalidUserText : this.props.currentNick[0]}
        </div>

    );
  }
}