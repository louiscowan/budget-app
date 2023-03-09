import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

function Login () {

    const auth = getAuth()

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ showPassword, setShowPassword ] = useState("password")

    function togglePassword () {
        if(showPassword === 'password') {
            setShowPassword("text")
        } else {
            setShowPassword('password')
        }
    }

    function login (e) {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            console.log('signed in')
        })
        .catch(err => {
            console.log(err.message)
        })
    }

    return(
        <div>
            <form onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input required type="text" id="email" onChange={e => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input required  type={showPassword} onChange={e => setPassword(e.target.value)}/>
                
                <label htmlFor="showPassword">ShowPassword</label>
                <input type="checkbox" id="showPassword" onClick={togglePassword}/>
                <button>Login</button>
            </form>
        </div>
    )
}


export default Login