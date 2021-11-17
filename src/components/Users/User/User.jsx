import React from "react";
import styles from './User.module.css'

const User = (props) => {
    let user = props.user;
    return (
        <div>
            <div className={styles.userPhoto}>
                <img src={user.photoLink} />
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {
                    user.follow
                        ? (<button onClick={() => props.unfollow(user.id)}>UNFOLLOW</button>)
                        : (<button onClick={() => props.follow(user.id)}>FOLLOW</button>)
                }
            </div>
            <div>
                {user.location.city}
            </div>
            <div>
                {user.location.country}
            </div>
        </div>
    )
}

export default User;