import * as Action from '../action_types';
export const changeCountry = country => {
    return {
        type:Action.COUNTRY_CHANGED,
        payload:country
    };
};
