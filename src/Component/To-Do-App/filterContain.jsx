import React from "react";
function FilterContain(props) {
  return (
    <div className="filter_contain">
      <p>
        <span>3</span>
        <span>items left</span>
      </p>
      <div className="filter">
        <button>All</button>
        <button>Active</button>
        <button>Compelte</button>
        <button>Clear completed</button>
      </div>
    </div>
  );
}
export default FilterContain;
