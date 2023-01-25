

import React, { useEffect, useState } from 'react'
// import style from './styles.css'
import Styles from "./Styles.css"


const Delete = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getlist()

    }, [])   // Ek Bar hi cahle so i passed Blank Array


    function getlist() {

        fetch("http://localhost:3000/users").then((result) => {
            result.json().then((response) => {
                console.log(response);
                setData(response);
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

    return (
        <>
            <h1>DELETE METHOD IN REACT JS </h1>

            <table className='Table'>
                <tbody>
                    <tr className='heading'>
                        <td>User ID</td>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Manage</td>
                    </tr>
                </tbody>

                {
                    data.map((items) =>
                        <tr className='Tdata'>
                            <td>{items.id}</td>
                            <td>{items.name}</td>
                            <td>{items.phone}</td>
                            <td><button className='btn' onClick={() => deletData(items.id)}>Delete</button></td>
                        </tr>

                    )
                }

            </table>

        </>
    )
}

export default Delete