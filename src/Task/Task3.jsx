import { useState } from "react";

let Task3=()=>{

    let [state,setState]=useState(0)

   
    let handleChange=(e)=>{
        
        setState(state=e.target.value);        
        
    } 


    
    return (
        <div>
            <input type="text" className="border-s-slate-700" value={state.name} onChange={handleChange} />
            <div style={{
                backgroundColor:"red",
                height:"100px",
                width: state.length == 0?"0px" :state.length == 1?"10px" : state.length == 2?"20px" : state.length == 3?"30px": state.length == 4?"40px" : state.length == 5?"50px" : state.length == 6?"60px" : state.length == 7?"70px" : state.length == 8?"80px" :state.length == 9?"90px" :state.length >= 10?"100px" :"0px"
                
            }} ></div>
        </div>
    )
}
export default Task3