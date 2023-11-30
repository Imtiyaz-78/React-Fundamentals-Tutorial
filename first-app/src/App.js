import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useSearchParams, Navigate } from 'react-router-dom';

//hsjhddhssdhd
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
// import PureComponents from './Component/20. Pure Component/PureComponents';
// import Memo from './Component/16. Hooks in React Js (V.V.I)/5. UseMemo Hook in React JS/Memo';
// import Same from './Component/16. Hooks in React Js (V.V.I)/6. Ref In Class Component/Same';
// import UseRefInFunctionalComponent from './Component/16. Hooks in React Js (V.V.I)/6. useRef In Functional Component/UseRefInFunctionalComponent';
// import Parentforward from './Component/16. Hooks in React Js (V.V.I)/7. forwardRef in Hooks/Parentforward';
// import Controlled from './Component/21. Controlled Component/Controlled';
// import Uncontrolled from './Component/22. Uncontrolled Component/Uncontrolled';
// import HocComponent from './Component/22. Higher Order Component(HOC)/HocComponent';



// <-------------------------> React Routers <------------------------------------>
/* 
import Home from './Component/23. React Router (V.V.I)/Home';
import About from './Component/23. React Router (V.V.I)/About';
import NavBar from './Component/23. React Router (V.V.I)/NavBar';
import Page404 from './Component/23. React Router (V.V.I)/2. 404 Page and Redirect/Page404';
import StudentName from './Component/23. React Router (V.V.I)/3. Params in React Router/StudentName';
import Filter from './Component/23. React Router (V.V.I)/3. SearchParams in Router/Filter';
import Contact from './Component/23. React Router (V.V.I)/5. Nested Routing/Contact';
import Company from './Component/23. React Router (V.V.I)/5. Nested Routing/Company';
import Store from './Component/23. React Router (V.V.I)/5. Nested Routing/Store';
import Other from './Component/23. React Router (V.V.I)/5. Nested Routing/Other';
import Login from './Component/23. React Router (V.V.I)/6. Protected Route/Login';
import Protected from './Component/23. React Router (V.V.I)/6. Protected Route/Protected';
*/
// <-------------------------> React Routers <------------------------------------>


// <-----------------------------> API in React Start <---------------------------------->
// import CallGetMethodAPI from './Component/24. API Call in React JS/CallGetMethodAPI';
// import Post from './Component/24. API Call in React JS/1. Post Method in Rest API/Post';
// import Delete from './Component/24. API Call in React JS/2. Delete Method with API In React/Delete';
// import Prefilled from './Component/24. API Call in React JS/3. PreFilled Form Data/Prefilled';
// import Update from './Component/24. API Call in React JS/4. Update Data With PUT Method API/Update';

// <-----------------------------> API in React Start <---------------------------------->



// <----------------------> React Interview Ques <--------------------------------> 
// import Previous from './React Js Interiew (V.V.I)/1. Prevous State in Functional Component/Previous';
// import Parent from './React Js Interiew (V.V.I)/2. Previous Props in Functional Component(Hooks)/Parent';
// import StateWithObj from './React Js Interiew (V.V.I)/3. State with Object/StateWithObj';




// <------------------------------> React Redux Start <--------------------------------->
// import Parents from './Redux in React JS/1. React props First/Parents';
// import Roots from './Redux in React JS/2. React Redux/Main/Roots';

// <------------------------------> React Redux End <--------------------------------->




// <----------------------------> React Hooks By Thapa <--------------------------->
// import UseState from './Component/16. Hooks in React Js (V.V.I)/2. UseState In Hooks/UseState';
// import { Time } from './Component/0. React Project/1. Get Time on Refreshing/Time';
// import { DigitalClock } from './Component/0. React Project/2. Digital Clock/DigitalClock';
// import { Event } from './Component/0. React Project/3. Handeling Event in React/Event';
// import { LoginForm } from './2. Component By Thapa/1. Login Form Submit/LoginForm';
// import { MultipleForm } from './2. Component By Thapa/2. Handling Complex Multiple Input Form States/MultipleForm';
// import { LoginForm } from './2. Component By Thapa/3.Login Form in Less code/LoginForm';
// import TodoList from './Component/0. React Project/4. Todo List App in React JS/TodoList';
// import Counter from './Component/0. React Project/5. Counter React App/Counter';
// import Hello from './2. Component By Thapa/5. BootStrap in React JS/Hello';
// import Accordion from './2. Component By Thapa/6. Accodion Using React JS/Accordion';


// <----------------------------> React Hooks Hooks By Imtiyaz <--------------------------->
// import ContextA from './Component/16. Hooks in React Js (V.V.I)/8. Context API in React/ContextA';

// import ContextsA from './Component/16. Hooks in React Js (V.V.I)/9. useContext Hook in React/ContextsA';

// import Timer from './Component/16. Hooks in React Js (V.V.I)/10. useEffect in React JS/Timer';

// import UseEffect_Best_Example from './Component/16. Hooks in React Js (V.V.I)/10. useEffect in React JS/UseEffect_Best_Example';

// import Title from './Component/0. React Project/6. Changing_The_Title_value.js/Title';

