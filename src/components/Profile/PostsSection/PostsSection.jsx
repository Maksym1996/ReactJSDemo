import Post from './Post/Post';
import s from './PostsSection.module.css';

const PostsSection = (props) => {
    let postElements = props.postData
        .map(el => <Post mes={el.message} likes={el.likes} />)

    return (
        <div className={s.postsSection}>
            <h3>
                My posts
            </h3>

            <div className={s.inputPostBlock}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.postsList}>
                {postElements}
            </div>
        </div>
    );
}

export default PostsSection;