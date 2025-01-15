import CartProps from "./CartProps"

let HeaderProps=(props)=>{
    return (
        <div>
            <CartProps data={props.name}/>
        </div>
    )
}
export default HeaderProps