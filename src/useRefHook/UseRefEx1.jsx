import { useRef, useState } from "react"


let UseRefEx1=()=>{

    let heading=useRef()
    let inputRef=useRef()
    let [state,setState]=useState()
    let handleClick=()=>{
       
      
            heading.current.textContent="hello it  is  heading tag"
            // heading.current
            console.log(inputRef.current.value);
            setState(inputRef.current.value)
             
    }
    
    return(
        <div className="flex justify-center items-center flex-col h-[100vh]">
           {/* <div> */}
            <h1  ref={heading}>Heading</h1> 
            <input type="text" ref={inputRef} className="border-amber-950 border-[1px] rounded-md" />
            <button onClick={handleClick} className="bg-green-300 rounded-md ">Click</button>
            {state}
            {/* </div> */}
        </div>
    )
}

export default UseRefEx1