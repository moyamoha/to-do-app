import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login/login.css'

export default function CreateAccount({setUser}) { 
    const [userName, setUserName] = useState("")
    const [password1, setPassword1] = useState("")
    const [password2, setPassword2] = useState("")
    const [showPassword1, setShowPassword1] = useState(false)
    const [showPassword2, setShowPassword2] = useState(false)

    function createAndLogin(e) {
        e.preventDefault()
        if (password1 !== password2) {
            window.alert("passwords do not match")
            return
        }
        // todo: create new account in server

        fetch("/create-account", {
            method: "POST",
            cors: "Access-Control-Allow-Origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName: userName, password: password1 }),

        }).then(res => {
            if (res.status === 200) {
                setUser(userName)
            } else {
                return <div>Nyt jotain on viassa</div>
            }
        })

    }

    return (
        <div id="login-page">
            <form id="create-form" onSubmit={createAndLogin}>
                <section className="login-sect">
                    <label>UserName</label>
                    <input
                        type="text"
                        className="createuser-input"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        required={true}
                    ></input>
                </section>
                <section className="login-sect">
                    <label>Password</label>
                    <div>
                        <input
                            type={showPassword1 ? "text" : "password"}
                            className="create-password-input"
                            value={password1}
                            onChange={(e) => setPassword1(e.target.value)}
                            required={true}
                        ></input>
                        <span onClick={() => setShowPassword1(!showPassword1)}>
                            {showPassword1 ? "👁" : "⛔"}
                        </span>
                    </div>
                </section>
                <section className="login-sect">
                    <label>Password</label>
                    <div>
                        <input
                            type={showPassword2 ? "text" : "password"}
                            className="create-password-input"
                            value={password2}
                            onChange={(e) => setPassword2(e.target.value)}
                            required={true}
                        ></input>
                        <span onClick={() => setShowPassword2(!showPassword2)}>
                            {showPassword2 ? "👁" : "⛔"}
                        </span>
                    </div>
                </section>
                <button type="submit" className="login-btn">
                    Create Account
                </button>
                <div className='login-sect'>
                    <Link to="/login">Already have an account? Login</Link>
                </div>
            </form>
        </div>
    );
}
