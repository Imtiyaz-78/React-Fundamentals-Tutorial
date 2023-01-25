

import React, { useEffect, useState } from 'react'
import Styles from "./Styles.css"


const Prefilled = () => {

    const [data, setData] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");

    useEffect(() => {
        getlist()

    }, [])   // Ek Bar hi cahle so i passed Blank Array


    function getlist() {

        fetch("http://localhost:3000/users").then((result) => {
            result.json().then((response) => {
                console.log(response);
                setData(response);  // API Ka data store kar rahe hai 

                setName(response[0].name);
                setMobile(response[0].phone);
                setEmail(response[0].email);
            })
        })

    }

    function deletData(id) {
        fetch(`http://localhost:3000/users/${id}`, {
            method: `DELETE`

        }).then((result) => {
            result.json().then((resp) => {
                console.log(resp);
                getlist();
            })
        })
    }

    function selectUser(id) {
        console.log(data[id - 1]); // ye data print karne ke liye hai console mein
       /* setName(data[id - 1].name);
        setMobile(data[id - 1].phone);
        setEmail(data[id - 1].email); */
        // ya other way simple of above code
        let item = data[id - 1];
        setName(item.name);
        setMobile(item.phone);
        setEmail(item.email);


    }


    return (
        <>
            <h1>Pre-Filled Form Data </h1>

            <table className='Table'>
                <tbody>
                    <tr className='heading'>
                        <td>User ID</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Operations</td>
                        <td>Operations</td>
                    </tr>
                </tbody>

                {
                    data.map((items) =>
                        <tr className='Tdata'>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.phone}</td>
                            <td>{items.email}</td>
                            <td><button className='btn' onClick={() => deletData(items.id)}>Delete</button></td>
                            <td><button className='btn' onClick={() => selectUser(items.id)}>Update</button></td>
                        </tr>

                    )
                }

            </table>

            <div className='from'>
                <input class="no-outline" placeholder='Enter Name' type="text" value={name} /><br /><br />
                <input class="no-outline" placeholder='Enter Number' type="text" value={mobile} /><br /><br />
                <input class="no-outline" placeholder='Enter Email' type="text" value={email} /><br /><br />
                <button >Update User</button>

            </div>

        </>
    )
}

export default Prefilled;