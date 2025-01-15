let Child =(props)=>{
   
    const {name,mobile}=props.obj
    
    return (
        <div>{name}{mobile}
        </div>
    )
}

export default Child
