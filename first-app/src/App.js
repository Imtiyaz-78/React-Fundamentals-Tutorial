
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

// import User from './Component/1. Funtional-component/User';
// import Test from './Component/2. Class-component/Test';
// import JSX from './Component/3. JSX/Jsx';
// import State from './Component/5. State in Functional-Component/State';
// import States from './Component/6. State in Class-Component/States';
// import ClickEvent from './Component/7. Click Event and Function/ClickandFunction';
// import Students from './Component/8. Props with Functional-Component/Students';
// import Data from './Component/9. Props wirh Class-Component/PropsClass';
// import GetValue from './Component/10. Get Input Box Value/GetValue';
// import HideAndShow from './Component/11. Hide and Show Element/HideandShow';
// import Form from './Component/12. Handle Form/Form';
// import Profile from './Component/13. Conditional Rendering/Profiles';
// import Login from './Component/14. Basic Form Validation/Login';
// import Constuctor from './Component/15. Life Cycle Method with Class Componenet/1. Contructor Life Cycle Method/Constructor';
// import Render from './Component/15. Life Cycle Method with Class Componenet/2. Render Life Cycle Method/Render';
// import Mount from './Component/15. Life Cycle Method with Class Componenet/3. componentDidMount Life Cycle method/Mount';
// import Update from './Component/15. Life Cycle Method with Class Componenet/4. componentDidUpdate Life Cycle Method/Update';
// import ShouldUpdate from './Component/15. Life Cycle Method with Class Componenet/5. shouldComponentUpdate/ShouldUpdate';
// import Unmount from './Component/15. Life Cycle Method with Class Componenet/6. componentWillUnmount in Life Cycle/Unmount';

// import Imtiyaz from './Component/16. Hooks in React Js (V.V.I)/1. UseEffect in Hooks/Imtiyaz';
// import UseEffectWithStateAndProps from './Component/16. Hooks in React Js (V.V.I)/1. UseEffect in Hooks/UseEffectWithStateAndProps';

// import First from './Component/16. Hooks in React Js (V.V.I)/3. Styling In React JS/First';
// import Boot from './Component/16. Hooks in React Js (V.V.I)/4. BootStrap/Boot';
// import ArrayListWithmap from './Component/16. Hooks in React Js (V.V.I)/4. BootStrap/ArrayListWithmap';
// import List from './Component/16. Hooks in React Js (V.V.I)/4. BootStrap/1. List With BootStrap Table/List';
// import NestedList from './Component/16. Hooks in React Js (V.V.I)/4. BootStrap/2. Nested List In React Js/NestedList';
// import Reuse from './Component/17. Reuse Component in Loop/Reuse';
// import Fragments from './Component/18. React Fragment/Fragments';
// import ParentComponent from './Component/19. Lifting State Up/ParentComponent';
import PureComponents from './Component/20. Pure Component/PureComponents';



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
            {/* <Students name={name} email="Imtiyazmd803@gmail.com" other={{ address: "Dubai", mobile: "9535554554544" }} />
            <Students name={name} email="Imtiyazmd803@gmail.com" other={{ address: "Noda", mobile: "9535554554544" }} />
            <Students name={name} email="Imtiyazmd803@gmail.com" other={{ address: "London", mobile: "9535554554544" }} />
            <button onClick={check}>Update Name</button> */}

            {/* // 1. Props with class */}
            {/* <Data name="IMTIYAZ" Email="Imtiyazmd803@gmail.com"/> */}
            {/* <GetValue /> */}

            {/* <HideAndShow /> */}
            {/* <Form /> */}
            {/* <Profile /> */}
            {/* <Login /> */}
            {/* <Constuctor/> */}
            {/* <Render name ={name}/> */}
            {/* <button onClick={check}>Update Name</button>  */}

            {/* <Mount /> */}
            {/* <Update /> */}
            {/* <ShouldUpdate /> */}
            {/* <Unmount /> */}
            {/* <Imtiyaz /> */}
            {/* <UseEffectWithStateAndProps /> */}
            {/* <First /> */}
            {/* <Boot /> */}
            {/* <ArrayListWithmap /> */}
            {/* <List /> */}
            {/* <NestedList /> */}
            {/* <Reuse /> */}
            {/* <Fragments /> */}
            <PureComponents />






        </div>
    );
}

export default App;



