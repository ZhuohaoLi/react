import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef=React.createRef()
        this.cbRef=null
        this.setCBRef=(element)=>{ //assign DOM element to the cbRef
            this.cbRef=element
        }
        this.state = {
            
        }
    }
    componentDidMount(){
        //react will call the ref callback with the DOM element when the component mounts and call it with null when it unmounts
        if(this.cbRef){
            this.cbRef.focus()
        }
        //this.inputRef.current.focus()
        //console.log(this.inputRef)
    }
    clickHandler=()=>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type = "text" ref={this.inputRef}/>
                <input type = "text" ref={this.setCBRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
