

import { useState } from "react"


function Profile() {
    const [login, Setlogin] = useState(1);

    // if(login){
    //     return(
    //         <h1>Welcome Imtiyaz</h1>
    //     )
    // }else{
    //     return(
    //         <h1>Welcome Developer</h1>
    //     )
    // }

    // Best Way For Condtion
    return (
        <div>
            {/* // Single Codition  */}
            {/* {login ? <h1>Hello Imtiyuaz</h1> : <h1>Hello Developer</h1>} */}

            {/* For Multiple Conditioion that means if , else if , else */}
            {login == 1 ? <h1>Welcome User 1</h1> : login == 2 ? <h1>Welcome User 2</h1> : <h1>Welcome User 3</h1>}

        </div>
    )


}

export default Profile;