import PostsSection from './PostsSection/PostsSection';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsSection
                postData={props.postData}
                currentMessage={props.currentMessage}
                onAddPost={props.onAddPost}
                onUpdatePostInput={props.onUpdatePostInput} />
        </div>
    );
}

export default Profile;