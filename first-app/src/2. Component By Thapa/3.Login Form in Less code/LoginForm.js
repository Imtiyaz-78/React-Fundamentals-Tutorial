import React, { useState } from 'react'
import Multipleform from './Multipleform.css'

export const LoginForm = () => {
    const [fullName, seFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",

    });


    // onChange karne par
    const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // 1st method
        // const value = event.target.value;
        // const name = event.target.name;

        // 2nd Method By Dstructuring
        const { value, name } = event.target;

        seFullName((preValue) => {

            return {
                ...preValue,
                [name]: value,
            }

            // if (name === "fName") {
            //     return {
            //         fName: value,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: preValue.phone

            //     };

            // } else if (name === "lName") {
            //     return {
            //         fName: preValue.fName,
            //         lName: value,
            //         email: preValue.email,
            //         phone: preValue.phone

            //     };

            // } else if (name === "email") {
            //     return {
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: value,
            //         phone: preValue.phone

            //     };

            // } else if (name === "phone") {
            //     return {
            //         fName: preValue.fName,
            //         lName: preValue.lName,
            //         email: preValue.email,
            //         phone: value,

            //     };

            // }


        });

    };


    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submited");

    };



    return (
        <>
            <div className='main-div'>
                <form >
                    <div className='Conatiner'>
                        <h1>Hello {fullName.fName} {fullName.lName}</h1>
                        <p>{fullName.email} </p>
                        <p> {fullName.phone}</p>

                        <input type="text" placeholder='Enter Your Name' name="fName" className='no-outline first' onChange={inputEvent} value={fullName.fName} />

                        <input type="text" placeholder='Enter Your Last Name' name="lName" className='no-outline' onChange={inputEvent} value={fullName.lName} />

                        <input type="email" placeholder='Enter Your Email' className='no-outline' name="email" value={fullName.email} onChange={inputEvent} />


                        <input type="number" placeholder='Enter Your Mobile' className='no-outline' name="phone" value={fullName.phone} onChange={inputEvent} />


                        <button type='submit' className='btn' onClick={onSubmits} >SUBMIT ME</button>
                    </div>

                </form>
            </div>

        </>
    )
}


