import React from 'react';
import s from "./ProfileInfo.module.css";
import Preloader from "../../../../common/Preloader/Preloader";
// import ProfileStatus from './ProfileStatus'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../../assets/images/images_.png";

// const ProfileInfo = (props) => {
const ProfileInfo = (props) => {
    if (!props.profile) {
        return <div className={s.preloader}><Preloader/></div>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div className={s.content}>
            {/*<div className={s.beach}>*/}
            {/*    <img src='https://cdn.beach-inspector.com/static/awards/lp-header.jpg?w=1200&h=400&fit=crop'></img>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} className = {s.mainPhoto}/>
                {props.isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}
                <div>
                    <div>
                        <b>Full name</b>: {props.profile.fullName}
                    </div>
                    <div>
                        <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                    </div>
                    {props.profile.lookingForAJob &&
                        <div>
                             <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                        </div>
                    }
                    <div>
                        <b>About me</b>: {props.profile.aboutMe}
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(props.profile.contacts).map(key=>{
                            return <Contact key ={key} contactTitle={key} contactValue ={props.profile.contacts[key]}/>
                        })}
                    </div>
                </div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            </div>


        </div>);
}
const Contact = (contactTitle, contactValue) => {
    return <div className={s.contact}><b>ContactTitle</b>: {contactValue}</div>}



export default ProfileInfo;