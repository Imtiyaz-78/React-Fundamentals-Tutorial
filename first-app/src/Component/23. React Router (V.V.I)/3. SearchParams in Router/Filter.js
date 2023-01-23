
import React from 'react'
import { useSearchParams } from 'react-router-dom'


function Filter() {

    const [searchparams, setSeachparams] = useSearchParams();

    console.log(searchparams.get('age'));

    const age = searchparams.get('age');
    const city = searchparams.get('city');
    return (
        <div>
            
            <h1>This is Filter Page</h1>
            <h1>Age is :{age}</h1>
            <br />
            <h2>City is :{city}</h2>
        </div>
    )
}


export default Filter;