import PostsSection from './PostsSection/PostsSection';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <PostsSection postData={props.postData}/>
        </div>
    );
}

export default Profile;