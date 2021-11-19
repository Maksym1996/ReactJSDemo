import { connect } from 'react-redux';
import {  } from "../../redux/actions/dialogActions";
import { follow, setUsers, unfollow } from '../../redux/actions/userAction';
import Users from './Users';

let mapStateToProps = (state) => {
    return {
        users: state.usersComponent.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(follow(userId)),
        unfollow: (userId) => dispatch(unfollow(userId)),
        setUsers: (users) => dispatch(setUsers(users))
    }
}
const UsersReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersReduxContainer;