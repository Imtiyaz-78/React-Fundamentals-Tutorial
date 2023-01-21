import { useParams } from "react-router-dom";



function StudentName() {
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