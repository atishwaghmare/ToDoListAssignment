import { useEffect, useState } from "react"

let UseEffectEx1=()=>{
    let [state, setState]=useState(0)
    useEffect(()=>{
        console.log("use effect");

        let fetching= async ()=>{
            let jsondata=await fetch('https://api.github.com/users')
            let data= await jsondata.json()
            console.log(data);
            
        }
        fetching()
    },[])
    return(
        <div>

           <h1>Count : {state}</h1>
           <button onClick={()=>{
            setState(state+1)
           }} className="rounded-md bg-gray-700 h-8 w-28">Increment</button>
          
        </div>
    )
}
export default UseEffectEx1