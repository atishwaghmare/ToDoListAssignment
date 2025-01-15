let ListProducts=(props)=>{
    // console.log(props.data.id);
    let [a,b,c,d,e]=props.data
    let arr=props.data;
    console.log(arr[0].name);
    for(let i=0;i<arr.length;i++)
    {
        console.log(arr[i].name);
        
    }

    
    return(
        <div>

            <div>{arr.map((val,i)=>(
                <div><div key={i} style={{height:"400px", width:"400px"}}><img src={val.image} alt=""  /></div>
                <h1>{val.name}</h1>
                <h1>{val.email}</h1>
                <h1>{val.address.state}</h1>
                </div>
            ))}</div>

        </div>
    )
}
export default ListProducts