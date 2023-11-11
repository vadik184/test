import React, { Component } from 'react';

const INITIAL_STATE = {
  login: '',
  email: '',
  password: '',
};
export class SingUpForm extends Component {
  state = { ...INITIAL_STATE };

  handelChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handelSubmit = evt => {
    evt.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);
    console.log(`Signed up as: ${this.state.login}`);
    this.props.onSubmit({ ...this.state });
    this.reset();
  };
  reset = () => {
    this.state({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <form onSubmit={this.handelSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handelChange}
          />
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Enter login"
            name="email"
            value={email}
            onChange={this.handelChange}
          />
        </label>
        <label>
          Password
          <input
            type="text"
            placeholder="Enter login"
            name="password"
            value={password}
            onChange={this.handelChange}
          />
        </label>
        <button type="submit">Sing up as {login}</button>
      </form>
    );
  }
}
