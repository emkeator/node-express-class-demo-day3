import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

  login = () => {
    let username = this.username.value;
    let password = this.password.value;

    axios.post('/api/login', { username, password }).then(res => console.log(res)).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <input placeholder='Username' ref={(input) => { this.username = input; }}/>
        <input placeholder='Password' ref={(input) => { this.password = input; }}/>
        <button onClick={this.login}>Sign In</button>
      </div>
    )
  }
}