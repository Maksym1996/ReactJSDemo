import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from './reducers/authReducer';
import dialogReducer from './reducers/dialogReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';
import thunkMiddleware from 'redux-thunk';

let rootReducer = combineReducers({
    profileComponent: profileReducer,
    dialogComponent: dialogReducer,
    sidebarComponent: sidebarReducer,
    usersComponent: userReducer,
    auth: authReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;