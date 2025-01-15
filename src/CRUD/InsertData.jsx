import { useRef, useState } from "react"

let InsertData=()=>{
    let createBtnref=useRef()
    let  [state,setState]=useState({
        user:'',
        pass:'',
        id: Date.now(),
        users :[]
    })

    let handle=(e)=>{
        let {name, value}=e.target
       setState({...state,[name]:value})
    }
    
    let handlchange=(e)=>{

        e.preventDefault();
        let tempObj={
            user : state.user,
            pass :state.pass,
            id :Date.now()
        }

        createBtnref.current.textContent =='Update' ? createBtnref.current.textContent='Insert' : createBtnref.current.textContent='Insert'

        setState( {
            user:'',
            pass:'',
            id :Date.now(),
            users :[...state.users,tempObj]})
    }
    
   let handleDelete=(id)=>{

   let updateList=state.users.filter((val)=>val.id !== id)
   
   setState({...state, users:updateList})
   }

    let  handleUpdate=(id)=>{
        let updateList=state.users.filter((val)=>val.id !== id)

        createBtnref.current.textContent='Update'
        let itemUpdate=state.users.find((val) => {
            return val.id == id;
        })
        setState({
            user :itemUpdate.user,
            pass :itemUpdate.pass,
            id :itemUpdate.id,
            users : updateList 
        })
    }
   
   
    
   
    
    return (
        <div >

            <div className="bg-slate-500 flex justify-center items-center h-[400px] w-[100%]">
            <div className="bg-gray-700">
            <input type="text" onChange={handle} name='id' value={state.id} className="border-[1px] border-slate-900"/> <br/><br />

                <input type="text" onChange={handle} name='user' value={state.user} className="border-[1px] border-slate-900"/> <br/><br />
                <input type="text" onChange={handle} name="pass" value={state.pass} className="border-[1px] border-slate-900"/><br/><br />
                <button onClick={handlchange} ref={createBtnref}>Insert</button>
            </div>
            </div>
                <br /><br /><br /><br /><br /><br /><br />

           <table border='2px solid'>
            <tr>  <td>UserName</td> <td>PassWord</td> <td>Edit</td> <td>Delete</td>  </tr>
               
           {state.users.map((val)=>{
           return( <tr key={val.id} >
                <td>{val.user}</td>
                <td>{val.pass}</td>

                <td><button  className="bg-slate-500 h-6 w-12" onClick={()=>{handleUpdate(val.id)}} >Update</button></td>

                <td><button  className="bg-slate-500 h-6 w-12" onClick={()=>{handleDelete(val.id)}} >Delete</button></td>

               
            </tr>
           )
           })} </table> 
        </div>
    )
}
export default InsertData