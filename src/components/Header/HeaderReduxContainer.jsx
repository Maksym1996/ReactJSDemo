import React, { useEffect } from "react";
import Header from "./Header";
import { getCurrentUser } from '../../redux/actions/authActions';
import { connect } from "react-redux";

const HeaderReduxContainer = (props) => {

    useEffect(() => {
        props.getCurrentUser();
    })
    return (
        <Header 
            login={props.login}
            isAuth={props.isAuth} />
    )
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = {
    getCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderReduxContainer)