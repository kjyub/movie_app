import React from 'react';
import PropTypes from "prop-types"
import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    count: 0
  }
  add = () => {
    this.setState(current => ({ count: current.count + 1 }))
    console.log("add", this.state.count)
  }
  minus = () => {
    this.setState({ count: this.state.count - 1 })
    console.log("minus", this.state.count)
  }
  // Didmount 마운트가 된후 Willmount 마운트가 되기 직전
  componentDidMount() {
    console.log("Component rendered - componentDidmount");
  }
  // 마운트가 업데이트될때
  componentDidUpdate() {
    console.log("I just updated - componentDidupdate");
  }
  // 페이지 벗어날때
  componentWillUnmount() {
    console.log("Goodbye, cruel world - componentWillUnmount");
  }
  render() {
    console.log("im rendered!")
    return <div>
      <h3>Number : {this.state.count}</h3>
      <button onClick={this.add} ref="추가">Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
