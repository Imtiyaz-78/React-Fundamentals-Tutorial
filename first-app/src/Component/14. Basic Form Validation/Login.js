import React, { useState } from 'react'
function Login() {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function SubmitHandeler(e) {
        if (user.length < 8 || password.length < 8) {
            alert("Type correct values")
        }
        else {
            alert("All good)")
        }

        e.preventDefault()
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 8) {
            setUserErr(true)
        }
        else {
            setUserErr(false)
        }
        setUser(item)
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length < 8) {
            setPassErr(true)
        }
        else {
            setPassErr(false)
        }
        setPassword(item)

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={SubmitHandeler}>
                <input type="text" placeholder="Enter User Id" onChange={userHandler} />{userErr ? <span>User Not Valid</span> : ""}
                <br /> <br />
                <input type="password" placeholder="Enter User Password" onChange={passwordHandler} />{passErr ? <span>Password Not Valid</span> : ""}

                <br /> <br />
                <button type="submit"  >Login</button>
            </form>
        </div>
    )
}

export default Login;