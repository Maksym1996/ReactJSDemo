import React from "react";
import { Field, reduxForm } from "redux-form";
import styles from './AddPostForm.module.css'

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.inputPostBlock}>
                <div>
                    <Field component='textarea' name='newPostBody' placeholder='Enter your message...' />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'profileAddPost' })(AddPostForm);