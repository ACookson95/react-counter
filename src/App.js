import React, {Component} from 'react';
import Counter from './counter/Counter'

class App extends Component {

  render() {
    return(
      <div>
        <Counter counterName="Blue"/>
        <Counter counterName="Green"/>
        <Counter counterName="Red"/>
        <Counter counterName="Yellow"/>
      </div>
    )
  }

}

export default App;
