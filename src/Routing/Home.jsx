import { Link, Outlet } from "react-router-dom"

let Home=()=>{
    return(
        <div >
          
          home
          {/* <nav>
            <div><Link to='/home/about'>about</Link></div>
            <div></div>
          </nav> */}
          <nav className="bg-blue-600 text-black flex justify-end gap-7">
            <div><Link to="/home" className="text-black text-decoration-none">Home</Link></div>
            <div><Link to='/home/about' className="text-black text-decoration-none">About</Link></div>
            <div><Link to='/login' className="text-black text-decoration-none">Login</Link></div>
            <div><Link to='/home/contact' className="text-black text-decoration-none">Contact</Link></div>
            <div><Link to='/home/help' className="text-black text-decoration-none">help</Link></div>

          </nav>

          {/* <div className="bg-purple-600 h-[500px] flex  justify-around items-center">
                <div className="h-[100%] w-[50%]">hiii</div>
                <div  className="h-[100%] w-[50%]">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis, mollitia amet enim accusantium minus assumenda ex repudiandae saepe optio sed ipsam ullam commodi rem vel! Facilis ducimus odit at eum, enim modi laboriosam alias temporibus beatae minus, assumenda rerum minima ipsa iste, quisquam dolorum consequatur cupiditate nobis dolores! Debitis, fuga exercitationem! Laboriosam tempora libero velit temporibus aliquid, impedit quas assumenda quae provident illum odit eos, nesciunt nihil aperiam ea molestias rem ex omnis dolores ab dolorem, totam eaque magni. Id ut nulla, necessitatibus repellat pariatur quas possimus autem velit sed quibusdam, magnam aspernatur reprehenderit vitae saepe! Explicabo, porro amet.</p>
                </div>
          </div> */}

        <Outlet/>
        </div>
    )
}

export default Home