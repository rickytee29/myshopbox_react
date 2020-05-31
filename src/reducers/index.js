import * as Action from '../action_types';

export const showHideLoginModal = (isLoggingIn = false, action) => {
  switch (action.type) {
    case Action.LOGIN_MODAL_SHOW:
      isLoggingIn = true;
      break;
    case Action.LOGIN_MODAL_HIDE:
      isLoggingIn = false;
      break;
    default:
      break;
  }
  return isLoggingIn;
};

export const showHideRegisterModal = (isReggingIn = false, action) => {
  switch (action.type) {
    case Action.REGISTER_MODAL_SHOW:
      isReggingIn = true;
      break;
    case Action.REGISTER_MODAL_HIDE:
      isReggingIn = false;
      break;
    default:
      break;
  }
  return isReggingIn;
};

export const showHideLoader = (isLoading = true, action) => {
  switch (action.type) {
    case Action.IS_LOADING:
      isLoading = true;
      break;
    case Action.IS_NOT_LOADING:
      isLoading = false;
      break;
    default:
      break;
  }
  return isLoading;
};
export const changeLogo = (logoSrc = {}, action) => {
  switch (action.type) {
    case Action.LOGO_CHANGED:
      logoSrc = action.payload;
      break;
    default:
      break;
  }
  return changeLogo;
};
