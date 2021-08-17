import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../../../common/Preloader/Preloader";
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/images_.png";

// const ProfileInfo = (props) => {
const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    if (!profile) {
        return <div className={s.preloader}><Preloader/></div>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
             savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.content}>
            <div className={s.descriptionBlock}>
                <img src={ profile.photos.large || userPhoto} className = {s.mainPhoto}/>
                { isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <div>
                    <div>
                        <b>Full name</b>: { profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: { profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    { profile.lookingForAJob &&
                        <div>
                             <b>My professional skills</b>: { profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me</b>: { profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys( profile.contacts).map(key=>{
                            return <Contact key ={key} contactTitle={key} contactValue ={ profile.contacts[key]}/>
                        })}
                    </div>
                </div>
                <ProfileStatusWithHooks status={ status} updateStatus={ updateStatus}/>
            </div>


        </div>);
}
const Contact = (contactTitle, contactValue) => {
    return <div className={s.contact}><b>ContactTitle</b>: {contactValue}</div>}



export default ProfileInfo;