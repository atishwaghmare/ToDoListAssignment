import { useState } from "react";

// import { useWindow } from "react";
let Task2=()=>{

    // let [x,setX]=useWindow(0)
    // let [y,setY]=useWindow(0)
   
    let [x,setX]=useState();
    let [y,setY]=useState();
    let handle=(e)=>{
       setX(x=e.clientX);
       setY(y=e.clientY);
        console.log(e.clientX );
        console.log(e.clientY );
    }
    console.log(x, y);
    
    return (
        <div>
            <div onMouseMove={handle} className="h-[100vh] w-[100vw] "></div>
            <h1>x:{x}</h1><h1>y:{y}</h1>
        </div>
    )
}
export default Task2