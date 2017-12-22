import { combineReducers } from 'redux';
import HotelsReducer from './reducer_hotels';
import ActiveHotel from './reducer_active_hotel';


// this is our mapping of our state here:
const rootReducer = combineReducers({
  hotels: HotelsReducer,
  activeHotel: ActiveHotel
});

export default rootReducer;
