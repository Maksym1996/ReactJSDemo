import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { reduxForm, Field } from 'redux-form';
import authAPI from "../../api/authAPI";
import securityAPI from "../../api/securityAPI";

const LoginForm = (props) => {
    const [captcha, setCaptcha] = useState();

    useEffect(() => {
        props.captcha.then(c => {
            setCaptcha(c);
        })
    },[])
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder='login' name='email' component='input'/>
            </div>
            <div>
                <Field placeholder='password' name='password' component='input' />
            </div>
            <div>
                <Field type='checkbox' name='rememberMe' component='input'/> remember me
            </div>
            <div>
                <img src={captcha} alt='captcha' />
            </div>
            <div>
                <Field name='captcha' component='input' />
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        authAPI.loginToSystem(formData).then(data => {
            console.log(data)
        });
    }

   const captcha = securityAPI.getCaptchaUrl();
    
    return (
        <div>
            <hi>LOGIN</hi>
            <LoginReduxForm onSubmit={onSubmit} captcha={captcha}/>
        </div>
    )
}
export default Login;
