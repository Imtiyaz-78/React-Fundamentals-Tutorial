
import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    const { name, lname } = useParams();

    return (
        <div>
            <h1>This is {name} {lname} Page</h1>
        </div>
    )
}

export default User;

