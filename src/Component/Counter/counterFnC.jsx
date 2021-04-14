import React, { useState } from "react";

function Counter(props) {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    count <= 0 ? setCount(0) : setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  const btnStyle = `inline-block transition duration-300 px-6 py-3 rounded-md font-bold text-2xl shadow-lg hover:shadow-2xl bg-gradient-to-${
    count < 10 ? "br" : count < 50 ? "bl" : "tr"
  } from-${
    count < 10 ? "yellow-200" : count < 50 ? "red-200" : "blue-200"
  } to-${
    count < 10 ? "green-200" : count < 50 ? "indigo-300" : "purple-300"
  } focus:outline-none hover:opacity-80`;

  const counterStyle = `inline-block transition duration-300 cursor-pointer px-16 py-10 rounded-md text-white font-bold text-9xl shadow-xl hover:shadow-2xl bg-gradient-to-${
    count < 10 ? "br" : count < 50 ? "bl" : "tr"
  } from-${
    count < 10 ? "blue-200" : count < 50 ? "red-200" : "yellow-200"
  } to-${count < 10 ? "green-200" : count < 50 ? "indigo-300" : "purple-300"}`;

  return (
    <aside className="displayCounter w-1/2 m-auto text-center transition duration-300">
      {props.children}
      <h3 className="mb-16">
        <span className={counterStyle} onClick={handleReset}>
          {count}
        </span>
      </h3>
      <div className="btn-Contain flex text-white justify-center">
        <button onClick={handleDecrease} className={btnStyle}>
          -
        </button>
        <button onClick={handleIncrease} className={btnStyle + " ml-16"}>
          +
        </button>
      </div>
    </aside>
  );
}

export default Counter;
