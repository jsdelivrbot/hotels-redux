import React, { Component } from 'react';
import Map from '../containers/map';
import {GoogleApiWrapper} from 'google-maps-react';

//const API_KEY = 'AIzaSyAS6fkaRzsh9xn99f6OeXJWAjjchpYjoyo';

export class ContainerMap extends Component {
  render() {
    // if (!this.props.loaded) {
    //   return <div>Loading...</div>
    // }
    return (
    	<div className="main_map">
    		<Map google={this.props.google} />
    	</div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAS6fkaRzsh9xn99f6OeXJWAjjchpYjoyo'
})(ContainerMap)

