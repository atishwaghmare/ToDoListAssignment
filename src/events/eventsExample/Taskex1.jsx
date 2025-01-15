import React from "react"

let Taskex1=()=>{
   
    let handleClick=(e)=>{
        e.target.disabled=true;
        e.target.style.background="red"
        e.target.textContent="You losed your data"

    }
    return(
        <div className="flex justify-center items-center h-[100vh]">  
            {/* bg-purple-400 rounded-md text-white */}
         <button   className="bg-purple-900">Think before you clicked</button>
        </div>
    )
}
export default Taskex1