import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            message:'Hello'
        }
        //this.clickHandler=this.clickHandler.bind(this)//only once in the constructor
    }
    // clickHandler(){
    //     this.setState({
    //         message:'Goodbye!'
    //     })
    // }

    //class property as arrow function
    clickHandler=()=>{
        this.setState({
            message:'GoodBye!'
        })
    }
    render() {
        return (
             //bingding in the render method
            //every update to the state will cause the component to re-render, which will generate brand new event handlers
            
            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={this.clickHandler.bind(this)}>Click</button>
            // </div>
            
            //arrow function in render method, also has performance implication
            // <div>
            //     <div>{this.state.message}</div>
            //     <button onClick={()=>this.clickHandler()}>Click</button> 
            // </div>
            <div>
            <div>{this.state.message}</div>
            <button onClick={this.clickHandler}>Click</button> 
            </div>


        )
    }
}

export default EventBind
