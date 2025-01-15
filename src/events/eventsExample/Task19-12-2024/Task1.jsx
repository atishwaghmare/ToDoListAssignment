import { useState } from "react"

let Task1=()=>{
  
    let [state,setState]=useState("hides secret message")
    let handleChange=()=>{
        setState('Shh i am react developer')
        console.log(state);
        
    }
    return(
        <div>
           <button onDoubleClick={handleChange}className="bg-green-900">Click</button>

           <p>{state}</p>
        </div>
    )
}
export default Task1