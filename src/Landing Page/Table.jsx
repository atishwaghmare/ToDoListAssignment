import NavTag from "./NavTag.jsx";
import Section from "./Section.jsx";
import Section2 from "./Section2.jsx";
import Section3 from "./Section3.jsx";
let  Table= ()=>{
    
    return (
        
        <div id='table'>
            <h1>landingpage</h1>
           
            <section><NavTag/>
            <section id="sec"> <Section/>
            <Section2/>
            <Section3/>
            </section>
            </section>
            
            {/* <section id="sec"> */}
            {/* <Section/>
            <Section2/>
            <Section3/> */}
             {/* </section> */}
       
        </div>
    );
}

export  default Table