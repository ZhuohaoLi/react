import React, { Component } from 'react' 
import LifecycleB from './LifecycleB'
class LifecycleA extends Component {
    //mounting
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Zhuohao Li'
        }
        console.log('Lifecycle A constructor')
    }
    //moungtingandupdating
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }
    //mounting
    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }
    //updating
    shouldComponentUpdate(){
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }
    //updating
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }
    //updating
    componentDidUpdate(){
        console.log('LifecycleA componentDidUpdate')
    }
    changeState=()=>{
        this.setState({
            name:'Codevolution'
        })
    }
    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
