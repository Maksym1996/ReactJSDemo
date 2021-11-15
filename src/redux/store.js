import { combineReducers, createStore } from 'redux';
import dialogReducer from './reducers/dialogReducer';
import profileReducer from './reducers/profileReducer';
import sidebarReducer from './reducers/sidebarReducer';

let rootReducer = combineReducers({
    profileComponent: profileReducer,
    dialogComponent: dialogReducer,
    sidebarComponent: sidebarReducer
})

let store = createStore(rootReducer);

export default store;