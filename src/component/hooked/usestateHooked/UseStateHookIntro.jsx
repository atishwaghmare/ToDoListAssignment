import Profile from "./example/profile"
import StoringObjectArray from "./example/StoringObjectArray"
import UseStateExample1 from "./example/UseStateExample1"
import UseStateExample2 from "./example/UseStateExample2"
import UseStateExampleChangeCircle from "./example/UseStateExampleChangeCircle"
import UseStateExample3 from "./example/UseStateExxample3"

let UseStateHookIntro=()=>{
    return (
        <div>
            <StoringObjectArray/>
            <br /><br /><br /><br /><br /><br />
            <Profile/>
            <UseStateExampleChangeCircle/>
            <UseStateExample3/>
           <UseStateExample1/>
           <UseStateExample2/>
        </div>
    )
}
export default UseStateHookIntro