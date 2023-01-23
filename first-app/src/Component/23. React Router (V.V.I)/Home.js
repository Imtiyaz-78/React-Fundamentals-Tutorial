
import { Link, useNavigate } from "react-router-dom"

function Home() {
    
    const navigate = useNavigate();
    const NaToPage = (url) => {
        navigate(url)
    }

    return (
        <div>
            <h1>Home Page</h1>
            <p>This is a about us page guys</p>
            <p>Router just like a pagination</p>
            <Link to="/About">Got About page</Link>
            <br />

            <button onClick={() => NaToPage('/About')}> Got to About</button><br /><br />
            <button onClick={() => NaToPage('/Filter')}> Got to Filter</button><br /><br />
            <button onClick={() => NaToPage()}> Got to Home</button>


        </div>

    )

}


export default Home;