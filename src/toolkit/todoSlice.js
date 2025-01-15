import { createSlice } from "@reduxjs/toolkit";

let todoSlice=createSlice({
    name:'todo',
    initialState: {
        todoList :100
    },
    reducers :{
        addTodo :(state,action)=>{
                // state.todoList.push(action,payload)
                console.log(state,todoList);
                
        }
    }
})

export let {addTodo} =todoSlice.actions
export default todoSlice.reducer