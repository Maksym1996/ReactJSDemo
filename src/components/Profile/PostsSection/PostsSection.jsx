import Post from './Post/Post';
import s from './PostsSection.module.css';

const PostsSection = () => {
    return (
        <>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.postsSection}>
                <Post mes = 'Hi, evetyone!!' likes = '15'/>
                <Post mes = 'Bye bye all' likes = '20'/>
            </div>
        </>
    );
}

export default PostsSection;