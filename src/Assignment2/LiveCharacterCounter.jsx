import { useState } from "react";

let LiveCharacterCounter =()=>{
   
    let [state,setState]=useState(0)
    let [len,setLen]=useState(0)
   
    let handleChange=(e)=>{
        // console.log(e);
        // console.log(e);
        
        
        setState(state=e.target.value);        
       
        
    }
   
    
    
    
    // console.log(state);
    
    
    return (
        <div className="flex h-[100vh] justify-center items-center">
            <input type="textarea"  value={state.name} onChange={handleChange} className="border-slate-900 bg-slate-800 text-yellow-300 h-[100px] w-[200px] " />
                {state.length }
        </div>
    )
}
export default LiveCharacterCounter