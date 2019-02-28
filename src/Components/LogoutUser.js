
import React, { Component} from 'react'

class Logout extends Component {

	function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("token");
    this.props.logoutUser(this.props.user)
}


  render() {
    return (
      <button onClick={() => this.logout()} className="btn btn-primary">
        Logout
      </button>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
  	logoutUser: () => dispatch(logoutUser())
  }

}
export default connect(null, {mapDispatchToProps})(Logout);
