import React from "react";
import styles from './User.module.css'
import userPhoto from '../../../assets/images/user.png';
import NavLink from '../../NavLink/NavLink';
import axios from "axios";

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
                        ? <button onClick={() => {
                            
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f8b5264e-961f-48d8-8158-761e55719525'
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode == 0) {
                                        props.unfollow(user.id);
                                    }
                                });    
                        }}>UNFOLLOW</button>
                        : <button onClick={() => {

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}` , {}, {
                                withCredentials: true,
                                headers: {
                                    'API-KEY': 'f8b5264e-961f-48d8-8158-761e55719525'
                                }
                            })
                                .then(response => {
                                    if(response.data.resultCode == 0) {
                                        props.follow(user.id);
                                    }
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