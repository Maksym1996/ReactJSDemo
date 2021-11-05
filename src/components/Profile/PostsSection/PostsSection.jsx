import Post from './Post/Post';
import s from './PostsSection.module.css';

const Posts = () => {
    return (
        <>
            My posts
            <div className={s.postsSection}>
                <Post value = {{name: 'Post1'}}/>
                <Post value = {{name: 'Post2'}}/>
            </div>
        </>
    );
}

export default Posts;