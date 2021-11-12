
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
                { id: 1, text: 'What\'s wrong?' },
                { id: 1, text: 'All ok!' }
            ]
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

    _id: 3,

    _addPost() {
        if (!this._state.profileComponent.postMessage) {
            alert('Please enter message');
            return;
        }
        let newPostObj = {
            id: this.id++,
            message: this._state.profileComponent.postMessage,
            likes: 0
        };
        this._state.profileComponent.postData.push(newPostObj);
        this._state.profileComponent.postMessage = '';
        this.rerenderTree(this._state);
    },

    _updatePostText(value) {
        this._state.profileComponent.postMessage = value;
        this.rerenderTree(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD_POST') {
            this._addPost();
        } else if (action.type === 'UPDATE_POST_MESSAGE') {
            this._updatePostText(action.message);
        }
    }


};



export default store;