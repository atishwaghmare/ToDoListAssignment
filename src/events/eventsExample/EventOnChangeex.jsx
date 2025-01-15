import { useState } from "react"

let EventOnChangeex=()=>{
  
    let [state,setState]=useState({
        username:"",
        password:""
    })

    let handleChange=(e)=>{
        setState(e.target.value)
        console.log(state);
        
    }

    return(
        <div>

            <input type="text" onChange={handleChange} value={state.username} className="bg-gray-600"/> <br /><br />
            <input type="text" /> <br /><br />

            <button>Click</button>
        </div>
    )
}
export default EventOnChangeex