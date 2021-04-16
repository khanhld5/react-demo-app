import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "../Style/individualStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { handleUpdateList } from "../../state/actions/todoListActions";

function InputField({ ...props }) {
  const [inputTodo, setInputTodo] = useState("");
  const [hoverCheckAll, setHoverCheckAll] = useState(false);

  const list = useSelector((state) => state.todoList.list);
  let allDone = useSelector((state) => state.todoList.allDone);
  const dispatch = useDispatch();

  const handleInputTodoChange = (e) => {
    const value = e.target.value;
    setInputTodo(value);
  };

  const handleMoveIn = () => {
    setHoverCheckAll(true);
  };
  const handleMoveOut = () => {
    setHoverCheckAll(false);
  };

  //handle submit
  const handleTodoSubmit = (value) => {
    if (value.length) {
      let id = 0;
      if (list.length) id = list[list.length - 1].id + 1;
      list.push({ id: id, done: false, title: value });
      const allDone = false;
      dispatch(handleUpdateList(list, allDone));
      props.storeTodoList(list, allDone);
      setInputTodo("");
    }
  };

  //handle done

  const handleAllDone = () => {
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
    dispatch(handleUpdateList(list, allDone));
    props.storeTodoList(list, allDone);
  };

  return (
    <form
      id="input-field"
      className="flex shadow-ct-inner"
      onSubmit={(e) => {
        e.preventDefault();
        handleTodoSubmit(inputTodo);
      }}
    >
      <button
        type="button"
        onClick={handleAllDone}
        onMouseOver={handleMoveIn}
        onMouseLeave={handleMoveOut}
        className={`mr-auto px-5 py-4 flex align-middle focus:outline-none ${
          allDone === false && hoverCheckAll === false
            ? "text-gray-100"
            : "text-yellow-200"
        }`}
      >
        <FontAwesomeIcon icon={faCheck} className="text-xl"></FontAwesomeIcon>
      </button>
      <input
        type="text"
        name="todo"
        id="todoInput"
        className="bg-transparent w-full text-3xl pr-3 focus:outline-none"
        placeholder="What needs to be done?"
        style={{ textindent: "0.25em" }}
        onChange={handleInputTodoChange}
        value={inputTodo}
      />
    </form>
  );
}
export default InputField;
