
import { Link } from "react-router-dom";


function NavBar() {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/StudentName/Mom">Mom</Link></li>
                <li><Link to="/StudentName/Abbu">Abbu</Link></li>
               
            </ul>
        </div>
    )
}

export default NavBar