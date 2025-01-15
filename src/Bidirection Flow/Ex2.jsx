import { useState } from "react"

let Ex2=(props)=>{

    // console.log(props.props.a2=10);
    // console.log(props.props);
   
   console.log(props.props);
//    let state=props.props
   
    
    let [state,setState]=useState(props.props)
    // console.log(state);
    
    
 
 
    return(
        <div>
         <h1>state: {state}</h1> 
          <button onClick={()=>{
            setState(state+=1)
                // props.props+=1
}}>click</button>   
          {/* <button onClick={()=>{
            props.props.a2+1
         }}>click</button>  */}
        </div>
    )
}

export default Ex2