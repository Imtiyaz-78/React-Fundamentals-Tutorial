import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

    const chek = () => {
        localStorage.setItem('Login', true);
        navigate('/');

    }
    const navigate = useNavigate();
    useEffect(() => {
        let Login = localStorage.getItem('Login');
        if (Login) {
            navigate('/');
        }
    });
    return (
        <div>
            <h1>Login Page</h1>
            <p>This is login button</p>
            <input type="text" /><br />
            <input type="text" /><br />
            <button onClick={chek}>Login</button>


        </div>
    )
}


export default Login;