import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo savePhoto = {props.savePhoto}
                isOwner={props.isOwner}
                         profile={props.profile}
                         status = {props.status}
                         saveProfile = {props.saveProfile}
                         updateStatus = {props.updateStatus}/>
            <MyPostsContainer store={props.store}/>
        </div>);
}
export default Profile;