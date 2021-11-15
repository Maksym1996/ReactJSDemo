import { addPostActionCreator, updatePostMessageActionCreator } from '../../redux/reducer/profileReducer';
import Profile from './Profile';

const ProfileContainer = (props) => {
    
    let profileState = props.store.getState().profileComponent;
    let profileDispatch = props.store.dispatch;

    let postData = profileState.postData;
    let currentMessage = profileState.currentMessage;

    let onAddPost = () => {
        profileDispatch(addPostActionCreator());
    }

    let onUpdatePostInput = (value) => {
        profileDispatch(updatePostMessageActionCreator({message: value}))
    }

    return (
        <Profile
                postData={postData}
                currentMessage={currentMessage}
                onAddPost={onAddPost}
                onUpdatePostInput={onUpdatePostInput} />
    );
}

export default ProfileContainer;