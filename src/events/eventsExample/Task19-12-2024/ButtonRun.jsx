import { useState } from "react"

let ButtonRun=()=>{
  
    let [state, setState]=useState(false)
    let handleChange=()=>{
       
        // state?  setState({ top:"90%", left:"90%"}):setState({top:'50%', left:"50%" })
        if(state!=true)
        {
            setState({ top:"90%", left:"90%"}) 
            state=true
        }
        else
        {
            setState({top:'50%', left:"50%" })
            state=false;
        }
       
        
        
            
        

    }
   
    return(
        <div>
           <div className="h-[400px] w-[400px] bg-slate-600">
            <button onMouseOver={handleChange}  style={{position:"absolute", top:state.top, left:state.left}}>catch me </button>
           </div>
        </div>
    )
}
export default ButtonRun