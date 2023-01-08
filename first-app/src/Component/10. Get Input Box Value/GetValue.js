import { useState } from "react";


// function GetValue() {
//     const [GetData, Setvalue] = useState("Hello");

//     function set(val){
//         Setvalue(val.target.value);
//     }

//     return (
//         <div>
//             <h1>{GetData} </h1>
//             <input type="text" onChange={set}></input>

//         </div>
//     )
// }

// export default GetValue;




function GetValue() {
    const [GetData, Setvalue] = useState(null);
    const [print, setprint] = useState(false);

    function get(val) {
        console.log(val.target.value);
        Setvalue(val.target.value);
        setprint(false)
    }

    return (
        <div>

            {print ? <h1>{GetData}</h1> : null}

            <input type="text" onChange={get}></input>
            <br />
            <br />
            <button onClick={() => setprint(true)}>Click To Show</button>


        </div>
    )
}

export default GetValue;