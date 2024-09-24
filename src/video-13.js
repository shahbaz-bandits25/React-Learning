//In this video we'll learn the use of state and state manangement in class component

import React,{Component} from 'react';

export default class  StateManagementLectrueInClassComponent extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }

        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);


    }

    increaseCount(){
        this.setState({count:this.state.count+1})
    }

    
    decreaseCount(){
        this.setState({count:this.state.count-1})
    }

    render(){
        return (
        <div className="App">
          <h1>Hello From Video 13!!</h1>
          <p>For detail please see video 13 notes</p>
          <h1>{this.state.count}</h1> 
          <button onClick={this.increaseCount} >Increase Count!</button>
          <button onClick={this.decreaseCount}>Decrease Count!</button>
        </div>
        )
    }
}