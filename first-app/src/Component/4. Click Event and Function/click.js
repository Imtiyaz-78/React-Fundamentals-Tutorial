

function App() {
    let data = "Imtiyaz";
    
    function updateData(){
        data = "Imtiyaz is Front End Developer";
        alert(data);
    }
    return (
      <div className="App">
        <h1>{data} </h1>
        <button onClick = {updateData} >Update Data</button>
  
      </div>
    );
  }
  
  export default App;
  
  
  