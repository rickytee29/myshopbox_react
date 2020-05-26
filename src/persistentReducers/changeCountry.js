import * as Action from '../action_types';
import { REHYDRATE } from 'redux-persist';
const changeCountry = (countryCode = 'TT', action) => {
  switch (action.type) {
    case Action.COUNTRY_CHANGED:
      countryCode = action.payload;
      break;
    default:
      break;
  }
  return countryCode;
};
export default changeCountry;
