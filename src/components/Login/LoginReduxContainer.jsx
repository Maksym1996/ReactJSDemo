import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../../redux/actions/authActions";
import { getCaptchaUrl } from "../../redux/actions/securityActions";
import LoginForm from "./LoginForm/LoginForm";


const LoginReduxContainer = (props) => {
    const onSubmit = (formData) => {
        props.loginUser(formData);
        props.getCaptchaUrl();
    };

    useEffect(() => {
        props.getCaptchaUrl()
    }, [])


    return (
        <div>
            <hi>LOGIN</hi>
            <LoginForm onSubmit={onSubmit} captcha={props.captchaUrl} messages={props.messages} />
        </div>
    )
}

let mapDispatchToProps = {
    loginUser, getCaptchaUrl
}

let mapStateToProps = (state) => {
    return {
        messages: state.auth.messages,
        captchaUrl: state.security.captchaUrl
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginReduxContainer)
