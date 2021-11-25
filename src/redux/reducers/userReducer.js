import { FOLLOW, UNFOLLOW, SET_USERS, SET_CURRENT_PAGE, SET_USERS_TOTAL_COUNT, SET_LOADING, SET_FOLLOWING_IN_PROGRESS } from "../actions/actionConst";

let initialState = {
/*     usersData: [
        { id: 1, follow: true, name: 'Oleg', location: {city: 'Lviv', country: 'Ukraine'}, 
        photoLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcR8YstNTZJvBXC07B2fKoPNqb5WAAm0Qyeg&usqp=CAU' },
        { id: 2, follow: false, name: 'Dima', location: {city: 'Gomel', country: 'Belorus'}, 
        photoLink: 'https://eimg.pravda.com/images/doc/0/b/0b3611c-mask.jpg'}, 
        { id: 3, follow: true, name: 'Sviatoslav', location: {city: 'Kharkiv', country: 'Ukraine'}, 
        photoLink: 'https://s0.rbk.ru/v6_top_pics/media/img/6/70/755544004092706.jpeg' },
        { id: 4, follow: false, name: 'Vizimir', location: {city: 'Poznan', country: 'Polska'}, 
        photoLink: 'https://cdnn21.img.ria.ru/images/148825/88/1488258802_0:0:3072:1728_1920x0_80_0_0_bc61ae87b60794fd200143ee80a547f8.jpg' },
    ] */
    users: [],
    pageSize: 10,
    totalUsers: 0,
    currentPage: 1,
    isLoading: false,
    isFollowingInProgress: false
};

const userReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsers: action.totalUsersCount
            }
        case SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        case SET_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFollowingInProgress
            }
        default:
            return state;
    }
};

export default userReduser;

