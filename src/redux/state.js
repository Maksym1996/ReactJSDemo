let dialogItemData = [
    { id: 1, name: 'Andrey' },
    { id: 2, name: 'Maksym' },
    { id: 3, name: 'Vitalii' },
    { id: 4, name: 'Oksana' }
];

let messageItemData = [
    { id: 1, text: 'Hi, everyone!' },
    { id: 1, text: 'What\'s wrong?' },
    { id: 1, text: 'All ok!' }
];

let postItemData = [
    { id: 1, message: 'Hi, evetyone!!', likes: 15 },
    { id: 2, message: 'Bye bye all', likes: 20 }
];

let sidebarItemData = [
    { link: '/profile', text: 'Profile' },
    { link: '/dialogs', text: 'Dialogs' },
    { link: '/news', text: 'News' },
    { link: '/music', text: 'Music' },
    { link: '/settings', text: 'Settings' }
];

const state = {
    dialogComponent: {
        dialogData: dialogItemData,
        messageData: messageItemData
    },
    profileComponent: {
        postData: postItemData,
        postMessage: ''
    },
    sidebarComponent: {
        sidebarData: sidebarItemData
    }
};

let rerenderTree = () => {

}

let id = 3;
let addPost = () => {
    if(!state.profileComponent.postMessage){
        alert('Please enter message');
        return;
    }
    let newPostObj = {
        id: id++,
        message: state.profileComponent.postMessage,
        likes: 0
    };
    state.profileComponent.postData.push(newPostObj);
    state.profileComponent.postMessage = '';
    rerenderTree(state, func);
};

let updatePostText = (value) => {
    state.profileComponent.postMessage = value;
    rerenderTree(state, func);
}

export const subscribe = (sub) => {
    rerenderTree = sub;
}

export const func = {
    profileComponentFunc: { addPost, updatePostText }
}
export default state;