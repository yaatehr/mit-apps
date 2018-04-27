import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import { routerReducer } from 'react-router-redux';
import appReducer from './AppReducer.js'

const rootReducer = combineReducers({
  fuelSavings,
  routing: routerReducer,
  apps: appReducer
});

export default rootReducer;
