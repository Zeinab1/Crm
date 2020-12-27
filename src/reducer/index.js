import { combineReducers } from 'redux';

import ClientsReducer from './ClientsReducer';

const rootReducer = combineReducers({
  clients: ClientsReducer,
});

export default rootReducer;