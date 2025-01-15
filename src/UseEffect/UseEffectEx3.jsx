import { useEffect, useState } from "react"
import UseEffectEx1 from "./UseEffectEx1"

let UseEffectEx3=()=>{
  
    let [cart,setcartItem]=useState(0)

    let [total,setTotal]=useState(1000)

    useEffect(()=>{
        setTotal(total+100)
    },[cart])

    useEffect(()=>{
        console.log("we are checking your eligibility  for free delivery");
        
    },[total])

    return(
        <div>

           <h1>CartItem :{cart}</h1>
           <h1>Total :{total}</h1>

           <button onClick={()=>{
            setcartItem(cart+1)
           }}>add to cart</button>
          
        </div>
    )
}
export default UseEffectEx3