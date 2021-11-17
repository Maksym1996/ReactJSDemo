import { combineReducers, createStore } from 'redux';
import dialogReducer from './reducers/dialogReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';
import userReducer from './reducers/userReducer';

let rootReducer = combineReducers({
    profileComponent: profileReducer,
    dialogComponent: dialogReducer,
    sidebarComponent: sidebarReducer,
    usersComponent: userReducer
})

let store = createStore(rootReducer);

export default store;