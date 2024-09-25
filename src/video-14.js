//In this video we'll learn how to use props in the functional component

function Student(props){

    return(
        <div className="App">
            <h1> Props In Functional Component</h1>
            <div className="row" style={{backgroundColor:'skyblue',margin:10}}>
                <h2>Hello {props.name}</h2>
                <p>Mail: {props.email}</p>
                <p>City: {props.others.city}</p>
                {/*<p>Country: {props.others.country}</p>*/}
            </div>
        </div>
    )
}

export default Student;