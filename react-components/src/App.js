import React, { Component } from 'react'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import ClickCounterTwo from './components/ClickCounterTwo'
import HoverCounterTwo from './components/HoverCounterTwo'
import User from './components/User'
import Counter from './components/Counter'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter>
        {(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}
        </Counter>
        <Counter>
        {(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}
        </Counter>
        {/* <Counter render={(count, incrementCount) => (<ClickCounterTwo count={count} incrementCount={incrementCount} />)}/> */}
        {/* <Counter render={(count, incrementCount) => (<HoverCounterTwo count={count} incrementCount={incrementCount} />)}/> */}
        {/* <ClickCounterTwo />/
        <HoverCounterTwo />
        <User render={(isLoggedIn)=>isLoggedIn ? 'ZhuohaoLi' :'Guest'}/> */}
          {/* <User name={(isLoggedIn)=>isLoggedIn ? 'ZhuohaoLi' :'Guest'}/> */}
          {/* <ClickCounter /> */}
          {/* <HoverCounter name="Zhuohao Li"/> */}
      </div>
    )
      }
  }
  
  export default App;
  
