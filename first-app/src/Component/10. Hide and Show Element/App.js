
import logo from './logo.svg';
import './App.css';
// import React from 'react';


// import User from './Component/1. Funtional-component/User';
// import Test from './Component/2. Class-component/Test';
// import JSX from './Component/3. JSX/Jsx';
// import State from './Component/5. State in Functional-Component/State';
// import States from './Component/6. State in Class-Component/States';
// import Students from './Component/7. Props/Students';
// import Propss from './Component/8. Props with Class-Component/Propss';

import React, { useState } from 'react'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      {
        show ? <h1>Hello World !</h1> : null
      }
      <button onClick={() => setShow(true)} >Show</button>
      <button onClick={() => setShow(false)} >Hide</button>
      {/* <button onClick={()=>setShow(!show)} >Toggle</button>  */}
    </div>
  );
}

export default App;




// jjffj