import React,{Component} from 'react'; 
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick'
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import StyleSheet from './components/Stylesheet'
import Inline from './components/Inline'
import './appStyles.css'
import styles from './appStyles.module.css'
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import Fragment from './components/FragmentDemo'
import Table from './components/Table'
import PureComp from './components/ PureComp';
import ParentComp from './components/ParentComp'
import RefsDemo from './components/RefsDemo'
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero'
import ErrorBoundary from './components/ErrorBoundary'
class App extends Component{
  render(){
  return (
    <div className="App">
      <ErrorBoundary>
      <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName="Joker" />
      </ErrorBoundary>
      {/* <PortalDemo/> */}
      {/* <FRParentInput/> */}
      {/* <FocusInput/> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <Table></Table> */}
      {/* <Fragment /> */}
      {/* <LifecycleA /> */}
      {/* <Form /> */}
      {/* <h1 className='error'>Error</h1> */}
      {/* <h1 className={styles.success}>Success</h1> */}
      {/* <Inline /> */}
      {/* <StyleSheet primary={true}></StyleSheet> */}
      {/* <NameList></NameList> */}
      {/* <UserGreetings/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind /> */}
      {/*<FunctionClick />
      <ClassClick />
      {/*<Counter/>*/}
      {/* <Message /> */}
      {/*<Greet name="Bruce" heroName="Batman">
        <p>This is children props</p>
        <p>Hello from Zhuohao Li</p>
      </Greet>
      <Greet name="Clark" heroName="Superman">
        <button>Action</button>
        
  </Greet>*/}
      {/*<Greet name="Diana" heroName="Wonder Woman">
      </Greet>
      <Welcome name="Bruce" heroName="Batman"/>
      {/*<Welcome name="Clark" heroName="Superman"/>
  <Welcome name="Diana" heroName="Wonder Woman"/>/>*/}
      {/*<Welcome />*/}
      {/*<Hello />*/}
    </div>
  );
}
}

export default App;
