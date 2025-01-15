import { Component } from "react";

class IncreaseCount extends Component {
    constructor() {
        super();
        this.state={
            count:"hii"
        }

    }

    render(){
        return(
            <div>
                <h1>Increment count</h1>
                <h1>Count :{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({count :this.state.count="byy" })
                }}>Increase</button>
                <button onClick={()=>{
                    this.setState({count :this.state.count="hii"})
                }}>Decrease</button>
                
            </div>
        )
    }
    
}

export default IncreaseCount