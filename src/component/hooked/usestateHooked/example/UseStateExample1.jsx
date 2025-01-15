import { useState } from "react"

let UseStateExample1 =()=>{
    // let a=useState()
    // let [x,y]=a
    // console.log(x)

    // ! how useState() are actually work that function
    // let useMyStaet=()=>{
    //     let setMystate=(a)=>{

    //     }
    //     return [a,setMystate]
    // }
    // let [x,y]=useMyStaet();
    // console.log(state);
    



    let [state, setState]=useState(0);

    let [theme,setTheme]=useState("dark")
    console.log(theme);
    
    return (
        <div>
            <h1>count :{state}</h1>
            <button onClick={()=>{
                setState(state+1)
            }}>Increment</button>

            <h1>Mode :{theme}</h1>
            <button onClick={()=>{
                setTheme(theme="light")
            }}>Light</button>
            <button onClick={()=>{
                setTheme(theme="dark")
            }}>Dark</button>
        </div>
    )
}

export default UseStateExample1