import { useMemo, useState } from "react"
/*
// This Normal not example of usememo
function Memo() {

    const [getcount, setcount] = useState(0);
    const [getItem, setItem] = useState(10);


    function multiple() {
        console.log("Mutiple time rendering");
        return getcount * 5;
    }

    return (
        <div>
            <h1>Count: {getcount} </h1>
            <h1>Item: {getItem}</h1>
            <h1>{multiple()}</h1>
            <button onClick={() => setcount(getcount + 1)}>Update Count</button>
            <button onClick={() => setItem(getItem * 10)}>Update Item</button>
        </div>
    )
}


export default Memo;

*/



// This Normal not example of usememo

function Memo() {

    const [getcount, setcount] = useState(0);
    const [getItem, setItem] = useState(10);


    const MutiplecountMemo = useMemo(function kuchhbhi() {
        console.log("multipleCount");
        return getcount * 5
    }, [getcount]);

    
    return (
        <div>
            <h1>Count: {getcount} </h1>
            <h1>Item: {getItem}</h1>
            <h1>{MutiplecountMemo}</h1>
            <button onClick={() => setcount(getcount + 1)}>Update Count</button>
            <button onClick={() => setItem(getItem * 10)}>Update Item</button>
        </div>
    )
}


export default Memo;