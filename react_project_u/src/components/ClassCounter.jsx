import React from "react";

class ClassCounter extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.clear = this.clear.bind(this)
    }

    increment(){
        this.setState({count: this.state.count + 1})
    }
    decrement(){
        if (this.state.count>0)
        this.setState({count: this.state.count - 1})
    }
    clear(){
        this.setState({count: 0})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increment}>Like</button>
                <button onClick={this.decrement}>Dislike</button>
                <button onClick={this.clear}>Clear</button>
            </div>
            )
    }
}

export default ClassCounter
