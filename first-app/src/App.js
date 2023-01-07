
import logo from './logo.svg';
import './App.css';
import Students from './Component/7. Props/Students';

// import User from './Component/1. Funtional-component/User';
// import Test from './Component/2. Class-component/Test';
// import JSX from './Component/3. JSX/Jsx';
// import State from './Component/5. State in Functional-Component/State';
// import States from './Component/6. State in Class-Component/States';
// import Students from './Component/7. Props/Students';



function App() {
  return (
    <div className="App">
      <h1>Hello React </h1>
      {/* <User /> */}
      {/* <Test /> */}
      {/* <JSX /> */}
      {/* <State /> */}
      {/* <States /> */}
      <Students name = {"Imtiyaz"} />
      <Students name = {"Developer"} />

    </div>
  );
}

export default App;




// function App() {
//   let data = "Imtiyaz";
//   function updateData(){
//       data = "Imtiyaz is Front End Developer";
//       alert(data);
//   }
//   return (
//     <div className="App">
//       <h1>{data} </h1>
//       <button onClick ={ updateData} >Update Data</button>

//     </div>
//   );
// }

// export default App;







