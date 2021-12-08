import { onAddPost, onUpdatePostInput, getProfile, getStatus, updateStatus } from '../../redux/actions/profileActions';
import Profile from './Profile';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Preload from '../Users/Preload/Preload';
import { useParams } from 'react-router-dom';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const ProfileReduxContainer = (props) => {

    let { userId } = useParams();

    if (!userId) {
        userId = 20958;
    }

    useEffect(() => {
        props.getProfile(userId);
        props.getStatus(userId);
    }, userId);

    if (!props.profile) {
        return <Preload />
    }
    return (
        <Profile
            profile={props.profile}
            status={props.status}
            postData={props.postData}
            currentMessage={props.currentMessage}
            onUpdateStatus={props.updateStatus}
            onAddPost={props.onAddPost}
            onUpdatePostInput={props.onUpdatePostInput} />
    )
}

let mapStateToProps = (state) => {
    let profileState = state.profileComponent;
    return {
        postData: profileState.postData,
        currentMessage: profileState.currentMessage,
        profile: profileState.displayingProfile,
        status: profileState.status
    }
}

let mapDispatchToProps = {
    onAddPost, onUpdatePostInput, getProfile, getStatus, updateStatus
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileReduxContainer);