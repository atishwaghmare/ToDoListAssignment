import gsap from "gsap"
import { useEffect, useRef } from "react"


let ExGsap2=()=>{
    const boxRef=useRef(null)

    useEffect(()=>{
        const  tl=gsap.timeline()
        // tl.to(boxRef.current,{x:100,duration:1})
        // .to(boxRef.current,{y:100,duration:1})
        // .to(boxRef.current,{x:-100,duration:1})
        // .to(boxRef.current,{y:-100,duration:1})
        tl.to(boxRef.current,{rotation:720, duration:2})
        .to(boxRef.current,{scale:1,duration:1 ,backgroundColor:"red"})
        .to(boxRef.current,{scale:2,duration:1 ,backgroundColor:"blue"})
        .to(boxRef.current,{scale:3,duration:1 ,backgroundColor:"yellow"})
        .to(boxRef.current,{scale:4,duration:1 ,backgroundColor:"green"})



    })
   
    return(
        <div  className="box h-[100vh] w-[100vw] flex justify-center items-center"> 
                <div  ref={boxRef}  className="bg-green-400 h-[100px] w-[100px] rounded-[20%]"></div>
         </div>
    )
}

export default ExGsap2