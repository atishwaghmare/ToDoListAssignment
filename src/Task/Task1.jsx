import { useState } from "react"

let Task1=()=>{

    let [state,setState]=useState(0)
    let [len,setLen]=useState(0)
   
    let handleChange=(e)=>{
       
        
        setState(state=e.target.value); 
               
        
    } 
    let handle=(e)=>{
    if(state.length==8)
    {
        console.log(e);
        
        e.target.disabled=true
        e.target.value="disabled"
    }
    

    }


    return(
        <div className="flex h-[100vh] justify-center items-center">
            <input type="textarea"  value={state.name} onChange={handleChange} className="border-slate-900 bg-slate-800 text-yellow-300 h-[100px] w-[200px] " />
                {state.length }
            <button onClick={handle} className="bg-slate-600">click</button>
        </div>
    )
}
export default Task1