import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        return props.isAuth ? <Component {...props} /> : <Navigate to='/login' />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;