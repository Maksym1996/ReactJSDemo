import PostsSection from './PostsSection/PostsSection';
import s from './Profile.module.css';

const Profile = (props) => {
    return (
        <div>
            <div className={s.top}>
                <img src='https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg' />
            </div>
            <div className={s.mid}>
                ava + description
            </div>
            <div className={s.bot}>
                <PostsSection />
            </div>
        </div>
    );
}

export default Profile;