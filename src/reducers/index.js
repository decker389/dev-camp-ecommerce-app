import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import headernavbar from './headernavbarreducer';
import user from './userreducer';
import shop from './shopreducer';

const rootReducer = combineReducers({
  form,
  headernavbar,
  user,
  shop
});

export default rootReducer;