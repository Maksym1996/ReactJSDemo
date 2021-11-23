import { combineReducers, createStore } from 'redux';
import authReducer from './reducers/authReducer';
import dialogReducer from './reducers/dialogReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';

let rootReducer = combineReducers({
    profileComponent: profileReducer,
    dialogComponent: dialogReducer,
    sidebarComponent: sidebarReducer,
    usersComponent: userReducer,
    auth: authReducer
})

let store = createStore(rootReducer);

export default store;