
import React, { useEffect, useState } from 'react'

function Post() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");


    function saveData() {
        let data = { name, email, mobile }
        // console.log(data);
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then((resp) => {
            // console.log("resp",resp);
            resp.json().then((result) => {
                console.warn("result", result)
            })
        })
    }


    return (
        <div>
            <h1>POST API Example </h1>
            <input placeholder='Enter Name' type="text" name="name" value={name} onChange={(e) => { setName(e.target.value) }} /> <br /> <br />

            <input placeholder='Enter Email' type="text" name="email" value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br /> <br />

            <input placeholder='Enter Mobile Number' type="text" name="mobile" value={mobile} onChange={(e) => { setMobile(e.target.value) }} /> <br /> <br />
            <button type="button" onClick={saveData} >Save New User</button>
        </div>
    );
}
export default Post;





