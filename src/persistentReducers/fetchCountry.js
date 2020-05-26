import * as Action from '../action_types';

const fetchCountry = (countryCode = null, action) => {
  if (action.type === Action.COUNTRY_FETCHED) {
    return action.payload;
  }
  return countryCode;
};
export default fetchCountry;
