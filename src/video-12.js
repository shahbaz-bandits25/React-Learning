//In this video we'll learn the use of state and state manangement by using useState hook in functional component

import { useState } from "react";

function StateManagementLectrue() {
    
    const [count,updateCount] = useState(0);

    function increaseCount(){
        updateCount(count+1);
    }


    function decreaseCount(){
        updateCount(count-1);
    }



    return (
      <div className="App">
        <h1>Hello From Video 12!!</h1>
        <p>For detail please see video 12 notes</p>
        <h1>{count}</h1> 
        <button onClick={increaseCount} >Increase Count!</button>
        <button onClick={decreaseCount}>Decrease Count!</button>
      </div>
    );
  }
  
  export default StateManagementLectrue;