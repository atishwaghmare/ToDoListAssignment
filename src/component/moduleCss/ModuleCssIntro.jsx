import { useState } from "react"
import FlipKart from "./FlipKart"

let ModuleCssIntro=()=>{

    let [stLogin,setLoggedOut]=useState(false)
    return (
        <FlipKart data={{stLogin,setLoggedOut}}/>
    )
}
export default ModuleCssIntro