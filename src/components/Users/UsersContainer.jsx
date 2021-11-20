import React, {Component} from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setTotalUsersCount, setUsers, unfollow } from '../../redux/actions/userAction';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount );
            })
    }

    onChangeCurrentPage = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return  <Users totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    onChangeCurrentPage={this.onChangeCurrentPage}/>
        
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersComponent.users,
        currentPage: state.usersComponent.currentPage,
        pageSize: state.usersComponent.pageSize,
        totalUsers: state.usersComponent.totalUsers
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(follow(userId)),
        unfollow: (userId) => dispatch(unfollow(userId)),
        setUsers: (users) => dispatch(setUsers(users)),
        setCurrentPage: (currentPage) => dispatch(setCurrentPage(currentPage)),
        setTotalUsersCount: (usersCount) => dispatch(setTotalUsersCount(usersCount))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

