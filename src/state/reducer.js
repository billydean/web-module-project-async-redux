import { combineReducers } from 'redux';
// import action types
import {ACTION_TYPE} from './action-types';

//dummy reducer
const initialState = "";
function reducer(state=initialState, action) {
    switch (action.type) {
        case ACTION_TYPE:
            return state;
        default:
            return state;
    }
}


export default combineReducers({reducer,/**reducers listed here */})