import React, { Component } from 'react';


class SearchBar extends Component {
  render() {

	  return(
      <div className="ui right aligned category search" floated="right">
	      <div className="ui icon input">
          <form>
            {/* what value would be and also onChange if I diddn't have to lift
            up state
             <input type="text" value= {this.state.searchTerm}
             placeholder= "Search parks" onChange = {this.handleChange} />*/}
             <input type= "text" value={this.props.searchTerm}
             placeholder="Search parks" onChange={this.props.handleSearch} />
           </form>
         <i className="search icon"></i>
        </div>
       <div className="results"></div>
       </div>
	   )
  }
}

export default SearchBar;
