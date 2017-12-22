import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectHotel } from '../actions/index';
import { bindActionCreators } from 'redux';

class HotelList extends Component {
	renderList() {
		return this.props.hotels.map((hotel) => {
			return (
				<li 
					key={hotel.name} 
					onClick={() => this.props.selectHotel(hotel)}
					className="list-group-item">
					{hotel.name}
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	// Whatever is returned will show up as props
	// inside of HotelList container
	// Our state is returned by the reducer_hotels.js
	return {
		hotels: state.hotels
	};
}

// Anything returned from this function will end up as
// props on the HotelList container - Just like mapStateToProps
function mapDispatchToProps(dispatch) {
	// bindActionCreators is doing this:
	// Whenever selectHotel is called, the result will be passed
	// to all the reducers
	// Dispatch function is like a funnel and passes it to
	// all reducers
	// We're calling our Action Creator through the key
	// of the same damn name; but the KEY is a KEY
	// And the action is what is binding the whole thing together

	return bindActionCreators({ selectHotel: selectHotel }, dispatch);
}

// Connect is being inserted here, and is used to promote 
// HotelList from a component to a container.
// And it needs to know about the newly dispatched method, selectHotel,
// inside of mapDisplatchToProps, which will make it available as a prop. 
export default connect(mapStateToProps, mapDispatchToProps)(HotelList);

