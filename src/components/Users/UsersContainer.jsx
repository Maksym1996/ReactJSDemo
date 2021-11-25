import React, {Component} from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setLoading, setTotalUsersCount, setUsers, unfollow, setFollowingInProgress } from '../../redux/actions/userAction';
import Users from './Users';
import usersAPI from '../../api/usersAPI';

class UsersContainer extends Component {

    componentDidMount() {
        this.props.setLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setLoading(false);
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                
            })
    }

    onChangeCurrentPage = (pageNumber) =>{
        this.props.setCurrentPage(pageNumber);
        this.props.setLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.setLoading(false);
                this.props.setUsers(data.items)
              
            })
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
                    isFollowingInProgress={this.props.isFollowingInProgress}
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
        isFollowingInProgress: state.usersComponent.isFollowingInProgress
    }
}

let mapDispatchToProps = {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setLoading, setFollowingInProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

