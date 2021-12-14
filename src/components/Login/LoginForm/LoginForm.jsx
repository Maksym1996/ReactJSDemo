import React, { useEffect, useState } from "react";
import { reduxForm, Field } from 'redux-form';
import ErrorMessage from "./ErrorMessage/ErrorMessage";

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
                elem => <ErrorMessage key={elem} message={elem}/>
            ))
        }
    }, [props.messages]);

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' name='email' component='input' />
            </div>
            <div>
                <Field placeholder='password' name='password' component='input' />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input' /> remember me
            </div>
            <div>
                <img src={props.captcha} alt='captcha' />
            </div>
            <div>
                <Field name='captcha' component='input' />
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
