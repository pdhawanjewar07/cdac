import { Component } from "react";

type Props = {
  message?: string;
};

type State = {
  count: number;
};

class LifecycleDemo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log("1. constructor");

    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    console.log("2. getDerivedStateFromProps");
    return null; // no state change
  }

  componentDidMount() {
    console.log("4. componentDidMount");
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log("5. shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Props, prevState: State) {
    console.log("7. getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    console.log("8. componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("9. componentWillUnmount");
  }

  handleClick = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };

  render() {
    console.log("3. render");

    return (
      <div>
        <h2>Message: {this.props.message}</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleClick}>Update State</button>
      </div>
    );
  }
}

export default LifecycleDemo;