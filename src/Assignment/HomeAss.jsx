import { Fragment, useState } from "react"
import HomeCart from "./HomeCart";

let HomeAss = () => {
    const [isCart,setIsCartTrue]=useState(false);
    const [cartData,setCartData]=useState();  
    let arr=[];
    console.log(arr);
    
    let obj = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john.doe@example.com",
            "age": 25,
            "image": "https://via.placeholder.com/150",
            "address": {
                "street": "123 Main St",
                "city": "New York",
                "state": "NY",
                "zip": "10001"
            }
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane.smith@example.com",
            "age": 30,
            "image": "https://via.placeholder.com/150",
            "address": {
                "street": "456 Elm St",
                "city": "San Francisco",
                "state": "CA",
                "zip": "94103"
            }
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "email": "alice.johnson@example.com",
            "age": 27,
            "image": "https://via.placeholder.com/150",
            "address": {
                "street": "789 Oak Ave",
                "city": "Chicago",
                "state": "IL",
                "zip": "60607"
            }
        },
        {
            "id": 4,
            "name": "Bob Brown",
            "email": "bob.brown@example.com",
            "age": 35,
            "image": "https://via.placeholder.com/150",
            "address": {
                "street": "101 Pine Rd",
                "city": "Seattle",
                "state": "WA",
                "zip": "98101"
            }
        },
        {
            "id": 5,
            "name": "Charlie Davis",
            "email": "charlie.davis@example.com",
            "age": 29,
            "image": "https://via.placeholder.com/150",
            "address": {
                "street": "202 Maple St",
                "city": "Austin",
                "state": "TX",
                "zip": "73301"
            }
        }
    ]
    return (
        <div>
            <div>
               <a href="#"> <HomeCart data={arr}/></a>
            </div>
            <div style={{display:"flex", justifyContent:"space-around"}} >{
                obj.map((val,i)=>{
                    return <div><div key={val.id} style={{height:"200px", width:"200px", border:"1px solid black"}}>{val.name}</div><button onClick={()=>( arr.push(val)
                    )}>Add to cart</button> </div>
                })
            }</div>

            {/* <div>
                {
                    isCart?(
                        <HomeCart data={cartData}/>
                    ):(
                        <>
                        {
                            obj.map((val,i)=>(
                                <Fragment key={i}>
                                    <h1>{val.name}</h1>
                                    <button onClick={()=>{
                                        setCartData(val)
                                        setIsCartTrue(true)
                                    }}>Add to Cart</button>
                                </Fragment>
                            ))
                        }
                        </>
                    )
                }
            </div> */}
        </div>
    )
}
export default HomeAss