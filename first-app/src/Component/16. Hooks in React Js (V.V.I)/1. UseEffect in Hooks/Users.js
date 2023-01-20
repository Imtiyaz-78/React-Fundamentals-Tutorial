import React, { useEffect } from 'react'

function Users(Props) {

    useEffect(() => {
        alert("count is"  +   Props.getCount );
        

    },[Props.getCount])
    

    return (
        <div>
            <h1> Count Props : {Props.getCount}</h1>
            <h1> Data Props : {Props.getData}</h1>
        </div>
    )
}
export default Users;