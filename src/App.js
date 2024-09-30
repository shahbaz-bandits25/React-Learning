import logo from './logo.svg';
import './App.css';
import Student from "./video-14";
import React,{useState} from "react";
import Users from './Users';
import Admin from './Admin';
import Test from './video-11';
import StateManagementLectrue from './video-12';
import StateManagementLectrueInClassComponent from './video-13';
import GetInputBoxValue from "./video-16";

function App() {
    const [email,setEmail] = useState('azfar@gmail.com');
    const [city,setCity] = useState('Lahore');

  return (
    <div className="App">

        {/* <Users/>
    <Admin/>
    <Test/> */}
        {/* <StateManagementLectrue/> */}
        {/*<StateManagementLectrueInClassComponent/>*/}
    {/*    <Student name={'Shahbaz'} email={'shahbaz@gmail.com'} others={{city:'Karachi',country:'Pakistan'}} />*/}
    {/*    <Student name={'Faisal'} email={'faisal@gmail.com'} others={{city:'Lahore',country:'Pakistan'}}/>*/}
    {/*    <Student name={'Arooba'} email={'arooba@gmail.com'} others={{city:'Frankfurt',country:'Germany'}} />*/}

    {/*/!*    Here I'm Passing the state as Prop to the Student component*!/*/}
    {/*    <Student name={'Azfar'} email={email} others={{city:city,country:'Pakistan'}} />*/}
    {/*    <button onClick={()=>{setEmail('abc@gmail.com')}}>Update Email</button>*/}
    {/*    <button onClick={()=>{setCity('Islamabad')}}>Update City</button>*/}

        <GetInputBoxValue />
    </div>
  );
}

export default App;
