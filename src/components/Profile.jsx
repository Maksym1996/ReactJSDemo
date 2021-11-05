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
            <div>
                My posts
            </div>
            <div>
                New post
            </div>
            <div className={s.item}>
                post1
            </div>
            <div className={`${s.item} ${s.active}`}>
                post2
            </div>
        </div>
    );
}

export default Profile;