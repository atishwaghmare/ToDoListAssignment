import axios from "axios"
import { useState } from "react";
import Login from "../Routing/Login";

let GetData=()=>{
    
    let [state, setState]=useState([])
    axios.get('https://api.github.com/users').then((val)=>console.log(val.data[0].login));

    
    
    console.log(state);
    
    return(
        <div></div>
    )
}
export default GetData