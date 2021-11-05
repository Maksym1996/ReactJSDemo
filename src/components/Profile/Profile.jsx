import PostsSection from './PostsSection/PostsSection';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
            </div>
            <div>
                ava + description
            </div>
           <PostsSection />
        </div>
    );
}

export default Profile;