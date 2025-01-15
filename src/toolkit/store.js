import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./todoSlice.js"
export let store=configureStore({
    reducer :{
        todoReducer
    }
})
