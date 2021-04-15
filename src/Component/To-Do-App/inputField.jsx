import React from "react";
import ReactDOM from "react-dom";
import "../Style/individualStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function InputField({ ...props }) {
  const handleMoveIn = () => {
    //Node on DOM
    const inputField = document.querySelector("#input-field");
    const btnAllCheckIcon = inputField.children[0].firstChild;

    //Node on Virtual DOM
    const btnAllCheckIconVD = ReactDOM.findDOMNode(btnAllCheckIcon);

    //action
    if (!props.allDone) {
      btnAllCheckIconVD.classList.add("text-yellow-200");
      btnAllCheckIconVD.classList.remove("text-gray-100");
    }
  };
  const handleMoveOut = (index) => {
    //Node on DOM
    const inputField = document.querySelector("#input-field");
    const btnAllCheckIcon = inputField.children[0].firstChild;

    //Node on Virtual DOM
    const btnAllCheckIconVD = ReactDOM.findDOMNode(btnAllCheckIcon);

    //action
    if (!props.allDone) {
      btnAllCheckIconVD.classList.add("text-gray-100");
      btnAllCheckIconVD.classList.remove("text-yellow-200");
    }
  };

  return (
    <form
      id="input-field"
      className="flex shadow-ct-inner"
      onSubmit={props.handleTodoSubmit}
    >
      <button
        type="button"
        onClick={props.handleAllDone}
        onMouseOver={handleMoveIn}
        onMouseLeave={handleMoveOut}
        className={`mr-auto px-5 py-4 flex align-middle focus:outline-none ${
          props.allDone ? "text-yellow-200" : "text-gray-100"
        }`}
      >
        <FontAwesomeIcon
          icon={faCheck}
          className="transition duration-500 text-xl"
        ></FontAwesomeIcon>
      </button>
      <input
        type="text"
        name="todo"
        id="todoInput"
        className="bg-transparent w-full text-3xl pr-3 focus:outline-none"
        placeholder="What needs to be done?"
        style={{ "text-indent": "0.25em" }}
        onChange={props.handleInputChange}
        value={props.value}
      />
    </form>
  );
}
export default InputField;
