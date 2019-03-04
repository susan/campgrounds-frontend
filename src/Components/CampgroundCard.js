import React, { Component } from 'react';
import { Card, Button } from "semantic-ui-react";
import { Link, Route, Switch } from "react-router-dom"

class CampgroundCard extends Component {

  render() {
  	console.log("Ccard props are", this.props)

    return (
      <div>
      <Card className= "card">
      <Route render={({history}) =>
         <div>
         {console.log(history)}
            <Link to={`/${this.props.campground.id}`}
             onClick= {() =>

           { history.push(`campgrounds/${this.props.campground.id}`) }

           }
            >
            {this.props.campground.name} </Link>
        </div>
     }
    />
    </Card>
      </div>
    );
  }
}

export default CampgroundCard;
