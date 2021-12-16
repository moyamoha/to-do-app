import React, { useState, useRef, useEffect} from 'react'
import './login.css'
import {Link} from 'react-router-dom'

export default function Login({setUser}) { 
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const virhe = useRef()

    useEffect(() => {
        window.document.title = "login"
    })

    function authenticate(e) {
        e.preventDefault()
        fetch("/login", {
            method: "POST",
            cors: "Access-Control-Allow-Origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userName: userName, password: password }),
        }).then((res) => {
            if (res.status === 200) {
                virhe.current.textContent = ""
                setUser(userName);
                localStorage.setItem("token", JSON.stringify({userName: userName, password: password}))
            } else {
                virhe.current.textContent = "Ongelmia kirjautumisessa"
            }
        });
    }

    return (
        <div id="login-page">
            <form id="create-form" onSubmit={authenticate}>
                <section className='login-sect'>
                    <label>UserName</label>
                    <input type="text" className='login-input' value={userName} onChange={e => setUserName(e.target.value)} required={true}></input>
                </section>
                <section className='login-sect'>
                    <label>Password</label>
                    <input type="password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} required={true}></input>
                </section>
                <button type='submit' className='login-btn'>Log in</button>
                <div className='login-sect'>
                    <Link to="/create-account">Create new account</Link>
                </div>
                <div className='login-sect'>
                    <p style={{color: "red"}} ref={virhe}></p>
                </div>
            </form>
        </div>
    )
}
