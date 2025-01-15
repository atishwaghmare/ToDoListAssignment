import { Link,useNavigate } from "react-router-dom"

let Login=()=>{

        let navigate=useNavigate()
    let  handleChange=()=>{
            if(true)
            {
                navigate('/home')
            }
            else{
                
            }
    }
    return(
        <div>
            <div>
                <input type="text"  placeholder="username"  className="border-y-black" />
                <input type="text" placeholder="username"  className="border-y-black" />
                <button onClick={handleChange}>Login</button>
            </div>
        </div>
    )
}

export default Login