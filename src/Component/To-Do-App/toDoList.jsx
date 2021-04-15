import React, { useRef } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as faCheckCircleRegular } from "@fortawesome/free-regular-svg-icons";

library.add(faCheckCircle, faCheckCircleRegular);

function ToDoList(props) {
  const list = props.list;
  const editInput = useRef();
  const handleEdit = (node) => {
    node.children[3].focus();
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
    <ul ref={editInput}>
      {list.length
        ? filter(props.filter, list).map((item, index) => {
            return (
              <li key={item.id}>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    props.handleSubmit(index);
                  }}
                >
                  <FontAwesomeIcon
                    icon={[`${item.done ? "fas" : "far"}`, "check-circle"]}
                    onClick={() => props.handleDone(index)}
                  ></FontAwesomeIcon>
                  <label
                    onDoubleClick={() =>
                      handleEdit(editInput.current.children[index].firstChild)
                    }
                  >
                    {item.title}
                  </label>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      props.handleRemove(index);
                    }}
                    className="inline-block px-2 mx-5 rounded bg-gray-600 focus:outline-none text-white"
                  >
                    x
                  </button>
                  <input
                    type="text"
                    className="edit"
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
