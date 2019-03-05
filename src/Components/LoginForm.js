import React, { Component } from "react";
import { connect } from "react-redux"
import { getUser } from "../redux/campgroundThunks.js"

class LoginForm extends Component {
  state = {
    loginUserName: "",
    loginUserEmail: '',
    loginUserPassword: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    const user= this.state
    this.props.getUser(user)
    this.props.history.push('/main');
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="loginUserName"
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
            name="loginUserPassword"
            placeholder="password"
            onChange={this.handleChange}
          />
         <input type="submit" value="login"/>
        </form>
      </div>
    );
  }
}
  const mapDispatchToProps = dispatch => ({
    getUser: (user) => dispatch(getUser(user))
  })

export default connect(null, mapDispatchToProps)(LoginForm);
