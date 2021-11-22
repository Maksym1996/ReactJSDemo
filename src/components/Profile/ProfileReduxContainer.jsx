import { onAddPost, onUpdatePostInput, setDisplayingProfile } from '../../redux/actions/profileActions';
import Profile from './Profile';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Preload from '../Users/Preload/Preload';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProfileReduxContainer = (props) => {

    let { userId } = useParams();

    if(!userId) {
        userId = 2;
    }

    useEffect( () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => props.setDisplayingProfile(response.data))
    })

    if (!props.profile) {
        return <Preload />
    }
    return (
        <Profile {...props} />
    )
}

let mapStateToProps = (state) => {
    let profileState = state.profileComponent;
    return {
        postData: profileState.postData,
        currentMessage: profileState.currentMessage,
        profile: profileState.displayingProfile
    }
}

let mapDispatchToProps = {
    onAddPost, onUpdatePostInput, setDisplayingProfile
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileReduxContainer);