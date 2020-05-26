import * as Action from '../action_types';
export const changeCountry = (countryCode = 'TT') => {
  return {
    type: Action.COUNTRY_CHANGED,
    payload: countryCode,
  };
};
export const fetchCountry = (countryCode) => {
  return {
    type: Action.COUNTRY_FETCHED,
    payload: countryCode,
  };
};
export const loginUser = (user) => {
  return {
    type: Action.USER_LOGGED_IN,
    payload: user,
  };
};
export const logoutUser = () => {
  return {
    type: Action.USER_LOGGED_OUT,
  };
};
