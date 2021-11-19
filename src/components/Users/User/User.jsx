import React from "react";
import styles from './User.module.css'
import userPhoto from '../../../assets/images/user.png';

const User = (props) => {
    let user = props.user;
    return (
        <div>
            <div className={styles.userPhoto}>
                <img src={user.photos.small ? user.photos.small : userPhoto} />
            </div>
            <div>
                {user.name}
            </div>
            <div>
                {
                    user.followed
                        ? (<button onClick={() => props.unfollow(user.id)}>UNFOLLOW</button>)
                        : (<button onClick={() => props.follow(user.id)}>FOLLOW</button>)
                }
            </div>
            <div>
                {'user.location.city'}
            </div>
            <div>
                {'user.location.country'}
            </div>
        </div>
    )
}

export default User;