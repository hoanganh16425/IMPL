import React from 'react'
import '../../../assets/styles/form.scss'
import './login.scss'
function Login() {
    return (
        <>
            <div className="page-container">
                <div className="auth-container">
                    <div className="auth-logo">
                        <img src={require("../../../assets/img/IMPL_1.png")} />
                    </div>
                    <h1 className="auth-title">
                        Login
                    </h1>
                    <form className="auth-form">
                        <label htmlFor="username">User</label>
                        <input type="text" id="username" placeholder="johndoe" />
                        <label htmlFor="password">Password</label>
                        <div className="password-input">
                            <input id="password" placeholder="Password" />

                        </div>
                        <div className="forgot-password">
                            <a href="/">Forgot Password</a>
                        </div>
                        <button type="button">Sign in</button>
                    </form>
                </div >
            </div >
        </>
    )
}

export default Login