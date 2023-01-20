

function ChildComponent(props) {
    const name = "Imtiyazmd803@gmail.com";

    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={() => props.getDatas(name)} >Click Me</button>
        </div>
    )
}

export default ChildComponent;
