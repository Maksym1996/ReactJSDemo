import Context from '../../Context';
import { addPost, updatePostMessage } from '../../redux/actions/profileActions';
import Profile from './Profile';

const ProfileContainer = (props) => {

   

    return (
        <Context.Consumer>
            {
                (store) => {
                    let profileState = store.getState().profileComponent;
                    let profileDispatch = store.dispatch;
                
                    let postData = profileState.postData;
                    let currentMessage = profileState.currentMessage;
                
                    let onAddPost = () => {
                        profileDispatch(addPost());
                    }
                
                    let onUpdatePostInput = (value) => {
                        profileDispatch(updatePostMessage({ message: value }))
                    }
                    return (
                        <Profile
                            postData={postData}
                            currentMessage={currentMessage}
                            onAddPost={onAddPost}
                            onUpdatePostInput={onUpdatePostInput} />
                    )
                }
            }
        </Context.Consumer>
        
    );
}

export default ProfileContainer;