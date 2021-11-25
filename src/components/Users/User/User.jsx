import React from "react";
import styles from './User.module.css'
import userPhoto from '../../../assets/images/user.png';
import NavLink from '../../NavLink/NavLink';
import followAPI from "../../../api/followAPI";

const User = (props) => {
    let user = props.user;
    return (
        <div>
            <NavLink to={'/profile/' + user.id}>
                <div className={styles.userPhoto}>
                    <img src={user.photos.small ? user.photos.small : userPhoto} alt='Avatar' />
                </div>
                <div>
                    {user.name}
                </div>
            </NavLink>
            <div>
                {
                    user.followed
                        ? <button disabled={props.isFollowingInProgress} onClick={() => {
                            props.setFollowingInProgress(true);
                            followAPI.unFollowing(user.id)
                                .then(data => {
                                    if(data.resultCode == 0) {
                                        props.unfollow(user.id);
                                    }
                                    props.setFollowingInProgress(false);
                                });    
                        }}>UNFOLLOW</button>
                        : <button disabled={props.isFollowingInProgress} onClick={() => {
                            props.setFollowingInProgress(true);
                            followAPI.following(user.id)
                                .then(data => {
                                    if(data.resultCode == 0) {
                                        props.follow(user.id);
                                    }
                                    props.setFollowingInProgress(false);
                                });
                        }}>FOLLOW</button>
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