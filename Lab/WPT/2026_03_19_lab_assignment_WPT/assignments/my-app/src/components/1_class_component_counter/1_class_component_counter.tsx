import { Component } from "react";

type State = {
  count: number;
};

class Counter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      
      <div>
        <h1>Counter: {this.state.count}</h1>

        <button onClick={this.decrement} style={{ marginRight: "10px" }}>
          Decrement
        </button>

        <button onClick={this.increment}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;