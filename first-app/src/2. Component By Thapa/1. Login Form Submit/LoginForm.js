import React, { useState } from 'react'
import Login from './Login.css'

export const LoginForm = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState("");
    const [FinalFullName, seTFinalFullName] = useState("");



    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        seTFinalFullName(lastName);
    };
   
    // onChange karne par
    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);

    };
    
    // onChange karne par
    const inputEventTwo = (event) => {
        setLastName(event.target.value);
    }



    return (
        <>

            <form >

                <div className='Conatiner'>
                    <h1>Hello {fullName} {FinalFullName}</h1>
                    
                    <input type="text" placeholder='Enter Your Name' className='no-outline first' onChange={inputEvent} value={name} />

                    <input type="text" placeholder='Enter Your LastName' className='no-outline' onChange={inputEventTwo} value={lastName} />
                    <button type='submit' className='btn' onClick={onSubmits} >SUBMIT ME</button>
                </div>
            </form>

        </>
    )
}
