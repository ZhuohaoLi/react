import React from 'react';
import './App.css';
import ComponentC from './components/ComponentC'
import {UserProvider} from './components/userContext'
import PostList from './components/PostList';
import PostForm from './components/PostForm'
function App() {
  return (
    <div className="App">
      <PostForm />
      {/* <PostList /> */}
    {/* <UserProvider value="Zhuohao Li">
      <ComponentC/>
    </UserProvider> */}
    </div>
  );
}

export default App;
