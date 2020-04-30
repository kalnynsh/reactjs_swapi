import React from 'react';
import { Redirect } from 'react-router-dom';

const LogoutPage = ({ isLoggedIn, onLogout }) => {

    if (isLoggedIn) {
        return (
            <div className="jumbotron">
                <p>You are going to logout...</p>
                <button
                    className="btn btn-primary"
                    onClick={onLogout}
                >
                    Logout
                    </button>
            </div>
        );
    }

    if (!isLoggedIn) {
        return <Redirect to="/" />;

    }
};

export default LogoutPage;
