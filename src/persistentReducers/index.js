import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import fetchCountry from './fetchCountry';
import changeCountry from './changeCountry';
import loginOutUser from './loginOutUser';
import {
  showHideLoginModal,
  showHideRegisterModal,
  showHideLoader,
  changeLogo,
} from '../reducers';

export default combineReducers({
  browserCountryCode: fetchCountry,
  userCountryCode: changeCountry,
  userData: loginOutUser,
  isLoggingIn: showHideLoginModal,
  isReggingIn: showHideRegisterModal,
  isLoading: showHideLoader,
  logoSrc: changeLogo,
  // routing: routerReducer,
});
