import { useState } from "react"

let UseStateExample2 =()=>{
    let [count,setCount]=useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{
                setCount(count+10);
                setCount((pre)=>pre+20);
                setCount((pre)=>pre+30);
            }}></button>
        </div>
    )
}

export default UseStateExample2