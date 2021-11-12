import PostsSection from './PostsSection/PostsSection';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsSection 
            postData={props.profileData.postData} 
            postMessage={props.profileData.postMessage}
            addPost={props.profileFunc.addPost}
            updatePost={props.profileFunc.updatePostText}/>
        </div>
    );
}

export default Profile;