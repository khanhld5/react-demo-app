import React from "react";
import { ALL, ACTIVE, COMPLETE } from "../../Constant/filter";
import { useSelector, useDispatch } from "react-redux";
import {
  handleRemoveComplete,
  handleFilterToAll,
  handleFilterToActive,
  handleFilterToComplete,
} from "../../state/actions/todoListActions";

function FilterContain({ ...props }) {
  const list = useSelector((state) => state.todoList.list) || [];
  const filter = useSelector((state) => state.todoList.filter) || ALL;

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

  return (
    <div id="filter_contain" className="flex p-2">
      <p className="justify-left mr-2 select-none">
        <span>{taskCount(list)} </span>
        <span>items left</span>
      </p>
      <div className="filter flex flex-1 mx-2 justify-center">
        <button
          className={`mr-1 px-1 border ${
            filter === ALL
              ? "border-gray-400"
              : "border-transparent hover:border-gray-200"
          } rounded focus:outline-none `}
          onClick={() => {
            if (filter !== ALL) dispatch(handleFilterToAll());
          }}
        >
          All
        </button>
        <button
          className={`mr-1 px-1 border ${
            filter === ACTIVE
              ? "border-gray-400"
              : "border-transparent hover:border-gray-200"
          } rounded focus:outline-none`}
          onClick={() => {
            if (filter !== ACTIVE) dispatch(handleFilterToActive());
          }}
        >
          Active
        </button>
        <button
          className={`mr-1 px-1 border ${
            filter === COMPLETE
              ? "border-gray-400"
              : "border-transparent hover:border-gray-200"
          } rounded focus:outline-none`}
          onClick={() => {
            if (filter !== COMPLETE) dispatch(handleFilterToComplete());
          }}
        >
          Compelte
        </button>
      </div>
      <button
        className={`px-2 border border-transparent hover:border-gray-400 rounded ${
          list.some((item) => item.done === true) ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => dispatch(handleRemoveComplete())}
      >
        Clear completed
      </button>
    </div>
  );
}
export default FilterContain;
