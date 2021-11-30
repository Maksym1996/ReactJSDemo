import React, {Component} from 'react';
import { connect } from 'react-redux';
import { follow, getUsers, unfollow, setFollowingInProgress } from '../../redux/actions/userAction';
import Users from './Users';

class UsersContainer extends Component {

    componentDidMount() {
       this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onChangeCurrentPage = (pageNumber) =>{
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return  <Users totalUsers={this.props.totalUsers}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    users={this.props.users}
                    isLoading={this.props.isLoading}
                    onChangeCurrentPage={this.onChangeCurrentPage}
                    followingInProgress={this.props.followingInProgress}
                    setFollowingInProgress={this.props.setFollowingInProgress}/>
        
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
    follow, unfollow, getUsers, setFollowingInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

