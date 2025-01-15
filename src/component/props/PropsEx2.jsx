import PropsChildeEx1 from "./PropsChildeEx1"
import PropsChildeEx2 from "./PropsChildeEx2"
import React from "react";

let PropsEx2=()=>{
    let  gift="BMW"

    let myDiv=React.createElement('div',{id:"mydiv"},React.createElement('section',null,React.createElement('p',null,'Text')))
    return(
        <div>
            <h1>{myDiv}</h1>
            <PropsChildeEx2 />
        </div>
    )
}
export default PropsEx2