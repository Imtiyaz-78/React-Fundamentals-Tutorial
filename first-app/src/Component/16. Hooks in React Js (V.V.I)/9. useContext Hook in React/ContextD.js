import React from 'react';
import { FirstName, LastName } from './ContextsA';

/* jab hum Context API use kartey hai to hamre received karne ke liye Consumer use karna tha now
   usecontext use karne bahut easlity kar patey hai ContextB use kiya gya hai 
*/

// Ye function Context API ka hai Component isme use huwa hai
const ContextD = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fName) => {
                    return (
                        <LastName.Consumer>
                            {(lName) => {
                                return <h1>This is a {fName} {lName}</h1>
                            }}
                        </LastName.Consumer>
                    )
                }}
            </FirstName.Consumer>
        </>
    )
}

export default ContextD;
