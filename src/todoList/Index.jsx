import { useState } from "react"


let Index=()=>{

    let [add,setAdd]=useState({
        name:"",
        id:Date.now()
    })

    let  [item,setItem]=useState([])

    let handleChange=(e)=>{
        console.log(e);
        
        // setAdd()
    }


  
    return(
        <div className="flex h-[100vh] w-[100vw] bg-slate-600  justify-center items-center">

            <div className="bg-slate-300 h-[500px] w-[400px] flex justify-around  ">
                <input type="text" name="" className="border-[1px] border-orange-600 rounded-md h-12 w-[250px] " />
                <button onClick={handleChange} className="rounded-md bg-slate-900 text-white h-12 w-[50px]">Click</button>

            </div>
          
        </div>
    )
}
export default Index