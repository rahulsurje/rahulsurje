import React,{useState} from "react"


function Count() {
    function count(){
        setState(state - 1)
    }
function count(){
    setState(state + 1)
}
    const [state,setState] = useState(0)
    return(
    <div>
        <button onClick={count}>-</button>
        <h2>{state}</h2>
        <button onClick={count}>+</button>
    </div>


    );
}

export default Count;