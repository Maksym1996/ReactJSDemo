import React from 'react';
import Post from './Post/Post';
import s from './PostsSection.module.css';

const PostsSection = (props) => {
    let postElements = props.postData
        .map(el => <Post mes={el.message} likes={el.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let action = {
            type: 'ADD_POST'
        }
        props.dispatch(action);
    }


    let textAreaChangeHandler = (elem) => {
        let action = {
            type: 'UPDATE_POST_MESSAGE',
            message: elem.currentTarget.value
        }
        props.dispatch(action);
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