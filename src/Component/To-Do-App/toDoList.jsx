import React from "react";
import Todo from "./toDo";

function ToDoList({ ...props }) {
  const list = props.list;

  const filter = (filter, list) => {
    let filterList = [];
    switch (filter) {
      case "all":
        filterList = [...list];
        break;
      case "active":
        filterList = list.filter((item) => item.done === false);
        break;
      case "complete":
        filterList = list.filter((item) => item.done === true);
        break;
      default:
        filterList = [];
        break;
    }
    return filterList;
  };
  return (
    <ul id="toDoList" className="border-t border-gray-200">
      {list.length
        ? filter(props.filter, list).map((item, index) => {
            return (
              <Todo
                key={item.id}
                item={item}
                index={index}
                handleEditSubmit={props.handleEditSubmit}
                handleDone={props.handleDone}
                handleRemove={props.handleRemove}
              ></Todo>
            );
          })
        : ""}
    </ul>
  );
}
export default ToDoList;
