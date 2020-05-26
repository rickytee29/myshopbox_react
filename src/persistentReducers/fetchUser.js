import * as Action from '../action_types';

const fetchUser = (userData = null, action) => {
  if (action.type === Action.USER_FETCHED) {
    return action.payload;
  }
  return userData;
};
export default fetchUser;
