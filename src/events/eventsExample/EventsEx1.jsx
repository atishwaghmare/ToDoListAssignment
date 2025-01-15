let EventsEx1 = () => {

    let demo = (name) => {
        console.log("hello",name);

    }

    return (
        // <div className="bg-[gray] text-[50px] text-[blue] border-[1px] border-black rounded-md px-3 w-[400px] h-[400px] ">
        <div>
            {/* <button onClick={()=>{console.log("button click");
          }} className="bg-slate-400 rounded-md">click</button> */}
            {/* <button onMouseMove={()=>{console.log("button click");
          }} className="bg-slate-400 rounded-md">click</button> */}
            {/* <button onMouseLeave={()=>{console.log("button click");
          }} className="bg-slate-400 rounded-md">click</button> */}

            <button onClick={()=>{demo("Atish")}   
           } className="bg-slate-400 rounded-md">click</button>
        </div>
    )
}
export default EventsEx1