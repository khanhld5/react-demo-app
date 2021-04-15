import React, { useState } from "react";
import "../Style/individualStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function InputField({ ...props }) {
  const [inputTodo, setInputTodo] = useState("");
  const [hoverCheckAll, setHoverCheckAll] = useState(false);

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

  return (
    <form
      id="input-field"
      className="flex shadow-ct-inner"
      onSubmit={(e) => {
        e.preventDefault();
        props.handleTodoSubmit(inputTodo);
        setInputTodo("");
      }}
    >
      <button
        type="button"
        onClick={props.handleAllDone}
        onMouseOver={handleMoveIn}
        onMouseLeave={handleMoveOut}
        className={`mr-auto px-5 py-4 flex align-middle focus:outline-none text-${
          props.allDone
            ? "yellow-200"
            : hoverCheckAll
            ? "yellow-200"
            : "gray-100"
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
        style={{ "text-indent": "0.25em" }}
        onChange={handleInputTodoChange}
        value={inputTodo}
      />
    </form>
  );
}
export default InputField;