import Statewise from './Component/0. React Project/7. Covid 19 Tracker in React/Component/StateWise Data/Statewise';

// import API_Using_Axios from './2. Component By Thapa/7. React API Call using Axios/API_Using_Axios';

// import ValuShowOnUI from './Component/0. React Project/8. Click on Select Option Value show on UI/ValuShowOnUI';

// <-------------------------> React Hooks end By Imtiyaz <--------------------------->




// <-------------------------> React Router Start By Imtiyaz <--------------------------->
/*
import AboutUs from './2. Component By Thapa/8. React Router in React Js/1. Pages/AboutUs ';
import Contact from './2. Component By Thapa/8. React Router in React Js/1. Pages/Contact';
import Home from './2. Component By Thapa/8. React Router in React Js/1. Pages/Home';
import Error from './2. Component By Thapa/8. React Router in React Js/1. Pages/Error';
import Login from './2. Component By Thapa/8. React Router in React Js/1. Pages/Login';
import NavBar from './2. Component By Thapa/8. React Router in React Js/2. Create Navbar/NavBar';
import User from './2. Component By Thapa/8. React Router in React Js/3. useParams Hooks in React Router/User';
import ErrorHandle from './2. Component By Thapa/8. React Router in React Js/6. React 404 Error Page Not Found/ErrorHandle';
*/
// <-------------------------> React Router End By Imtiyaz <--------------------------->




// <==============================> React Project  <==============================>

// import Search from './Component/0. React Project/9. Serach Filter using Hooks/Search';
// import Root from './Component/0. React Project/10 Responsive Animated Website Using React/Root';


// <==============================> React Project  <==============================>




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
            {/* <PureComponents /> */}
            {/* <Memo /> */}
            {/* <UseRefInFunctionalComponent /> */}
            {/* <Parentforward /> */}
            {/* <Controlled /> */}
            {/* <Uncontrolled /> */}
            {/* <HocComponent /> */}




            {/*

                {/* <BrowserRouter> */}
            {/* <NavBar /> */}
            {/* <Routes> */}

            {/* <Route path='/' element={<Protected Component = {Home}/>}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path="/About" element={<Protected Component = {About}/>}></Route>
                    <Route path="/Filter" element={<Protected Component = {Filter}/>}></Route> */}

            {/* <Route path='/*' element={<Page404 />}></Route> */}
            {/* <Route path='/*' element={<Navigate to="/" />}></Route>
                    <Route path="/StudentName/:name" element={<StudentName />}></Route> */}

            {/* <Route path='/Contact/' element={<Protected Component = {Contact}/>}> */}
            {/* Nested Routes inside the Contac us page */}

            {/* <Route path='Company' element={<Company />} />
                 <Route path='Contact' element={<Contact />} />
                 <Route path='Other' element={<Other />} />
                 <Route path='Store' element={<Store />} /> */}

            {/* </Route> */}
            {/* </Routes> */}
            {/* </BrowserRouter> */}




            {/* <------------------------> API in React JS <--------------------------->*/}

            {/* <CallGetMethodAPI /> */}
            {/* <Post /> */}
            {/* <Delete/> */}
            {/* <Prefilled /> */}
            {/* <Update /> */}
            {/* <Previous /> */}
            {/* <Parent /> */}
            {/* <StateWithObj/> */}


            {/* <----------------------> API in React JS <------------------------->*/}



            {/* <--------------------------> React Redux <-------------------------->*/}
            {/* <Parents /> */}
            {/* <Roots /> */}

            {/* <----------------------> React Redux <------------------------------>*/}



            {/* <-----------------------> React Hooks By T <------------------------>*/}
            {/* <UseState /> */}
            {/* <Time /> */}
            {/* <DigitalClock /> */}
            {/* <Event /> */}
            {/* <LoginForm /> */}
            {/* <MultipleForm /> */}
            {/* <LoginForm /> */}
            {/* < TodoList /> */}
            {/* <Counter /> */}
            {/* <Hello /> */}
            {/* <Accordion /> */}
            {/* <ContextA /> */}
            {/* <ContextsA /> */}
            {/* <Timer /> */}
            {/* <UseEffect_Best_Example /> */}
            {/* <Title /> */}
            <Statewise />
            {/* <API_Using_Axios /> */}
            {/* <ValuShowOnUI /> */}



            {/* // <--------------> React Router By Imtiyaz <-------------------> */}

            {/* <BrowserRouter> */}
            {/* <NavBar /> */}
            {/* <Routes> */}
            {/* <Route path="/" element={<Home />} exact />
                    <Route path='/Contact' element={<Contact />} ></Route>
                    <Route path='/AboutUs' element={<AboutUs />} ></Route>
                    <Route path='/Login' element={<Login />} ></Route>
                    <Route path='/Error' element={<Error />}></Route>
                    <Route path="/User/:name/:lname" element={<User />}></Route>
                    <Route path='/*' element={<ErrorHandle />}></Route>
                    <Route path="*" element={<Navigate to="/" />} /> */}
            {/* </Routes> */}
            {/* </BrowserRouter> */}

            {/* // <--------------> React Router By Imtiyaz <-------------------> */}

            {/* <Search /> */}
            {/* <Root /> */}



        </div>
    );
}

export default App;



