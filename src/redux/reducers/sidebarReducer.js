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

export default (state = initialState, action) => {

    return state;
}