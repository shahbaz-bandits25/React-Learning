function Test() {

    function apple(){
        alert("Clicked");
    }





    return (
      <div className="App">
        <h1>Hello From Test!!</h1>
        <p>For detail please see video 11 notes</p>
        {/* <button onClick={apple}>Click Me!</button> */}
        
        {/* <button onClick={()=>apple()}>Click Me!</button> */}
        
        
        <button onClick={()=> alert("Clicked")}>Click Me!</button>
      </div>
    );
  }
  
  export default Test;