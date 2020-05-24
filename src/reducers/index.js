import { combineReducers } from 'redux';
import * as Action from '../action_types';

const countryReducer = (country=null, action) =>{
    if(action.type===Action.COUNTRY_CHANGED){
        return action.payload;
    }
}

const rootReducer =  combineReducers(
    //Default Setup for RootReducer
    {
        state:(state = {})=>state
    }
    //TODO add custom reducers HERE
);

export default rootReducer;