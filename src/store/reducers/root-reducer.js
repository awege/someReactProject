import { combineReducers } from 'redux';
import bestSiteReducer from './best-site-reducer.js';

const rootReducer = combineReducers({
  bestSite: bestSiteReducer,
});

export default rootReducer;
