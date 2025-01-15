// import UseMemoEx1 from "./UseMemoEx1"
import React from 'react';
let  HocEx1Child=()=>{
    console.log("child");
    
    return(
        <div>
           <p>child</p>
        </div>
    )
}
export default React.memo(HocEx1Child)