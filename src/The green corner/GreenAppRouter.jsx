import { createBrowserRouter } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

export let router=createBrowserRouter([

    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/registration",
        element:<Registration/>
    }
])