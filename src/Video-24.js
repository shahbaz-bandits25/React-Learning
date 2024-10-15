import React from 'react';


class Car extends React.Component {

    constructor() {
        super();

        this.state = {
            car: 'Toyota Yaris'
        }
    }
    render() {
        console.warn('Render method calls');
        return (
            <div>
                <h1>React Render Method Lecture</h1>
                {/*<p>Your Car is {this.props.car}</p>*/}
                <p>Your Car is {this.state.car}</p>
                <button onClick={()=>this.setState({car:'Honda Cvic'})}>Update Car!</button>

            </div>
        )
    }
}


export default Car;