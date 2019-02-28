
import React, { Component} from 'react'
import { connect } from "react-redux"
import { logoutUser} from "../redux/action"

class LogoutUser extends Component {

	logout = () => {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.props.logoutUser(this.props.user)
}


  render() {
    return (
      <button onClick={() => this.logout()} className="btn btn-primary">
        LogMeOut
      </button>
    )
  }

}

 const mapStateToProps = (state) => ({
  user: state.user
})


const mapDispatchToProps = (dispatch) => {
  return {
  	logoutUser: (user) => dispatch(logoutUser(user))
  }

}
export default connect(mapStateToProps, mapDispatchToProps)(LogoutUser);
