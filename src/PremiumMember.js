
//In this video we'll learn how to execute the function which we received as prop in it's parent Named user and User receieved
// from it's parent named App.

function PremiumMember(props){
    return (
        <div className="App">
            <h1>PremiumMember</h1>
            <button onClick={props.data}>Call Parent Function</button>
        </div>
    )
}

export default PremiumMember;