import { addPost, updatePostMessage } from '../../redux/actions/profileActions';
import Profile from './Profile';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    let profileState = state.profileComponent;
    return { 
        postData: profileState.postData,
        currentMessage: profileState.currentMessage
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        onAddPost: () => {
            dispatch(addPost());
        },
        onUpdatePostInput: (value) => {
            dispatch(updatePostMessage({ message: value }))
        }
    }

}

const ProfileReduxContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileReduxContainer;