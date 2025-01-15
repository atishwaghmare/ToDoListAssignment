let Profile=()=>{

    let obj=[{
        id:1,
        name:"atish",
        age:"24"
    },{
    id:2,
    name:"atish",
    age:"24"},]
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around"
        }}>
           
        <div>{
            obj.map((val,i)=>(
                <div key={i} style={{height:"150px", width:"150px", border:"1px solid black"}}>
                    <h1>{val.name}</h1>

                </div>
            ))
        }</div>       

           

        </div>
    )
}

export default Profile