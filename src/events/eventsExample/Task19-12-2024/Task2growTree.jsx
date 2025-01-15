
import { useState } from "react"

let Task2growTree=()=>{
  
   let handleChange=(e)=>{
    e.target.style.height="200px"
    e.target.style.width="200px"
   }
   let handleLeave=(e)=>{
     e.target.style.height="100px"
    e.target.style.width="100px"
   }
    return(
        <div>
          <div onResize={handleChange} onMouseLeave={handleLeave} className='bg-green-700 h-[100px] w-[100px]'></div>
        </div>
    )
}
export default Task2growTree