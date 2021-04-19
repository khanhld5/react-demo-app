import React from "react";
import ToDoList from "./toDoList";
import FilterContain from "./filterContain";
import InputField from "./inputField";

const TodoContain = () => {
  return (
    <div className="display_todo text-center">
      <h1 className="text-7xl text-gray-500 select-none mb-5">Todos</h1>
      <section className="w-2/5 m-auto bg-white rounded shadow-ct-1">
        <InputField />
        <ToDoList />
        <FilterContain />
      </section>
    </div>
  );
};

export default TodoContain;
