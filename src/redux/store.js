import dialogReducer from "./reducer/dialogReducer";
import profileReducer from "./reducer/profileReducer";
import sidebarReducer from "./reducer/sidebarReducer";

let store = {
    _state: {
        dialogComponent: {
            dialogData: [
                { id: 1, name: 'Andrey' },
                { id: 2, name: 'Maksym' },
                { id: 3, name: 'Vitalii' },
                { id: 4, name: 'Oksana' }
            ],
            messageData: [
                { id: 1, text: 'Hi, everyone!' },
                { id: 2, text: 'What\'s wrong?' },
                { id: 3, text: 'All ok!' }
            ],
            currentMessage: ''
        },
        profileComponent: {
            postData: [
                { id: 1, message: 'Hi, evetyone!!', likes: 15 },
                { id: 2, message: 'Bye bye all', likes: 20 }
            ],
            postMessage: ''
        },
        sidebarComponent: {
            sidebarData: [
                { link: '/profile', text: 'Profile' },
                { link: '/dialogs', text: 'Dialogs' },
                { link: '/news', text: 'News' },
                { link: '/music', text: 'Music' },
                { link: '/settings', text: 'Settings' }
            ]
        }
    },

    getState() {
        return this._state;
    },

    _rerenderTree() { },

    subscribe(sub) {
        this.rerenderTree = sub;
    },

    dispatch(action) {
        dialogReducer(this._state, action);
        profileReducer(this._state, action);
        sidebarReducer(this._state, action);
        this.rerenderTree(this);
    }

};

export default store;