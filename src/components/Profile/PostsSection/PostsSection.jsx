import React from 'react';
import AddPostForm from './AddPostForm/AddPostForm';
import Post from './Post/Post';
import s from './PostsSection.module.css';

const PostsSection = (props) => {
    let postElements = props.postData
        .map(el => <Post key={el.id} mes={el.message} likes={el.likes} />)

    const onSubmit = (formData) => {
        props.onAddPost(formData.newPostBody)
    }

    return (
        <div className={s.postsSection}>
            <h3>
                My posts
            </h3>
            <AddPostForm onSubmit={onSubmit} />
            <div className={s.postsList}>
                {postElements}
            </div>
        </div>
    );
}

export default PostsSection;