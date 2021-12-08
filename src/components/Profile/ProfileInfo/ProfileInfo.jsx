import s from './ProfileInfo.module.css';
import lookingForAJobPhoto from '../../../assets/images/lookingForAJob.png';
import noLookingForAJobPhoto from '../../../assets/images/noLookingForAJob.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {

    let lookingJob = () => {
        return (
            <div className={s.lookAJob}>
                Job status: <img src={lookingForAJobPhoto} alt='Ищу работу' />
                <br />
                Job description: {props.profile.lookingForAJobDescription}
            </div>
        )
    }

    let noLookingAJob = () => {
        return (
            <div className={s.lookAJob}>
                Job status: <img src={noLookingForAJobPhoto} alt='Не ищу работу' />
            </div>
        )
    }


    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt='Avatar' />
                </div>
                <div>
                    Name: {props.profile.fullName}
                </div>
                <div>
                    About me: {props.profile.aboutMe}
                </div>
                {props.profile.lookingForAJob ? lookingJob() : noLookingAJob()}
                <ProfileStatus
                    status={props.status}
                    onUpdateStatus={props.onUpdateStatus} />
            </div>
        </div>
    );
}

export default ProfileInfo;