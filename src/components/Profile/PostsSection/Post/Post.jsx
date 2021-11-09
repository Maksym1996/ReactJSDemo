import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyC62gxaLN1W1BmYQzMqmBnM3qJ28exYDgQ&usqp=CAU' />
            {props.mes}

            <div className={s.like}>
                <span>&#9731;</span>
                &nbsp;
                <span>{props.likes}</span>
            </div>
        </div>
    );
}

export default Post;