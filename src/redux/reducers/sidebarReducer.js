let initialState = {
    sidebarData: [
        { link: '/profile', text: 'Profile' },
        { link: '/dialogs', text: 'Dialogs' },
        { link: '/users', text: 'Users'},
        { link: '/news', text: 'News' },
        { link: '/music', text: 'Music' },
        { link: '/settings', text: 'Settings' }
    ]
};

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;