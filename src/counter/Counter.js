import React, { Component } from 'react';

class Counter extends Component {

  state = { counterValue: 0 }

  inc = () => {
    this.setState({counterValue: this.state.counterValue + 1})
  }

  dec= () => {
    this.setState({counterValue: this.state.counterValue - 1})
  }

  render() {
    
    const { counterName } = this.props

    return(
      <div>
        <h1 style={{ color: counterName, backgroundColor: "grey"}}>{ this.props.counterName } Counter</h1>
        <h3>
          { this.state.counterValue }
        </h3>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
      </div>
    )
  }

}

export default Counter;