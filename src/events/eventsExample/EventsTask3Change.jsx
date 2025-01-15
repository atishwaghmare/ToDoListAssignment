import { useState } from "react"

let EventsTask3Change=()=>{
  
    let [userInput, setUserInput]=useState()
    return(
        <div>
            
            <form action="" onChange={(e)=>{
                setUserInput(e.target.value)
                console.log(userInput);
                set
            }}>
                <input type="text" className="border-[1px] border-gray-600"/>
                <br /> <br />
                <button className="bg-green-400  w-[50px] h-[30px] ">Click</button> 
                <button type="reset"></button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button className="bg-green-400  w-[50px] h-[30px] " onChange={(e)=>{
                    setUserInput(e.target.value="")
                    console.log(userInput);
                    
                }}>reset</button>
            </form>
            <p>{userInput}</p>
        </div>
    )
}
export default EventsTask3Change