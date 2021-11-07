import s from './Post.module.css';

const Post = (props) => {
    console.log(props);
    return (
        <div className={s.post}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyC62gxaLN1W1BmYQzMqmBnM3qJ28exYDgQ&usqp=CAU' />
            {props.mes}
            <div className={s.like}>
                &#9731;&nbsp;{props.likes}
            </div>
        </div>
    );
}

export default Post;