
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


// import User from './Component/1. Funtional-component/User';
// import Test from './Component/2. Class-component/Test';
// import JSX from './Component/3. JSX/Jsx';
// import State from './Component/5. State in Functional-Component/State';
// import States from './Component/6. State in Class-Component/States';
// import ClickEvent from './Component/7. Click Event and Function/ClickandFunction';
import Students from './Component/8. Props with Functional-Component/Students';



function App() {
    const [name, setname] = useState("Imtiyaz");
    function check() {
        setname("Imtiyaz is a Front-End Developer");
    }
    return (
        <div className="App">
            {/* <h1>Props in React....</h1> */}
            {/* <User /> */}
            {/* <Test /> */}
            {/* <JSX /> */}
            {/* <State /> */}
            {/* <States /> */}
            {/* <ClickEvent /> */}

            <Students name={name} email="Imtiyazmd803@gmail.com" other={{ address: "Dubai", mobile: "9535554554544" }} />
            <Students name={name} email="Imtiyazmd803@gmail.com" other={{ address: "Noda", mobile: "9535554554544" }} />
            <Students name={name} email="Imtiyazmd803@gmail.com" other={{ address: "London", mobile: "9535554554544" }} />
            <button onClick={check}>Update Name</button>

        </div>
    );
}

export default App;

