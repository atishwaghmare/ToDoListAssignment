import Loader from "./Loader"
import HocEx2Child from "./HocEx2Child";
let  HocEx2=()=>{

    
   let ChildeWithLoader=Loader(HocEx2Child)
    return(
        <div>
            <p>parente</p>
            <br /><br /><hr /><br />
            {/* <ChildeWithLoader></ChildeWithLoader> */}
            {ChildeWithLoader}
            {/* <HocEx2Child/> */}
               </div>
    )
}
export default HocEx2