import React from "react"

let EventEx2=()=>{
   
    return(
        <div>
            
         <button  onClick={(e)=>{
            console.log(e);
            e.target.textContent="Clicked ?"
            e.target.backgroundColor="red"
                
         }} className="bg-purple-400 rounded-md text-white">Click me !!!!</button>
        </div>
    )
}
export default EventEx2