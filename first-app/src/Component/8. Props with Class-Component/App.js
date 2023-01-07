

class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Imtiyaz"
    }
  }

  render(){
    return (
      <div className="App">
        <h1>Props in React : </h1>
        <Propss name={this.state.name} email="imtiyazmd803@gmail.com"></Propss>
        <button onClick={()=> this.setState({name:"I am Front end Developer"})}>Update Name</button>
      </div>
    );
  }
}

export default App;



