
let ShowAlert=()=>{
  
    let handleChange=(e)=>{
        // console.log(e);
        // alert("ghchg")
        console.log(e.clientX);
        console.log(e.clientY); 

    }
    return(
        <div>
           {/* <button onContextMenu={handleChange}>Right Click</button> */}
          <div onMouseMove={handleChange
            } className="h-[200px] w-[200px] bg-slate-800"></div>
        </div>
    )
}
export default ShowAlert