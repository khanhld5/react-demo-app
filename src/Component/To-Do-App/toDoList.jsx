import React from "react";
import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as faCheckCircleRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faCheckCircle, faCheckCircleRegular);

function ToDoList({ ...props }) {
  const list = props.list;
  const handleEdit = (index) => {
    const node = document.querySelector(
      `#toDoList li:nth-child(${index + 1}) form`
    );
    const editInput = node.children[3];
    editInput.focus();
  };
  const handleMoveIn = (index) => {
    const liNode = document.querySelector(
      `#toDoList li:nth-child(${index + 1}) form`
    );
    const btnRemove = liNode.children[2];
    ReactDOM.findDOMNode(btnRemove).classList.add("opacity-60");
  };
  const handleMoveOut = (index) => {
    const liNode = document.querySelector(
      `#toDoList li:nth-child(${index + 1}) form`
    );
    const btnRemove = liNode.children[2];
    ReactDOM.findDOMNode(btnRemove).classList.remove("opacity-60");
  };
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
              <li
                key={item.id}
                className=" border-b border-gray-100 "
                onMouseOver={() => handleMoveIn(index)}
                onMouseLeave={() => handleMoveOut(index)}
              >
                <form
                  className="flex relative"
                  onSubmit={(e) => {
                    e.preventDefault();
                    props.handleSubmit(index);
                  }}
                >
                  <button
                    type="button"
                    className="justtify-left px-2 focus:outline-none"
                    onClick={() => props.handleDone(index)}
                  >
                    <FontAwesomeIcon
                      className={`text-3xl ${
                        item.done ? "text-green-400" : "text-gray-200"
                      }`}
                      icon={[`${item.done ? "fas" : "far"}`, "check-circle"]}
                    ></FontAwesomeIcon>
                  </button>
                  <label
                    className="flex py-3 pl-2 w-full text-left items-center text-2xl break-all select-none"
                    onDoubleClick={() => handleEdit(index)}
                  >
                    {item.title}
                  </label>
                  <button
                    className="inline-block px-2 focus:outline-none text-black opacity-0"
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleRemove(index);
                    }}
                  >
                    x
                  </button>
                  <input
                    type="text"
                    style={{ "z-index": "-1" }}
                    className="edit absolute right-0"
                    value={
                      props.editValue.length ? props.editValue : item.title
                    }
                    onChange={props.handleChange}
                  />
                </form>
              </li>
            );
          })
        : ""}
    </ul>
  );
}
export default ToDoList;
