import React ,{useState} from "react"

function App(){
    const [count,setCount]= useState(0);
    function increase(){
        setCount(count+1);
    }
    function decrease(){
        setCount(count-1);
    }
    return <div className="container">
        <h1>{count}</h1>
        <div className="buttonContainer">
        <button onClick={increase} id="inc">+</button>
        <button onClick={decrease} id="dec">-</button>
        </div>
    </div>
}

export default App;