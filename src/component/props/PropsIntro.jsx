import { useState } from "react"
import Child from "./Child"
import CounterProps from "./CounterProps";
import ColorBox from "./ColorBox";
import ListProducts from "./ListProducts";
import HomeProps from "./HomeProps";
import PropsEx1 from "./PropsEx1";
import PropsEx2 from "./PropsEx2";

let PropsIntro=()=>{
    // const obj={
    //     name:"Atish",
    //     mobile:7984516465
    // }

    let [count,setCount]=useState(0);

    let func=()=>{
        setCount(count+1);
    }

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
            {/* <PropsEx1/> */}
            <PropsEx2/>
            {/* <HomeProps/> */}
        {/* <ListProducts data={obj}/> */}
        {/* <Child  name="Atish"/> */}
        {/* <Child obj={obj}/> */}
        {/* <h1>{count}</h1> */}
        {/* <CounterProps data={func}/> */}

        {/* <CounterProps data={func}>hiiii</CounterProps> */}

        {/* <ColorBox color="red"/> */}
        {/* <ColorBox color="green"/> */}
        {/* <ColorBox color="blue"/> */}
        </div>
    )
}

export default PropsIntro