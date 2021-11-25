import React, { useEffect } from "react";
import Pagination from "./Pagination/Pagination";
import Preload from "./Preload/Preload";
import User from "./User/User";


let Users = (props) => {

    if (props.isLoading) {
        return <Preload />
    }
    return (
        <div>
            <Pagination totalUsers={props.totalUsers}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
                onChangeCurrentPage={props.onChangeCurrentPage} />
            <div>
                {props.users.map(
                    u => <User key={u.id}
                        user={u}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}
                        setFollowingInProgress={props.setFollowingInProgress}
                    />)}
            </div>
        </div>
    )

}

export default Users;