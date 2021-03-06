
import React from 'react'
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import API from "../utils/API"


function Signup() {

    const handleLogout = async() => {
        await API.logout()
        console.log("logout successful")
}

    return (
        <>
            <header className="row text-center">
                <h1>Welcome to the Justice League!</h1>
            </header>
            <div className="row text-center">
                <div className="col-6 m-auto">
                    <br />
                    <p>
                        Please log in or sign up:
            </p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col-4 my-5 mx-5" id="loginContainer">
                    <LoginForm />
                </div>
                <div className="col-4 my-5 mx-5" id="signUpContainer">
                    <SignUpForm />
                </div>
            </div>
            <div>
                <a className='btn btn-danger' onClick={handleLogout}>
                    Logout
                </a>
            </div>
        </>
    )
}


export default Signup;