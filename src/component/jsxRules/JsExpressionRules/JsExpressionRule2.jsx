import React from "react";
let JsExpressionRule2=()=>{
    let mode= "dark"
    let username='xyz'
    let pass='123'
    let names=['atish','omkar','anuj','sanket','nikita']
    return(
        <div>
            {/* Ternery Operator */}
            <h1>{mode=="dark"?<p>hii</p>:<p>bye</p>}</h1>
            {/* Short circuit operator && operator if first statement is true then only second statement will be check */}
            <h1>{mode=='dark' && 'it is light mode'}</h1>

            {/* Short circuit operator || operator if first statement is true then only second statement will not be check */}
            <h1>{username=='xyz' && pass=='123' && "welcome user" || "invalid user"}</h1>

            <p>the names of student are {names.map((val,i)=>{
                return <React.Fragment key={i}>{val+" "}</React.Fragment>
            })}</p>

            <p>the names of student are {names.filter((val,i)=>{
              return val.endsWith('a')&& {val};
            })}</p>

            <p>the names of student are {names.find((val,i)=>{
              return val=='atish'&& {val} ;
            })}</p>
        </div>
    )
}
export default  JsExpressionRule2