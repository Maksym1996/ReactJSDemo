import React from "react";
import User from "./User/User";
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => { props.setUsers(response.data.items) })
    }

    let usersList = props.users.map(
        u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />
    )
    return (
        <div>
            {usersList}
        </div>
    )
}

export default Users;