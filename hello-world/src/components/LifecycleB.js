import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'Zhuohao Li'
        }
        console.log('Lifecycle B constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }
    //updating
    shouldComponentUpdate(){
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }
    //updating
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }
    //updating
    componentDidUpdate(){
        console.log('LifecycleB componentDidUpdate')
    }
    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                LifeCycleB
            </div>
        )
    }
}

export default LifecycleB
