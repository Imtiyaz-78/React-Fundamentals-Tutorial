
function ClickEvent(){
    function check(){
        alert("This is Click Event");
    }

    return (
        <div>
            <h1>Click Event and function</h1>
            <button onClick={check}>Click me</button>
        </div>
    )
}
export default ClickEvent;