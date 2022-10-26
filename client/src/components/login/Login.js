import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import './Login.css';

function Login() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleSubmit = async () => {
        const data = {
            email: email,
            password: password
        }
        const res = await axios.post('http://localhost:5000/login', data);
        console.log(res.data);

    }
    return (
        <div className='d-flex justify-content-center'>
            <form id='form'>
                <h1>Log In</h1>
                <div className="form-outline mb-4 mt-5">
                    <label className="form-label" htmlFor="form2Example1">Email address</label>
                    <input type="email" onChange={(e) => setEmail(e.target.value)} id="form2Example1" className="form-control" />
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example2">Password</label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} id="form2Example2" className="form-control" />
                </div>

                <button type="button" className="btn btn-primary btn-block mb-4 w-100" style={{ backgroundColor: "#34ACE3" }} onClick={handleSubmit}>Sign in</button>
                <div className="text-center">
                    <div className="row mb-4">
                        <div className="col">

                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <p>Not a member? <a href="#!">Register</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login