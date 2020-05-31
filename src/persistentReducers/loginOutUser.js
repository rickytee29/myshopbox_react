import * as Action from '../action_types';

const loginOutUser = (state = null, action) => {
  switch (action.type) {
    case Action.USER_LOGGED_IN:
      return action.payload;
    case Action.USER_LOGGED_OUT:
      console.log('REDUCER PAYLOAD FOR LOGOUT');
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
};
export default loginOutUser;
