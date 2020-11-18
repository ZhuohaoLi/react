import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            count:0
        }
    }
    increment(){
        // //this.state.count=this.state.count+1// UI is no rerendering whenever the state is changing
        // this.setState({
        //     count:this.state.count+1
        // },()=>{console.log('Callback Value',this.state.count)}) //console log inside second parameter
        
        this.setState((prevState,props)=>({
            count:prevState.count+1+props.addValue
        }))
        
        
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
            <div>
            <div>Count-{this.state.count}</div>
            <button onClick={()=>this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter
