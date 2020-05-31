import * as Action from '../action_types';
import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

export const changeCountry = (countryCode = 'TT') => {
  return {
    type: Action.COUNTRY_CHANGED,
    payload: countryCode,
  };
};
export const changeLogo = (logoSrc) => {
  return {
    type: Action.LOGO_CHANGED,
    payload: logoSrc,
  };
};
export const fetchCountry = (countryCode) => {
  return {
    type: Action.COUNTRY_FETCHED,
    payload: countryCode,
  };
};
export const loginUser = (account_number, password) => async (dispatch) => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';
  axios.defaults.withCredentials = true;
  axios({
    method: 'post',
    url: 'http://gatesolutions.andestt.biz/_junk.php?',
    //url: 'http://104.248.229.49/api/v1/customer/login?',
    params: {
      requestCode: 'shopbox',
      account_name: '100',
      password: 'V2KbeGYB2!4',
    },
    headers: headers,
  })
    .then((response) => {
      dispatch({ type: Action.USER_LOGGED_IN, payload: response.data });
    })
    .catch((error) => dispatch({ type: 'ERROR_FINDING_USER' }));
};

export const logoutUser = (state) => {
  return {
    type: Action.USER_LOGGED_OUT,
    payload: null,
  };
};

export const showLoginModal = () => {
  return {
    type: Action.LOGIN_MODAL_SHOW,
  };
};
export const hideLoginModal = () => {
  return {
    type: Action.LOGIN_MODAL_HIDE,
  };
};

export const showRegisterModal = () => {
  return {
    type: Action.REGISTER_MODAL_SHOW,
  };
};
export const hideRegisterModal = () => {
  return {
    type: Action.REGISTER_MODAL_HIDE,
  };
};

export const showLoader = () => {
  return {
    type: Action.IS_LOADING,
  };
};

export const hideLoader = () => {
  return {
    type: Action.IS_NOT_LOADING,
  };
};
