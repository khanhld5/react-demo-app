import React from "react";
import { useSelector } from "react-redux";
import Todo from "./toDo";
import { ALL, ACTIVE, COMPLETE } from "../../Constant/filter";

function ToDoList({ ...props }) {
  const list = useSelector((state) => state.todoList.list) || [];

  const filter = (filter, list) => {
    let filterList = [];
    switch (filter) {
      case ALL:
        filterList = [...list];
        break;
      case ACTIVE:
        filterList = list.filter((item) => item.done === false);
        break;
      case COMPLETE:
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
                storeTodoList={props.storeTodoList}
              />
            );
          })
        : ""}
    </ul>
  );
}
export default ToDoList;
