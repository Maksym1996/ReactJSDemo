import { onAddPost, onUpdatePostInput, setDisplayingProfile } from '../../redux/actions/profileActions';
import Profile from './Profile';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import Preload from '../Users/Preload/Preload';
import axios from 'axios';

class ProfileReduxContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => this.props.setDisplayingProfile(response.data))
    }



    render() {
        if (!this.props.profile) {
            return <Preload />
        }
        return (
            <Profile {...this.props} />
        )
    }
}


let mapStateToProps = (state) => {
    debugger;
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