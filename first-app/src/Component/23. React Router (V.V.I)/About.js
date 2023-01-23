
import { Link } from "react-router-dom";
function About() {
    return (
        <div>
            <h1>About Page</h1>
            <p>This is a about us page guys</p>
            <p>Router just like a pagination</p>
            <Link to="/Home" >Got About page</Link>
            <Link to="/StudentName/imtiyaz" state={{ name: 'developer', age: 30 }}>Imtiyaz</Link>


        </div>
    )
}


export default About;

