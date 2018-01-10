import React, { Component } from 'react';
import { connect } from 'react-redux';

class HotelDetail extends Component {
	render() {
		if (!this.props.hotel) {
			return <div classp="prompt">Select a hotel you want to explore.</div>;
		}

		return (
			<div className="details">
				<h3>Welcome to:</h3>
				<div>
					<h1>{this.props.hotel.name}</h1>
					<h4>{this.props.hotel.address}</h4>
					<h4>Stars: {this.props.hotel.stars}</h4>
					<p>{this.props.hotel.description}
					</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	// Whatever is returned will show up as props
	// inside of HotelList container
	// Our state is returned by the reducer_hotels.js
	return {
		hotel: state.activeHotel
	};
}

// Connect is being inserted here, and is used to promote 
// HotelList from a component to a container.
// And it needs to know about the newly dispatched method, selectHotel,
// inside of mapDisplatchToProps, which will make it available as a prop. 
export default connect(mapStateToProps)(HotelDetail);
