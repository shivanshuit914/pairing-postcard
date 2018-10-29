import React, {Component} from 'react';
import LoginForm from '../../organisms/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <header className="App-header">
        <h1> Pairing Postcard </h1>
        <LoginForm />
      </header>
    );
  }
}