export function selectHotel(hotel){
	//  selectHotel is an ActionCreator, which will
	// trigger an action; which is an object.
	// This object needs a type property to match
	// the case in the switch statement.
	// 2 PROPERTIES ALWAYS in an ACTION: TYPE & PAYLOAD
	return{
		type: 'HOTEL_SELECTED',
		payload: hotel
	};
}