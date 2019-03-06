import React, { Component } from "react";
import { connect } from "react-redux"
import { getUser } from "../redux/campgroundThunks.js"
import { Redirect } from 'react-router-dom'

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
     if (localStorage.getItem('token') !=="undefined") {
       return <Redirect to= "/main" />
     } else {

    return (
      <div className="form-center">
      <div className="form-card">
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input className="form-item"
            type="text"
            name="loginUserName"
            placeholder="username"
            onChange={this.handleChange}
          />

          <input className="form-item"
            type="text"
            name="loginUserEmail"
            placeholder="email"
            onChange={this.handleChange}
          />

          <input className="form-item"
            type="text"
            name="loginUserPassword"
            placeholder="password"
            onChange={this.handleChange}
          />
         <input className="form-submit" type="submit" value="login"/>
        </form>
      </div>
      </div>
    );
  }
  }
}
  const mapDispatchToProps = dispatch => ({
    getUser: (user) => dispatch(getUser(user))
  })

export default connect(null, mapDispatchToProps)(LoginForm);
