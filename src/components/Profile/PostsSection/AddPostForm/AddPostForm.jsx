import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../../validator/FormValidator";
import { Textarea } from "../../../FormControl/FormControl";
import styles from './AddPostForm.module.css'

const maxLength40 = maxLengthCreator(40);

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.inputPostBlock}>
                <div>
                    <Field
                        component={Textarea}
                        validate={[required, maxLength40]}
                        name='newPostBody'
                        placeholder='Enter your message...' />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'profileAddPost' })(AddPostForm);