import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import fetchUser from './fetchUser';
import fetchCountry from './fetchCountry';
import changeCountry from './changeCountry';

export default combineReducers({
  browserCountryCode: fetchCountry,
  userCountryCode: changeCountry,
  userData: fetchUser,
  // routing: routerReducer,
});
