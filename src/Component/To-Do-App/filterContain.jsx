import React from "react";
import { ALL, ACTIVE, COMPLETE } from "../../Constant/filter";
import { useSelector, useDispatch } from "react-redux";
import { handleRemoveComplete } from "../../state/actions/todoListActions";

function FilterContain({ ...props }) {
  const list = useSelector((state) => state.todoList.list) || [];
  const dispatch = useDispatch();

  const taskCount = (list) => {
    let count = 0;
    if (list.length)
      count = list.reduce(
        (count, item) => (item.done === false ? (count += 1) : count),
        0
      );
    return count;
  };

  //handle remove complete
  const handleClearComplete = () => {
    const newList = list.filter((item) => item.done === false);
    dispatch(handleRemoveComplete(newList));
    props.storeTodoList(newList, false);
  };

  return (
    <div id="filter_contain" className="flex p-2">
      <p className="justify-left mr-2 select-none">
        <span>{taskCount(list)} </span>
        <span>items left</span>
      </p>
      <div className="filter flex flex-1 mx-2 justify-center">
        <button
          className={`mr-1 px-1 border border-${
            props.filter === ALL ? "gray-400" : "transparent"
          } hover:border-gray-200 rounded focus:outline-none `}
          onClick={() => props.handleChangeFilter(ALL)}
        >
          All
        </button>
        <button
          className={`mr-1 px-1 border border-${
            props.filter === ACTIVE
              ? "gray-400"
              : "transparent hover:border-gray-200"
          } rounded focus:outline-none`}
          onClick={() => props.handleChangeFilter(ACTIVE)}
        >
          Active
        </button>
        <button
          className={`mr-1 px-1 border border-${
            props.filter === COMPLETE
              ? "gray-400"
              : "transparent hover:border-gray-200"
          } rounded focus:outline-none`}
          onClick={() => props.handleChangeFilter(COMPLETE)}
        >
          Compelte
        </button>
      </div>
      <button
        className={`px-2 border border-transparent hover:border-gray-400 rounded opacity-${
          list.some((item) => item.done === true) ? "100" : "0"
        } `}
        onClick={handleClearComplete}
      >
        Clear completed
      </button>
    </div>
  );
}
export default FilterContain;
