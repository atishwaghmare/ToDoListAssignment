import { createBrowserRouter } from "react-router-dom"
import Home from "./Home"
import Login from "./Login"
import About from "./About"
import Contact from "./Contact"
import Help from "./Help"


export let router=createBrowserRouter([
    {
        path:"/login",
        element:<Login/>
        
    },
    
    {
        path:"/home",
        element:<Home/>,
        children: [
            {
                path:"/home/about",
                element:<About/>
            },
            {
                path:"/home/contact",
                element:<Contact/>
            },
            {
                path:"/home/help",
                element:<Help/>
            }

        ]
    },
    
   
])
