import React, { Component } from 'react';

import HotelList from '../containers/hotels-list';
import HotelDetail from '../containers/hotel-detail';
import {ContainerMap}  from '../containers/container-map';


export default class App extends Component {
  render() {
    return (
      <div>
      	<HotelList />
      	<HotelDetail />
      	<ContainerMap />
      </div>
    );
  }
}
