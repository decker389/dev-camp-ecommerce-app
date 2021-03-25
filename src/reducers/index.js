import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headernavbar from './headernavbarreducer';
import user from './userreducer';

const rootReducer = combineReducers({
  form,
  headernavbar,
  user
});

export default rootReducer;