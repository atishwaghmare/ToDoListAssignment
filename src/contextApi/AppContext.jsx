import { createContext } from "react";

export let context=createContext()

const AppContext=(props)=>{
    let {provider}=context

    let data=[
        {
            name:"xyz",
            age:20
        },
        {
            name:"lop",
            age:20
        },
        {
            name:"abc",
            age:20
        },{
            name:"mnl",
            age:20
        }
    ]
    return (
        <div>
            <context.Provider value={data}> {props.children}</context.Provider>
            {/* <context.provider  */}
        </div>
    )
}
export default  AppContext