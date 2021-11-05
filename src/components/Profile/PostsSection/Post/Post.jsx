import s from './Post.module.css';

const Post = (props) => {
    console.log(props);
    return (
        <div className={s.post}>
            {props.value.name}
        </div>
    );
}

export default Post;