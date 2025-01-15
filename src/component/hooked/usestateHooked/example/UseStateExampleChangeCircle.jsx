import { useState } from "react"

let UseStateExampleChangeCircle=()=>{

    let [changeCircle, setShape] =useState(false);

    return (
        <div>
            <button onClick={()=>{
                setShape(!changeCircle);
            }}>Change Shape</button>
            <div style={{
                backgroundColor:"red",
                height:100, width:100,
                borderRadius:changeCircle? "50%" : "0%"
            }}></div>
        </div>
    )
}
export default UseStateExampleChangeCircle