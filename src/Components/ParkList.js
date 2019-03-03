import React, { Component } from 'react';
import { Grid, Card, Button } from "semantic-ui-react";
import ParkCard from "./ParkCard"

class ParkList extends Component {


render(){
  const parkList = this.props.parks.map(park => {
      return <ParkCard key={park.id} park = {park} renderMoreDetails={this.renderMoreDetails} />
    });

  return(
    <div>
    <Grid.Column width={12}>
    {parkList}
    </Grid.Column>
    </div>
  	)
  }
}

export default ParkList;
