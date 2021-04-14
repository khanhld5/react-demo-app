import React from "react";
function ToDoList(props) {
  return (
    <ul>
      <li>
        <input type="checkbox" hidden />
        <label>some text</label>
        <button>x</button>
        <input type="text" className="edit" />
      </li>
    </ul>
  );
}
export default ToDoList;
