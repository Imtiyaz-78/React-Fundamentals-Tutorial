

import React, { useEffect, useState } from 'react';
import style from './style.css';


const CallGetMethodAPI = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result) => {
            result.json().then((response) => {
                // console.log(response);
                setData(response);
            })
        })

    }, [])      // Ek Bar hi cahle so i passed Blank Array
    
    return (
        <>
            <h1>How to Calling API</h1>

            <table className='Table'>
                <tbody>
                    <tr className='heading'>
                        <td>User ID</td>
                        <td>Name</td>
                        <td>User Name</td>
                        <td>Email</td>
                        <td>Pin Code</td>
                        <td>Street</td>
                        <td>City</td>
                        <td>suite</td>
                        <td>geo</td>
                        <td>lng</td>
                        <td>Phone Number</td>
                    </tr>
                </tbody>

                {
                    data.map((items) => 
                        <tr className='Tdata'>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.username}</td>
                            <td>{items.email}</td>
                            <td>{items.address.zipcode}</td>
                            <td>{items.address.street}</td>
                            <td>{items.address.city}</td>
                            <td>{items.address.suite}</td>
                            <td>{items.address.geo.lat}</td>
                            <td>{items.address.geo.lng}</td>
                            <td>{items.phone}</td>
                        </tr>

                    )
                }

            </table>
        </>
    )
}

export default CallGetMethodAPI; 


