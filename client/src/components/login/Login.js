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
            <form id='form' className='px-5'>
                <div>
                    <span className='firstBlueTitle'>Log In</span>
                </div>
                <div className="form-outline mb-4 mt-4">
                    <input placeholder='Email' type="email" onChange={(e) => setEmail(e.target.value)} id="form2Example1" className="krankenInputStyle krankenInputStepStyle p-2" />
                </div>
                <div className="form-outline mb-4">
                    
                    <input placeholder='Password' type="password" onChange={(e) => setPassword(e.target.value)} id="form2Example2" className="krankenInputStyle krankenInputStepStyle p-2" />
                </div>
                <button type="button" className="krankenBtnStyle mb-3" style={{ backgroundColor: "#34ACE3" }} onClick={handleSubmit}>Sign in</button>
                {/* <div className="text-center">
                    <div className="row mb-4">
                        <div className="col">
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>
                    <span>Not a member? <a href="#!">Register</a></span>
                </div> */}
            </form>
        </div>
    )
}

export default Login