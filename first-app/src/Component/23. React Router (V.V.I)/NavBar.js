
import { Link, NavLink } from "react-router-dom";
import Navbar from './Navbar.css'


function NavBar() {
    return (
        <div>
            <ul className="nav">
                <li><NavLink className="Nav-Link" to="/">Home</NavLink></li>
                <li><NavLink NavLink className="Nav-Link" to="/About">About</NavLink></li>
                <li><NavLink NavLink className="Nav-Link" to="/Contact">Contact</NavLink></li>
                <li><NavLink NavLink className="Nav-Link" to="/Filter">Filter</NavLink></li>
                <li><NavLink NavLink className="Nav-Link" to="/Login">Login</NavLink></li>
               
            </ul>
        </div>
    )
}

export default NavBar;