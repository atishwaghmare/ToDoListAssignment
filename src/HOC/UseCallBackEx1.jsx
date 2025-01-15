import { createBrowserRouter } from "react-router-dom"
import UseCallBackChildEx1 from "./UseCallBackChildEx1"


let  UseCallBackEx1=()=>{
   
    return(
        <div > 
            <div>
                <p >Parent</p>
            <hr />
            <div>
                <UseCallBackChildEx1/>
            </div>

            </div>
        </div>
    )
}
export default UseCallBackEx1