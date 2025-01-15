import { useMemo, useState } from "react"

let  UseMemoEx1=()=>{


    let [count1,setCount1]=useState(0)
    let [count2,setCount2]=useState(0)

    let checkCount=()=>{
        let i=0;
        while (i<10000000) {
            i++;
        }
        if(count1%2==0)
            return "Even"
        else
            return "odd"
    }


    let  memoizedCount1=useMemo(checkCount,[count1])

    let handleChange1=()=>{
        setCount1(count1+1)
    }
    let handleChange2=()=>{
        setCount2(count2+1)
    }

    return(
        <div className="flex justify-center items-center  h-[100vh]">

            <button onClick={handleChange1} className="bg-orange-600 text-white rounded-md ">count: {count1} {memoizedCount1} </button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={handleChange2}  className="bg-orange-600 text-white rounded-md ">count: {count2} </button>
        </div>
    )
}
export default UseMemoEx1