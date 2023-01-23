

import { Link, Outlet } from "react-router-dom";


function Contact() {


    return (
        <div>

            <h1>Contact Us Page</h1>
            <h2>This is my contact details Guys</h2>
            <Link to="Company" >Company</Link><br />
            <Link to="Store">Store</Link><br />
            <Link to="Other">Other</Link>
            <Outlet />

        </div>
    )
}


export default Contact;