import { useParams, useLocation } from "react-router-dom";

function UseLocation() {
    const location = useLocation();
    console.log(location)
    console.log(name);

    const { name, lname } = useParams();

    return (
        <div>
            <h1>This is {name} {lname} Page</h1>
            <p>Current Pathname {location.pathname}</p>
        </div>
    )
}


export default UseLocation;


// useLocation ka Example useParams folder ke under User.js mein hai Achhe se iss file aesa kuchh nhi hai