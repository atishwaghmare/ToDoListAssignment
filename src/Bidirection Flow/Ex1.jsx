import { useState } from "react"
import Ex2 from "./Ex2"

let Ex1=()=>{

 let  a=10
// let demo=(a)=>{
   
//     console.log(a);
    
// }
//  let  [state,setState]=useState(0)
    return(
        <div>
            {/* <Ex2 props={{state,setState}}></Ex2> */}
            <Ex2 props={a}></Ex2>
        </div>
    )
}

export default Ex1