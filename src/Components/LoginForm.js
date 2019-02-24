import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    loginUsername: "",
    loginUserEmail: '',
    loginPassword: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("submitted")
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="loginUsername"
            placeholder="username"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="loginUserEmail"
            placeholder="email"
            onChange={this.handleChange}
          />

          <input
            type="text"
            name="loginPassword"
            placeholder="password"
            onChange={this.handleChange}
          />
          <button>Log In</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
