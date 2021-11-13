import React from 'react';
import { addPostActionCreator, updatePostMessageActionCreator } from '../../../redux/store';
import Post from './Post/Post';
import s from './PostsSection.module.css';

const PostsSection = (props) => {
    let postElements = props.postData
        .map(el => <Post mes={el.message} likes={el.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let textAreaChangeHandler = (elem) => {
        let postText = elem.currentTarget.value;
        props.dispatch(updatePostMessageActionCreator(
            { message: postText }));
    }

    return (
        <div className={s.postsSection}>
            <h3>
                My posts
            </h3>
            <div className={s.inputPostBlock}>
                <div>
                    <textarea ref={newPostElement} value={props.postMessage} onChange={textAreaChangeHandler} placeholder='Enter your message...' />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.postsList}>
                {postElements}
            </div>
        </div>
    );
}

export default PostsSection;