
import {getFormattedDateTime} from '../utils/dates';
import * as helperFuncs from '../actions/AppPageActions'
import initialState from './initialState';

export default function appStoreReducer(state = {}, action) {
    const { type, payload } = action;

    switch(type) {
        case "LOAD_APPS":
        return {
            ...state,
            apps: payload.apps,
            lastUpdated: getFormattedDateTime()
        }
        case "CLEAR_APPS":
        return {
            lastUpdated: getFormattedDateTime()
        }
        case "DELETE_APP": 
            return {
                apps: helperFuncs.filter(state.apps, payload.predicate),
                lastUpdated: getFormattedDateTime()
            }
        // case "UPDATE_APP": 
        // newApps ={
        //     ...state.apps, 
        //     action.playload.updateApp  }
        //     return {
        //         apps: ,
        //         lastUpdated: getFormattedDateTime()
        //     }
        }
    }
