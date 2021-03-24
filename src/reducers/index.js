import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headernavbar from './headernavbarreducer';

const rootReducer = combineReducers({
  form,
  headernavbar
});

export default rootReducer;