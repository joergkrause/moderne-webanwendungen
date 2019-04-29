import React from 'react';

function Counter() {

  const incCount = function () {
    this.setState({ count: this.state.count + 1 });
  }

  const getInitialState = function () {
    return { count: 0 };
  }

  return (
    <div>
      <h1>Count: {this.state.count}</h1>
      <button type="button" onClick={this.incCount()}>Increment</button>

    </div>
  );
}

export default Counter;
