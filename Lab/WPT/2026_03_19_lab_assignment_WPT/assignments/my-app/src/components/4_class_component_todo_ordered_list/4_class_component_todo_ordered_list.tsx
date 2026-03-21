import { Component } from "react";
import type { ChangeEvent } from "react";

type State = {
  new_task: string;
  to_do_list: string[];
};

class TodoClassComponent extends Component<{}, State> {
  state: State = {
    new_task: "",
    to_do_list: ["task 1", "task 2", "task 3"],
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      new_task: e.target.value,
    });
  };

  // WHAT IS HAPPENING HERE BRO?
  ////////////////////////////////////////////////////////////////////
  add_to_list = () => {
    this.setState((prev) => {
      if (prev.new_task.trim() === "") {
        alert("Task is empty");
        return null;
      }

      return {
        to_do_list: [...prev.to_do_list, prev.new_task],
        new_task: "",
      };
    });
  };
  ////////////////////////////////////////////////////////////////////

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.new_task}
          onChange={this.handleChange}
        />

        <button onClick={this.add_to_list}>
          Add Task
        </button>

        <ol>
          {this.state.to_do_list.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoClassComponent;