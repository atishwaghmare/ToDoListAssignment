import { useState } from "react"

let UseStateExample3 =()=>{

    let [changeColor,setBgColor]=useState(false);
    return (
        <div>
            <button onClick={()=>{
                setBgColor(!changeColor);
            }}>click</button>
            <h1 style={{
                backgroundColor: changeColor? "red" :"green"
            }}>hii
            </h1>
        </div>
    )

}
export default UseStateExample3