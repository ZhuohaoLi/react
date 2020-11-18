import React, { Component } from "react";
import {ToastContainer} from 'react-toastify'
import http from '../../vidly/src/services/httpService';
import config from './config.json'
import 'react-toastify/dist/ReactToastify.css';
class App extends Component {
  state = {
    posts: [],
  };
  //method in this class so async in the front
  async componentDidMount() {
    //promise holds result of asynchronized objects
    //pending>resolved(success) OR rejected(failure)
    //has internal objects PromiseStatus, PromiseValue
   
    const { data: posts } = await http.get(config.apiEndpoint);
    this.setState({ posts });
    //promise.then() is the old way
  }
  //handleAdd is a property assigned to a function
  handleAdd = async () => {
    const obj = { title: "a", body: "b" };
    const { data: post } = await http.post(config.apiEndpoint, obj);
    const posts = [post, ...this.state.posts]; //put it in the front
    this.setState({ posts });
  };

  handleUpdate = async (post) => {
    post.title = "UPDATED";
    await http.put(config.apiEndpoint + "/" + post.id, post);
    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    posts[index] = { ...post };
    this.setState({ posts });
    //http.patch(config.apiEndpoint+'/'+post.id,{title:post.title});
    //patch is only for updating one
  };

  handleDelete = async (post) => {
    //this is an optimistic update
    const orginalPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    //use try and catch only if you want to do something specific related to the result
    try {
      await http.delete(config.apiEndpoint  +"/"+ post.id );
      //throw new Error('')
    } catch (ex) {
      //Expected(404:not found, 400:bad request (submit form with invalid data))-CLIENT ERRORS
      //-Display a specific error message
      //don't need to console.log expected error
      if (ex.response && ex.response.status === 404)
        alert("This post has already been deleted.");
      //
      //Unexpected (network down, server down,database down, bug)
      //- Log them
      //- Display a generic and friendly error message
      this.setState({ posts: orginalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
       <ToastContainer/>
        <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </React.Fragment>
    );
  }
}

export default App;
