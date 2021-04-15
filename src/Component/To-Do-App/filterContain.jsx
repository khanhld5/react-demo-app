import React from "react";
function FilterContain(props) {
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
    <div className="filter_contain">
      <p>
        <span>{taskCount(props.list)}</span>
        <span>items left</span>
      </p>
      <div className="filter">
        <button onClick={() => props.handleChangeFilter("all")}>All</button>
        <button onClick={() => props.handleChangeFilter("active")}>
          Active
        </button>
        <button onClick={() => props.handleChangeFilter("complete")}>
          Compelte
        </button>
        <button onClick={props.handleClearComplete}>Clear completed</button>
      </div>
    </div>
  );
}
export default FilterContain;
