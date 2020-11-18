import React from 'react'

const Hello=()=>{
    //return(
       // <div className='dummyClass'>
        //    <h1>Hello Joe!</h1>
       // </div>
   // )
   return React.createElement('div',{id:'hello',className:'dummyClass'},React.createElement('h1',null,'Hello Joe!'))
}
export default Hello