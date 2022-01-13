import React, { useEffect, useState } from "react";
import { reduxForm, Field } from 'redux-form';
import { maxLengthCreator, required } from "../../../validator/FormValidator";
import { Input } from "../../FormControl/FormControl";
import ErrorMessage from "./ErrorMessage/ErrorMessage";

const maxLengthEmail = maxLengthCreator(50);
const maxLenghtPassword = maxLengthCreator(20);
const maxLenghtCaptcha = maxLengthCreator(10);

const LoginForm = (props) => {
    let [errorMessages, setErrorMessages] = useState([]);

    if (props.messages) {
        props.messages.map(
            el => <p>{el}</p>
        );
    }

    useEffect(() => {
        if (props.messages) {
            setErrorMessages(props.messages.map(
                elem => <ErrorMessage key={elem} message={elem} />
            ))
        }
    }, [props.messages]);

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLengthEmail]}
                    placeholder='login'
                    name='email' />
            </div>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLenghtPassword]}
                    placeholder='password'
                    name='password' />
            </div>
            <div>
                <Field
                    component={Input}
                    type='checkbox'
                    name='rememberMe' /> remember me
            </div>
            <div>
                <img src={props.captcha} alt='captcha' />
            </div>
            <div>
                <Field
                    component={Input}
                    validate={[required, maxLenghtCaptcha]}
                    name='captcha' />
            </div>
            <div>
                {errorMessages}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default reduxForm({ form: 'login' })(LoginForm);
