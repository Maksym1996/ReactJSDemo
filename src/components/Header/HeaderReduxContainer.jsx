import React, { useEffect } from "react";
import Header from "./Header";
import { setUserData } from '../../redux/actions/authActions';
import { connect } from "react-redux";
import authAPI from "../../api/authAPI";

const HeaderReduxContainer = (props) => {

    useEffect(() => {
        authAPI.getCurrentUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, login, email } = data.data;
                    props.setUserData(id, email, login)
                }
            })
    })
    return (
        <Header login={props.login}
            isAuth={props.isAuth} />
    )
}

let mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    setUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderReduxContainer)