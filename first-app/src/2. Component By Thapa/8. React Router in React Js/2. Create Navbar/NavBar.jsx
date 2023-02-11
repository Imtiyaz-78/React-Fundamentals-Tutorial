
import { NavLink } from "react-router-dom";
import navbar from './navbar.css'


function NavBar() {
    return (
        <div>
            <ul className="nav">
                <li><NavLink  className="Nav-Link" to="/">Home</NavLink></li>
                <li><NavLink  className="Nav-Link" to="/AboutUs">About</NavLink></li>
                <li><NavLink  className="Nav-Link" to="/Contact">Contact</NavLink></li>
                <li><NavLink  className="Nav-Link" to="/Login">Login</NavLink></li>
                <li><NavLink  className="Nav-Link" to="/User/imtiyaz/developer">User</NavLink></li>
            </ul>
        </div>
    )
}

export default NavBar;