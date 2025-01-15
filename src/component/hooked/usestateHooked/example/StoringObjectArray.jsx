import { useState } from "react"

let StoringObjectArray = () => {
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
            <div style={{
                display:"flex",
                justifyContent:"space-around",
                flexWrap:"wrap"
            }}>{
                obj.map((val, i) => (
                    <div key={i} style={{ height: "350px", width: "250px", border: "1px solid black" }}>
                        <img src={val.image} alt="" style={{ height: "150px", width: "250px" }} />

                        <h1 style={{ fontSize: "15px" }}>{val.name}</h1>
                        <h1 style={{ fontSize: "15px" }}>{val.email}</h1>
                        <address><h1 style={{ fontSize: "15px" }}>{val.address.state}</h1>
                            <h1 style={{ fontSize: "15px" }}>{val.address.city}</h1>
                            <h1 style={{ fontSize: "15px" }}>{val.address.street}</h1>
                            <h1 style={{ fontSize: "15px" }}>{val.address.zip}</h1>
                            </address>

                    </div>
                ))
            }</div>
        </div>
    )


}

export default StoringObjectArray