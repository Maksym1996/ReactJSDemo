import React, { Component } from 'react';
import { connect } from 'react-redux';
import { followSuccess, getUsers, unfollowSuccess } from '../../redux/actions/userAction';
import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangeCurrentPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <Users totalUsers={this.props.totalUsers}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            follow={this.props.followSuccess}
            unfollow={this.props.unfollowSuccess}
            users={this.props.users}
            isLoading={this.props.isLoading}
            onChangeCurrentPage={this.onChangeCurrentPage}
            followingInProgress={this.props.followingInProgress} />

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersComponent.users,
        currentPage: state.usersComponent.currentPage,
        pageSize: state.usersComponent.pageSize,
        totalUsers: state.usersComponent.totalUsers,
        isLoading: state.usersComponent.isLoading,
        followingInProgress: state.usersComponent.followingInProgress
    }
}

let mapDispatchToProps = {
    followSuccess, unfollowSuccess, getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

