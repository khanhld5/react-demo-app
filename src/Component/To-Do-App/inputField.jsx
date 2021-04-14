import React from "react";

function ToDoList(props) {
  return (
    <form className="input-field">
      <button>all checked</button>
      <input
        type="text"
        name="todo"
        id="todoInput"
        placeholder="What needs to be done?"
      />
      <button type="submit" hidden onSubmit={props.handleSubmit}></button>
    </form>
  );
}
export default ToDoList;
