import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isloggedIn: true
        }
    }

    render() {
        //4.short circuit operator
        return this.state.isloggedIn && <div>Welcome Joe</div>


        //3.ternary condional approach
        // return(
        // this.state.isloggedIn?
        // <div>Welcome Joe</div> : <div>Welcome Guest</div>
        // )

        //2.element variable approach
        
        // let message
        // if(this.state.isloggedIn){
        //     message=<div>Welcome Joe</div>
        // }else{
        //     message=<div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        

        //1.Ifelse 
        
        // if(this.state.isloggedIn){
        //     return (
        //         <div>
        //             Welcome Joe
        //         </div>
        //     )
        // }else{
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
        // return (
        //     <div>
        //         <div> Welcome Joe </div>
        //         <div>Welcome Guest</div>
        //     </div>)

    }
}

export default UserGreetings
