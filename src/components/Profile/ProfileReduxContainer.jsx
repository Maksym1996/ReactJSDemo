import { onAddPost, onUpdatePostInput, setDisplayingProfile } from '../../redux/actions/profileActions';
import Profile from './Profile';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Preload from '../Users/Preload/Preload';
import { useParams } from 'react-router-dom';
import profileAPI from '../../api/profileAPI';

const ProfileReduxContainer = (props) => {

    let { userId } = useParams();

    if(!userId) {
        userId = 2;
    }

    useEffect( () => {
        profileAPI.getProfile(userId)
            .then(data => props.setDisplayingProfile(data))
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