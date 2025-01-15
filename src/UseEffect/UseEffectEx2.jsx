import { useEffect, useState } from "react"
import UseEffectEx1 from "./UseEffectEx1"

let UseEffectEx2=()=>{
  
    let [state,setState]=useState(0)
    let [state2,setState2]=useState(0)

    useEffect(()=>{
        console.log("somthing changed in any of the dependency");
        
    },[state,state2])

    useEffect(()=>{},[])

    return(
        <div className="flex h-[100vh] w-[100%] justify-center items-center">

          <button onClick={()=>{
            setState(state+1)
          }} className="bg-orange-600 rounded-md">state 1:{state}</button>
          
          <button onClick={()=>{
            setState2(state2+1)
          }} className="bg-orange-600  rounded-md ">state :{state2}</button>
          
        </div>
    )
}
export default UseEffectEx2