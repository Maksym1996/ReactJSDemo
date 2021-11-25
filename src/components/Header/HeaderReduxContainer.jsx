import React, { useEffect } from "react";
import Header from "./Header";
import { setUserData } from '../../redux/actions/authActions';
import { connect } from "react-redux";
import axios from "axios";

const HeaderReduxContainer = (props) => {

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
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