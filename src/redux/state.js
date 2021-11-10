import Profile from "../components/Profile/Profile";

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
        postData: postItemData
    },
    sidebarComponent: {
        sidebarData: sidebarItemData
    }
};

export default state;