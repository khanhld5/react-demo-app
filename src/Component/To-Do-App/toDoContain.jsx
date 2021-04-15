import React, { Component } from "react";
import ToDoList from "./toDoList";
import FilterContain from "./filterContain";
import InputField from "./inputField";

class ToDoContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      inputTodo: "",
      editTodo: "",
      filter: "all",
      allDone: false,
    };
  }
  handleInputChange = (e) => {
    const value = e.target.value;
    this.setState({ inputTodo: value });
  };
  handleEditChange = (e) => {
    const value = e.target.value;
    this.setState({ editTodo: value });
  };
  handleTodoSubmit = (e) => {
    e.preventDefault();
    const state = this.state;
    const list = state.toDoList;
    if (state.inputTodo.length) {
      let id = 0;
      if (list.length) id = list[list.length - 1].id + 1;
      list.push({ id: id, done: false, title: state.inputTodo });
      this.setState({
        toDoList: list,
      });
    }
    this.setState({ inputTodo: "" });
  };
  handleEditSubmit = (index) => {
    const state = this.state;
    const list = state.toDoList;
    if (state.editTodo.length) {
      list[index].title = state.editTodo;
      this.setState({ toDoList: list });
    }
  };
  handleRemove = (index) => {
    const state = this.state;
    const list = state.toDoList;
    list.splice(index, 1);
    this.setState({ toDoList: list });
  };
  handleDone = (index) => {
    const state = this.state;
    const list = state.toDoList;
    list[index].done = !list[index].done;
    this.setState({ toDoList: list });
  };
  handleAllDone = () => {
    const state = this.state;
    const list = state.toDoList;
    let allDone = this.state.allDone;
    if (list.some((item) => item.done === false)) {
      for (let i = 0; i < list.length; i++) {
        list[i].done = true;
      }
      allDone = true;
    } else if (list.every((item) => item.done === true)) {
      for (let i = 0; i < list.length; i++) {
        list[i].done = false;
      }
      allDone = false;
    }
    this.setState({ toDoList: list, allDone });
  };
  handleChangeFilter = (filter) => {
    if (filter !== this.state.filter) this.setState({ filter: filter });
  };
  handleClearComplete = () => {
    const state = this.state;
    const list = state.toDoList;
    const newList = list.filter((item) => item.done === false);
    this.setState({ toDoList: newList });
  };
  render() {
    const state = this.state;
    const list = state.toDoList;
    const filter = state.filter;

    return (
      <div className="display_todo text-center">
        <h1 className="text-7xl text-gray-500 select-none mb-5">Todos</h1>
        <section className="w-2/5 m-auto bg-white rounded shadow-ct-1">
          <InputField
            handleTodoSubmit={this.handleTodoSubmit}
            handleInputChange={this.handleInputChange}
            handleAllDone={this.handleAllDone}
            value={state.inputTodo}
            allDone={state.allDone}
          ></InputField>
          <ToDoList
            list={list}
            filter={filter}
            editValue={state.editTodo}
            handleChange={this.handleEditChange}
            handleSubmit={this.handleEditSubmit}
            handleDone={this.handleDone}
            handleRemove={this.handleRemove}
          ></ToDoList>
          <FilterContain
            list={list}
            handleChangeFilter={this.handleChangeFilter}
            handleClearComplete={this.handleClearComplete}
          ></FilterContain>
        </section>
      </div>
    );
  }
}

export default ToDoContain;
