// import UseMemoEx1 from "./UseMemoEx1"

import { useState } from "react"
import HocEx1Child from "./HocEx1Child";

let  HocEx1=()=>{

    let [state,setState]=useState(0)
    console.log("parent");
    
   
    return(
        <div>
            <button onClick={()=>{
                setState(state+1)
            }} className="">State:{state}</button>
            <br /><br />
            <hr />
            <HocEx1Child/>
        </div>
    )
}
export default HocEx1