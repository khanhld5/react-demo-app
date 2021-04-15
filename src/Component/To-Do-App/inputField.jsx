import React from "react";

function InputField(props) {
  return (
    <form className="input-field" onSubmit={props.handleSubmit}>
      <button type="button" onClick={props.handleAllDone}>
        all checked
      </button>
      <input
        type="text"
        name="todo"
        id="todoInput"
        placeholder="What needs to be done?"
        onChange={props.handleInputChange}
        value={props.value}
      />
    </form>
  );
}
export default InputField;
