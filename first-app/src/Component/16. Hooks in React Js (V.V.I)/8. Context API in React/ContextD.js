import React from 'react';
import { FirstName, LastName } from './ContextA';

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
