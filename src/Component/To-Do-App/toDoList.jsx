import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Todo from "./toDo";
import { ALL, ACTIVE, COMPLETE } from "../../Constant/filter";

function ToDoList({ ...props }) {
  const list = useSelector((state) => state.todoList.list);
  const filter = useSelector((state) => state.todoList.filter);

  useEffect(() => {
    const storeTodoList = () => {
      const listStorage = JSON.parse(localStorage.getItem("list"));
      if (listStorage && list.length < listStorage.length) {
        localStorage.removeItem("list");
      }
      localStorage.setItem("list", JSON.stringify(list));
    };
    storeTodoList();
  }, [list]);

  const filterList = (filter, list) => {
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
        ? filterList(filter, list).map((item) => {
            return <Todo key={item.id} item={item} />;
          })
        : ""}
    </ul>
  );
}
export default ToDoList;
