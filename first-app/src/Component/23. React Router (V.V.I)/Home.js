
import { Link } from "react-router-dom"
function Home() {

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is a about us page guys</p>
            <p>Router just like a pagination</p>
            <Link to="/About">Got About page</Link>

        </div>

    )

}


export default Home