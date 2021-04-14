import React, { Component } from "react";
import ToDoList from "./toDoList";
import FilterContain from "./filterContain";
import InputField from "./inputField";

class ToDoContain extends Component {
  constructor(props) {
    super(props);
    this.state = { toDoList: [] };
    this.inputTodo = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const state = this.state;
    if (this.inputTodo.current.value) {
      const id = state.toDoList[state.toDoList.length - 1].id;
      this.setState({
        toDoList: { id: id ? id + 1 : 0, done: false, title: e.target.value },
      });
    }
    console.log(state.toDoList);
  };
  render() {
    return (
      <div className="display_todo">
        <h1>Todos</h1>
        <section>
          <InputField
            handleSubmit={this.handleSubmit}
            ref={this.inputTodo}
          ></InputField>
          <ToDoList></ToDoList>
          <FilterContain></FilterContain>
        </section>
      </div>
    );
  }
}

export default ToDoContain;
