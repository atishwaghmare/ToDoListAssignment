const CounterProps=(props)=>{

    console.log(props);
    console.log(props.Children);
    
    let s=props.Children;
    
    return (
        <div >
            <button onClick={()=>{props.data()}}>click</button> <span>{s}</span>
        </div>
    )
}
export default CounterProps