import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        return props.isAuth
            ? <Component {...props} />
            : <Navigate to='/login' />
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    
    return ConnectedAuthRedirectComponent;
}

export default withAuthRedirect;