import { useRef, useState } from "react"

let  Task4=()=>{

    let [state,setState]=useState(0)

    let stop=useRef()

    let handleChange=(e)=>{
        
        if(stop.current.textContent=='stop')
        {
            setState(state+=Date.now())
            stop.current.textContent="Start"    
        }
        else{
            setState(state=0)
            stop.current.textContent="stop"
        }
        
      
    }

    return (
        <div>
            <h1>Time : {state}</h1>
            
            <br />
            <button onClick={handleChange} ref={stop}>Start</button>
        </div>
    )
}
export default Task4