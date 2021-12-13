import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from 'redux-form';
import securityAPI from "../../api/securityAPI";
import { loginUser } from "../../redux/actions/authActions";

const LoginForm = (props) => {
    const [captcha, setCaptcha] = useState();

    useEffect(() => {
        props.captcha.then(c => {
            setCaptcha(c);
        })
    }, [])

    let messages

    if (props.messages) {
        messages = props.messages.map(
            el => <p>{el}</p>
        );
    }
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
                <img src={captcha} alt='captcha' />
            </div>
            <div>
                <Field name='captcha' component='input' />
            </div>
            <div>
                {messages}
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData);
    };

    const captcha = securityAPI.getCaptchaUrl();

    return (
        <div>
            <hi>LOGIN</hi>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha} messages={props.messages} />
        </div>
    )
}

let mapDispatchToProps = {
    loginUser
}

let mapStateToProps = (state) => {
    return {
        messages: state.auth.messages
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
