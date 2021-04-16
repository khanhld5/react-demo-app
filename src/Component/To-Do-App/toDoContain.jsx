import React, { Component } from "react";
import ToDoList from "./toDoList";
import FilterContain from "./filterContain";
import InputField from "./inputField";
import { ALL } from "../../Constant/filter";
import { connect } from "react-redux";
import {
  handleUpdateList,
  handleRemoveComplete,
} from "../../state/actions/todoListActions";

class ToDoContain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: ALL,
    };
  }

  //get data
  getTodoList = () => {
    const list = JSON.parse(localStorage.getItem("list")) || [];
    const allDone = JSON.parse(localStorage.getItem("allDone")) || false;
    this.props.handleUpdateList(list, allDone);
  };

  //set data
  storeTodoList = (list, allDone) => {
    const listStorage = JSON.parse(localStorage.getItem("list"));
    if (listStorage && list.length < listStorage.length) {
      localStorage.removeItem("list");
      localStorage.removeItem("allDone");
    }
    localStorage.setItem("list", JSON.stringify(list));
    localStorage.setItem("allDone", JSON.stringify(allDone));
  };

  // handle Filter
  handleChangeFilter = (filter) => {
    if (filter !== this.state.filter) this.setState({ filter: filter });
  };

  //life cycle
  componentDidMount() {
    this.getTodoList();
  }

  //render
  render() {
    const state = this.state;
    const props = this.props.todoList;
    const list = props.list || [];
    const filter = state.filter;

    return (
      <div className="display_todo text-center">
        <h1 className="text-7xl text-gray-500 select-none mb-5">Todos</h1>
        <section className="w-2/5 m-auto bg-white rounded shadow-ct-1">
          <InputField storeTodoList={this.storeTodoList} />
          <ToDoList filter={filter} storeTodoList={this.storeTodoList} />
          <FilterContain
            filter={filter}
            handleChangeFilter={this.handleChangeFilter}
            storeTodoList={this.storeTodoList}
          />
        </section>
      </div>
    );
  }
}

export default connect((state) => ({ todoList: state.todoList }), {
  handleUpdateList,
  handleRemoveComplete,
})(ToDoContain);
