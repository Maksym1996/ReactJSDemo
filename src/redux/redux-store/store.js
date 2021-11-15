import { combineReducers, createStore } from 'redux';
import dialogReducer from '../reducer/dialogReducer';
import profileReducer from '../reducer/profileReducer';
import sidebarReducer from '../reducer/sidebarReducer';

let rootReducer = combineReducers({
    profileComponent: profileReducer,
    dialogComponent: dialogReducer,
    sidebarComponent: sidebarReducer
})

let store = createStore(rootReducer);

export default store;