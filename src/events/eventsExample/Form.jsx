import { useState } from "react"

let Form=()=>{
    let [user,userState]=useState([])
    let arr=[]
    let [state,setState]=useState(
        {
            username:"",
            password:""
        }
    )

    let handleChange=(e)=>{
        // console.log(e.target);
        
    
        setState({...state,[e.target.name]:e.target.value})
        
    }
    let handleClick=()=>{
       
        // userState(user.push(state))
        

      userState([...user, state])
     
       console.log(user);
       
    //    console.log(arr);

    }
       
    
    
    return(
        <div>
          <input onChange={handleChange} name="username" value={state.username} type="text" className="border-slate-500 rounded-md bg-slate-200 " />
          <br /><br />
          <input onChange={handleChange} name="password" value={state.password} type="text" className="border-slate-500 rounded-md bg-slate-200" /><br />
          <br />
          <button onClick={handleClick} className="bg-green-400 rounded-md">Submit</button>
        
            <br /><br /><br />
            <hr />

            <h1>
                {user.map((val,i)=>(
                    <div key={i}>
                        <table>
                            <tr>
                                <th>UserName
                                </th>
                                <th>Password
                                </th>
                            </tr>
                            <tr><td>{val.username}</td><td>{val.password}</td></tr>
                        </table>
                    </div>
                ))}
            </h1>
      
        </div>

        
    )
}
export default Form