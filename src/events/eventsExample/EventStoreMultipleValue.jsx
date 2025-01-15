import { useState } from "react"


let EventStoreMultipleValue=()=>{
  
    let [state,setState]=useState({
        username:"",
        password:""
    })
    let handleChange=(e)=>{
        // let [name]=e.target.name
        setState({...state,[e.target.name]:e.target.value})
        // console.log(state);
        
    }
    console.log(state);
    
    // let  [user,setUser]=useState([])
    let handleChangeB=(e)=>{
    //     setUser(user.push(state))
      
        console.log(state);
    //    //  e.preventDefault()
        
    }

    return(
        <div className="flex justify-center items-center h-[100vh]">
            <div className="h-80 w-80  flex justify-center items-center bg-slate-400">
                {/* <form action="" className="h-40 " onSubmit={handleChangeB}> */}
            <input onChange={handleChange} type="text" name="username" value={state.username} placeholder="username" className="border-gray-400 border-[1px] "/>
            <br /><br />
            <input onChange={handleChange} type="text" name="password" value={state.password} placeholder="password"className="border-gray-400 border-[1px]"/>
            <br /><br />
            <button onClick={handleChangeB} className="bg-green-700 rounded-md">Submit</button>
            {/* </form> */}

            <h1>
                {/* {user} */}
            </h1>

            </div>
        </div>
    )
}
export default EventStoreMultipleValue