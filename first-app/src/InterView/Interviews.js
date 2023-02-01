import React, { useState } from 'react'
import Styles from './Styles.css'

export const Interviews = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [fullName, setFullName] = useState("");
    const [FinalFullName, seTFinalFullName] = useState("");



    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        seTFinalFullName(lastName);
    };


    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);

    };


    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    }

    return (
        <>
            <form >

                <div className='Conatiner'>
                    <h1> {fullName} {FinalFullName}</h1><br /><br /><br />
                    <input type="text" placeholder='Enter Your First Name' className='no-outline first' onChange={inputEvent} value={name} /><br />

                    <input type="text" placeholder='Enter Your LastName' className='no-outline' onChange={inputEventTwo} value={lastName} />
                    <button type='submit' className='btn' onClick={onSubmits} >SUBMIT ME</button>
                </div>
            </form>

        </>
    )
}


