import React, { useEffect } from "react";
import User from "./User/User";
import styles from './Users.module.css';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && styles.selectedPage}
                        onClick={() => { props.onChangeCurrentPage(p) }}>{p}</span>
                })}
            </div>
            <div>
                {props.users.map(
                    u => <User key={u.id} user={u} follow={props.follow} unfollow={props.unfollow} />)}
            </div>
        </div>
    )

}

export default Users;