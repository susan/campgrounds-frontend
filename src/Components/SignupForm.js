import React, { Component } from "react";
import { createUser } from "../redux/campgroundThunks.js"
import { connect } from "react-redux"

class SignupForm extends Component {
  //keep this as we will capture input stuff here in local state,
  //then send off final to redux in handleSubmit
  state = {
    signupUserName: "",
    signupUserEmail: "",
    signupUserPassword: "",
  };

  handleChange = event => {
    //keep this as we capture input stuff here
    //console.log(event.target)
    this.setState({
      [event.target.name]: event.target.value
    });
  };

//create handleSubmit here as we can just send off final user object
//and send to state

handleSubmit = event => {
  event.preventDefault()
  const user= this.state
  this.props.createUser(user)
  this.props.history.push('/main');
}

//* get rid of submitHandler anonymous function, we are doing handleSubmit
//right here to get final user object and change state
//<form onSubmit={event => this.props.submitHandler(event, this.state)}>


  render() {
    console.log(this.props);
    return (
      <div className="form-center">
      <div className="form-card">
        <h1>Register</h1>

         <form onSubmit={this.handleSubmit}>
          <input className="form-item"
            type="text"
            name="signupUserName"
            placeholder="username"
            //get rid of values, we will capture final value in submit
            //value={this.state.signupUsername}
            onChange={this.handleChange}
          />
         <input className="form-item"
            type="text"
            name="signupUserEmail"
            placeholder="email"
            //value={this.state.signupUserEmail}
            onChange={this.handleChange}
          />
          <input className="form-item"
            type="text"
            name="signupUserPassword"
            placeholder="password"
            //value={this.state.signupPassword}
            onChange={this.handleChange}
          />
          <input className="form-submit" type="submit" value="register"/>
        </form>
      </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
    createUser: (user) => dispatch(createUser(user))

  })

export default connect(null, mapDispatchToProps)(SignupForm);
