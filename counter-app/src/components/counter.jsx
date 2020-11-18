import React, { Component } from 'react'

class counter extends Component {
    constructor(props){
        super(props);
        //this.handleIncrement=this.handleIncrement.bind(this)
        // this.state={
        //     count:this.props.counter.value,
        //     tags:["tag1","tag2","tag3"],
        //     imageUrl:'https://picsum.photos/200'
        // };
    }
    styles={
        fontSize:50,
        fontWight:'bold'
    };

    // handleIncrement=()=>{
    //     console.log('Increment Clicked',this)
    //     this.setState({count:this.state.count+1})
    //     //obj.method(); 
    //     //function();
    // }
    //arrow function don't rebind 'this' keyword
    doHandleIncrement=()=>{
        this.handleIncrement({id:1});
    }
    
    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>
        return <ul>
                  {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
              </ul>
    }
    componentDidUpdate(prevProps,prevState){
        console.log('prevProps',prevProps);
        console.log('prevState',prevState);
        if(prevProps.counter.value!==this.props.counter.value){
            //Ajax call and get new data from the server
        }
    }
    componentWillUnmount(){
        console.log("Counter-Unmount")
    }//unmount before removing this counter from the DOM. You can clean up timers and listeners before these are removed from the DOM. Otherwise, there will be memory leaks.
    render() {
        //console.log('props',this.props);//key is not an attribute of a props
        return (
            <React.Fragment>
                {/* {this.props.children} */}
              {/*<img src={this.state.imageUrl} alt=""/>*/}
              <div className="row">
              <div className="col-1">
                <div className={this.getBadgeClasses()}>{this.formatCount()}</div>  
              </div>
               
              <div className="col">
              <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">+</button>
              <button disabled={this.props.counter.value===0?'disabled':''}onClick={()=>this.props.onDecrement(this.props.counter)} className="btn btn-secondary btn-sm m-2">-</button>
              <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm">Delete</button>
              </div>
              </div>
              <br></br>
              {/* {this.state.tags.length ===0 &&  "Please create a new tag!"} */}
              {/*can combine boolean and non-boolean expressions in js */}
              {/* {this.renderTags()} */}
            </React.Fragment>
            
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-block badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value}=this.props.counter;
        return value===0 ? "Zero" : value;
    }
}

export default counter
