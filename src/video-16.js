//In this video we'll learn how to get the value from the input box on change event as wel as display it
// on click a button
import React,{useState} from "react";


function GetInputBoxValue()
{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data,setData] = useState(null);
    const [display,setDisplay] = useState(false);

    function getData(val){
        setData(val.target.value);
        setDisplay(false)
    }
    return (
        <div className="App">
            <h1>Video 16 </h1>
            <p>Get Input Box Value</p>
            <input type="text" onChange={getData} />
            <button onClick={()=>{setDisplay(true)}}>Display!!</button>
            {
                display ? <h3>{data}</h3> : null
            }
        </div>
    );
}


export default GetInputBoxValue;