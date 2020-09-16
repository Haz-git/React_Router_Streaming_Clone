import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; //pre-made reducer from pkg
import authReducer from './authReducers';

export default combineReducers({
    auth: authReducer,
    form: formReducer //specific key necessary
})