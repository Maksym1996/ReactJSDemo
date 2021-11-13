const ADD_POST = 'ADD_POST';
const UPDATE_POST_MESSAGE = 'UPDATE_POST_MESSAGE';
const ADD_DIALOG_MESSAGE = 'ADD_DIALOG_MESSAGE';
const UPDATE_DIALOG_MESSAGE = 'UPDATE_DIALOG_MESSAGE';


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

    _postID: 3,

    _addPost() {
        let text = this._state.profileComponent.postMessage;
        if (!text) {
            alert('Please enter message');
            return;
        }
        let newPostObj = {
            id: this._postID++,
            message: text,
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

    _dialogID: 4,

    _addDialogMessage() {
        let text = this._state.dialogComponent.currentMessage;
        if(!text){
            alert('Please enter message');
            return;
        }
        let newObj = {
            id: this._dialogID,
            text: text
        };
        this._state.dialogComponent.messageData.push(newObj);
        this._state.dialogComponent.currentMessage = '';
        this.rerenderTree(this._state);
    },

    _updateDialogMessage(value) {
        this._state.dialogComponent.currentMessage = value;
        this.rerenderTree(this._state);
    },

    dispatch(action) {
        switch(action.type){
            case ADD_POST: return this._addPost();
            case UPDATE_POST_MESSAGE : return this._updatePostText(action.payload.message); 
            case ADD_DIALOG_MESSAGE: return this._addDialogMessage();
            case UPDATE_DIALOG_MESSAGE: return this._updateDialogMessage(action.payload.message);
        }
    }


};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updatePostMessageActionCreator = (payload) => {
    return {
        type: UPDATE_POST_MESSAGE,
        payload: payload
    }
}

export const addDialogMessageActionCreator = () => {
    return {
        type: ADD_DIALOG_MESSAGE
    }
}
export const updateDialogMessageActionCreator = (payload) => {
    console.log('upsdate', payload)
    return {
        type: UPDATE_DIALOG_MESSAGE,
        payload: payload
    }
}



export default store;