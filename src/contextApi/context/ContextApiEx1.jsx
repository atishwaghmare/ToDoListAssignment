import { useContext } from "react"
import { context } from "../AppContext";

let ContextApiEx1=()=>{
 let data=useContext(context)
 console.log(data);
 
 

    
 
    return(
        <div>
            {data.map((val)=>{
                return val.name
            })}
        </div>
    )
}

export default ContextApiEx1