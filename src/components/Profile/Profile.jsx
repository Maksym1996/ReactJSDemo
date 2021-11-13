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
                dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;