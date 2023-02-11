
import { useParams, useLocation } from "react-router-dom";


function StudentName() {
    const location = useLocation();
    console.log(location)
    const params = useParams();
    const { name } = params;
    
    console.log(name);
    return (
        <div>
            <h1>This is {name} Page</h1>
        </div>
    )
}


export default StudentName;