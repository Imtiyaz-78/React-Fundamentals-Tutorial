import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';


const Title = () => {

    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `You are Cliked me ${counter} Times`;
    })

    return (
        <>   <h1> {counter}</h1>
            <Button variant="success" onClick={() => setCounter(counter + 1)}>Success </Button>

        </>
    )
}

export default Title
