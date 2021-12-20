import React from "react";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newMessageBody' placeholder='Enter new message' />
            <button>Add message</button>
        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessage' })(AddMessageForm);