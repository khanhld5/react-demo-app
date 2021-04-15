import React from "react";
function FilterContain({ ...props }) {
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
        <span>{taskCount(props.list)} </span>
        <span>items left</span>
      </p>
      <div className="filter flex flex-1 mx-2 justify-center">
        <button
          className={`mr-1 px-1 border border-${
            props.filter === "all" ? "gray-400" : "transparent"
          } hover:border-gray-200 rounded focus:outline-none `}
          onClick={() => props.handleChangeFilter("all")}
        >
          All
        </button>
        <button
          className={`mr-1 px-1 border border-${
            props.filter === "active"
              ? "gray-400"
              : "transparent hover:border-gray-200"
          } rounded focus:outline-none`}
          onClick={() => props.handleChangeFilter("active")}
        >
          Active
        </button>
        <button
          className={`mr-1 px-1 border border-${
            props.filter === "complete"
              ? "gray-400"
              : "transparent hover:border-gray-200"
          } rounded focus:outline-none`}
          onClick={() => props.handleChangeFilter("complete")}
        >
          Compelte
        </button>
      </div>
      <button
        className={`px-2 border border-transparent hover:border-gray-400 rounded opacity-${
          props.list.some((item) => item.done === true) ? "100" : "0"
        } `}
        onClick={props.handleClearComplete}
      >
        Clear completed
      </button>
    </div>
  );
}
export default FilterContain;
