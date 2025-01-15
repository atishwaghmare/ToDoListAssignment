import gsap from "gsap"
import { useEffect, useRef } from "react"


let Example1gsap=()=>{
    const boxRef=useRef(null)

    useEffect(()=>{
        gsap.to(boxRef.current,{
            backgroundColor:"red",
            y:280,
            rotation:180,
            duration:2,

            ease:"bounce.out",
            onComplete:(e)=>{
               e.style.backgroundcolor="red"
                
            },
            onStart:()=>{
                console.log("Animation Started");
                
            }
        })

    },[])

    // useEffect(()=>{
    //     gsap.fromTo(
    //         boxRef.current,
    //         {opacity:0,scale:0},
    //         {opacity:1,scale:1,duration:2,delay:0.5,ease:"back.out(1.7)"}
    //     )
    // })
    return(
        <div  className="box h-[100vh] w-[100vw] flex justify-center items-center"> 
                <div  ref={boxRef}  className="bg-green-400 h-[100px] w-[100px] rounded-[50%]"></div>
         </div>
    )
}

export default Example1gsap