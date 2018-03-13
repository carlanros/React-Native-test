import * as types from './Types';
import { combineReducers } from 'redux';
import storage from 'redux-persist/es/storage';
import { persistReducer } from 'redux-persist';

import LoginReducer from './components/Login/reducers';

 const PersistLoginReducer = persistReducer({ key: 'login', storage }, LoginReducer);
 // const PersistLoginReducer = persistReducer({ key: 'login', storage }, LoginReducer);

export default combineReducers<types.IApplicationState>({
        login: PersistLoginReducer,
    });
