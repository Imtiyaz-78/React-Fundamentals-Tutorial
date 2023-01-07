
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Students from './Component/7. Props/Students';


function App() {
  const [name, setname] = useState("Imtiyaz");
  function check() {
    setname("Imtiyaz is a Front-End Developer");
  }
  return (
    <div className="App">
      <h1>Props in React </h1>
   
      <Students name={name} />
      <button onClick={check}>Update Name</button>

    </div>
  );
}

export default App;


