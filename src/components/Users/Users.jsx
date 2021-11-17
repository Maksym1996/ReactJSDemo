import React from "react";
import User from "./User/User";

const Users = (props) => {


    let usersList = props.users.map(
        u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />
    )
    return (
        <div>
            { usersList }
        </div>
    )
}

export default Users;