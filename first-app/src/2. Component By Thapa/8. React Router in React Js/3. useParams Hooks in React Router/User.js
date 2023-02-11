
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';


const User = () => {

    const { name, lname } = useParams();

    const location = useLocation();
    console.log(location);
   

    return (
        <div>
            <h1>This is {name} {lname} Page</h1>
            <p>My Current Loaction is {location.pathname}</p>

            {location.pathname === `/User/imtiyaz/developer` ? <button >Click me</button> : null}

        </div>
    )
}

export default User;

