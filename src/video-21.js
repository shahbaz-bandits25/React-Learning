//In this video we'll learn how to execute the function which we received as prop.

import Member from "./Member";
import PremiumMember from "./PremiumMember";

function User(props){
    return (
        <div className="App">
            <h1>User</h1>
            <button onClick={props.data}>Call Parent Function</button>

            <div className='row'>
                <Member data={props.data}/>
                <PremiumMember  data={props.data} />
            </div>
        </div>
    )
}

export default User;