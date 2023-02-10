import React, { useEffect, useState } from 'react';
import axios from "axios";

const API_Using_Axios = () => {

    const [num, setNum] = useState();
    const [name, setName] = useState();
    const [moves, setMove] = useState();

    useEffect(() => {

        const getData = async () => {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(response.data.name);
            setName(response.data.name)
            setMove(response.data.moves.length);

        }

        getData();
    })

    return (

        <>

            <h1>You are Select <span style={{ color: 'red' }}>  the Value {num} </span></h1>
            <h1>My name is <span style={{ color: 'red' }}> {name} </span></h1>
            <h1>I have <span style={{ color: 'red' }}>  {moves} </span></h1>


            <div>
                <select value={num} onChange={(event) => {
                    setNum(event.target.value)
                }}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="50">50</option>
                    <option value="52">52</option>
                </select>

            </div>

        </>
    )
}

export default API_Using_Axios;


