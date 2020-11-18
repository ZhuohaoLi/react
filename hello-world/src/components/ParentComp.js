import React, { Component } from 'react'
import PureComp from './ PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'
export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Zhuohao Li'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Zhuohao Li'
            })
        },2000)
    }
    render() {
        console.log('********Parent Comp render*****')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}></MemoComp>
                {/* <RegComp name={this.state.name}></RegComp> */}
                {/* <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp
