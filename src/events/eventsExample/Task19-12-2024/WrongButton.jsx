import { useState } from "react";

let WrongButton=()=>{
 
    let [state,setState]=useState();
    let handleChange=()=>{
        setState("Wrong")
        
    }
    let handleChange2=()=>{
        setState("correct")
        
    }
    return(
        <div>
           <button onClick={handleChange} className="bg-green-600 border-black border-[1px]">click
           </button>{state}<br /><br />
           <button onClick={handleChange2} className="bg-green-600 border-black border-[1px]"> click</button>
        </div>
    )
}
export default WrongButton