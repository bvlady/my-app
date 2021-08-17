import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Cameronavatar.jpg/200px-Cameronavatar.jpg'></img>
            {props.message};
            <div>
                <span> like</span> {props.likeCount}
            </div>
        </div>
    )
}
export default Post;