import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../validator/FormValidator";
import { Textarea } from "../../FormControl/FormControl";


const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                component={Textarea}
                validate={[required, maxLength50]}
                name='newMessageBody'
                placeholder='Enter new message' />
            <button>Add message</button>
        </form>
    )
}

export default reduxForm({ form: 'dialogAddMessage' })(AddMessageForm);