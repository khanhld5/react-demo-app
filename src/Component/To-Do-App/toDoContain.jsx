import React, { Component } from "react";
import ToDoList from "./toDoList";
import FilterContain from "./filterContain";
import InputField from "./inputField";
import { ALL } from "../../Constant/filter";

class ToDoContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoList: [],
      filter: ALL,
      allDone: false,
    };
  }

  //get data
  getToDoList = () => {
    const list = JSON.parse(localStorage.getItem("list")) || [];
    const allDone = JSON.parse(localStorage.getItem("allDone")) || false;
    this.setState({ toDoList: list, allDone });
  };

  //set data
  setTodoList = (list, allDone) => {
    const listStorage = JSON.parse(localStorage.getItem("list"));
    if (listStorage && list.length < listStorage.length) {
      localStorage.removeItem("list");
      localStorage.removeItem("allDone");
    }
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("allDone", JSON.stringify(allDone));
  };

  //handle submit
  handleTodoSubmit = (value) => {
    const list = this.state.toDoList;
    if (value.length) {
      let id = 0;
      if (list.length) id = list[list.length - 1].id + 1;
      list.push({ id: id, done: false, title: value });
      const allDone = false;
      this.setState({
        toDoList: list,
        allDone,
      });
      this.setTodoList(list, allDone);
    }
  };
  handleEditSubmit = (value, index) => {
    const list = this.state.toDoList;
    if (value.length) {
      list[index].title = value;
      this.setState({ toDoList: list });
      this.setTodoList(list, this.state.allDone);
    } else this.handleRemove(index);
  };
  //check AllDone
  checkAllDone = (list) => {
    let allDone = false;
    if (list.every((item) => item.done === true)) allDone = true;
    return allDone;
  };
  //handle done
  handleDone = (index) => {
    const list = this.state.toDoList;
    list[index].done = !list[index].done;
    const allDone = this.checkAllDone(list);
    this.setState({ toDoList: list, allDone });
    this.setTodoList(list, allDone);
  };
  handleAllDone = () => {
    const list = this.state.toDoList;
    let allDone = this.checkAllDone(list);
    if (allDone) {
      for (let i = 0; i < list.length; i++) {
        list[i].done = false;
      }
      allDone = false;
    } else {
      for (let i = 0; i < list.length; i++) {
        list[i].done = true;
      }
      allDone = true;
    }
    this.setState({ toDoList: list, allDone });
    this.setTodoList(list, allDone);
  };

  //handle remove
  handleRemove = (index) => {
    const state = this.state;
    const list = state.toDoList;
    list.splice(index, 1);
    const allDone = this.checkAllDone(list);
    this.setState({ toDoList: list, allDone });
    this.setTodoList(list, allDone);
  };
  handleClearComplete = () => {
    const state = this.state;
    const list = state.toDoList;
    const newList = list.filter((item) => item.done === false);
    this.setState({ toDoList: newList, allDone: false });
    this.setTodoList(newList, false);
  };

  // handle Filter
  handleChangeFilter = (filter) => {
    if (filter !== this.state.filter) this.setState({ filter: filter });
  };

  //life cycle
  componentDidMount() {
    this.getToDoList();
  }

  //render
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
            handleAllDone={this.handleAllDone}
            allDone={state.allDone}
          ></InputField>
          <ToDoList
            list={list}
            filter={filter}
            handleEditSubmit={this.handleEditSubmit}
            handleDone={this.handleDone}
            handleRemove={this.handleRemove}
          ></ToDoList>
          <FilterContain
            list={list}
            filter={filter}
            handleChangeFilter={this.handleChangeFilter}
            handleClearComplete={this.handleClearComplete}
          ></FilterContain>
        </section>
      </div>
    );
  }
}

export default ToDoContain;
