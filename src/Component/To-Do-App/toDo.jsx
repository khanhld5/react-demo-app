import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle as faCheckCircleRegular } from "@fortawesome/free-regular-svg-icons";

import { handleUpdateList } from "../../state/actions/todoListActions";

library.add(faCheckCircle, faCheckCircleRegular, faTrashAlt);

function Todo({ ...props }) {
  const item = props.item;
  const index = props.index;
  const list = useSelector((state) => state.todoList.list);
  const allDone = useSelector((state) => state.todoList.allDone);
  const dispatch = useDispatch();

  const [hoverOnRoot, setHoverOnRoot] = useState(false);
  const [edit, setEdit] = useState(item.title);

  const editInput = useRef();
  const check = useRef();

  //check AllDone
  const checkAllDone = (list) => {
    let allDone = false;
    if (list.every((item) => item.done === true)) allDone = true;
    return allDone;
  };

  //submit edit
  const handleEditSubmit = (e) => {
    const input = editInput.current;
    e.preventDefault();

    props.handleEditSubmit(edit, index);
    if (edit.length) {
      list[index].title = edit;
      dispatch(handleUpdateList(list, allDone));
      props.storeTodoList(list, allDone);
    } else handleRemove(index);

    input.blur();
  };

  const handleDone = (index) => {
    list[index].done = !list[index].done;
    const allDone = checkAllDone(list);
    dispatch(handleUpdateList(list, allDone));
    props.storeTodoList(list, allDone);
  };

  const handleRemove = (index) => {
    list.splice(index, 1);
    const allDone = checkAllDone(list);
    dispatch(handleUpdateList(list, allDone));
    props.storeTodoList(list, allDone);
  };

  //Hover on this component
  const handleMoveInRoot = () => {
    setHoverOnRoot(true);
  };
  const handleMoveOutRoot = () => {
    setHoverOnRoot(false);
  };

  //Focus and blur edit input
  const handleEditFocus = (e) => {
    e.target.style.zIndex = "0";
    e.target.classList.add("opacity-100");
    check.current.classList.add("opacity-0");
    check.current.style.zIndex = "-1";
  };
  const handleEditBlur = (e) => {
    e.target.style.zIndex = "-1";
    e.target.classList.remove("opacity-100");
    check.current.classList.remove("opacity-0");
    check.current.style.zIndex = "0";
  };
  const handleFocusEdit = () => {
    const input = editInput.current;
    input.focus();
  };

  //listen to edit state change
  const handleEditChange = (e) => {
    const value = e.target.value;
    setEdit(value);
  };

  return (
    <li
      className=" border-b border-gray-100 "
      onMouseOver={handleMoveInRoot}
      onMouseLeave={handleMoveOutRoot}
    >
      <form className="flex relative" onSubmit={handleEditSubmit}>
        <button
          ref={check}
          type="button"
          className="justtify-left px-4 transition duration-300 focus:outline-none"
          onClick={() => handleDone(index)}
        >
          <FontAwesomeIcon
            className={`text-3xl ${
              item.done ? "text-green-400" : "text-gray-200"
            }`}
            icon={[`${item.done ? "fas" : "far"}`, "check-circle"]}
          ></FontAwesomeIcon>
        </button>
        <label
          className={`flex py-3 pl-2 w-full items-center text-2xl text-left break-all select-none transition duration-300 ${
            item.done ? "line-through text-gray-300" : "no-underline"
          }`}
          onDoubleClick={handleFocusEdit}
        >
          {item.title}
        </label>
        <button
          type="button"
          className={`inline-block px-5 text-xl font-bold transition duration-300 hover:opacity-100 focus:outline-none opacity-${
            hoverOnRoot ? "40" : "0"
          } `}
          onClick={(e) => {
            handleRemove(index);
          }}
        >
          <FontAwesomeIcon
            icon={faTrashAlt}
            className="text-red-500 "
          ></FontAwesomeIcon>
        </button>
        <input
          ref={editInput}
          id="edit"
          type="text"
          style={{
            zIndex: "-1",
            width: `${
              check.current
                ? `calc(100% - ${check.current.offsetWidth}px)`
                : "80%"
            }`,
          }}
          className="absolute right-0 h-full py-3 px-2 bg-white opacity-0 border-b border-gray-100 text-gray-400 text-2xl italic break-all transition duration-300 focus:outline-none"
          value={edit}
          onChange={handleEditChange}
          onFocus={handleEditFocus}
          onBlur={handleEditBlur}
        />
      </form>
    </li>
  );
}
export default Todo;
