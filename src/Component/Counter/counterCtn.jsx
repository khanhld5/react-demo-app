import React, { Fragment } from "react";
import CounterFnC from "./counterFnC";
import CounterCCC from "./counterCCC";
const CounterContain = (props) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-center mb-10 text-gray-700">
        Counter app
      </h1>
      <div className="flex">
        <CounterFnC>
          <h2 className="font-bold text-2xl mb-5 text-gray-500">
            <i>Counter app with functional component</i>
          </h2>
        </CounterFnC>

        <CounterCCC>
          <h2 className="font-bold text-2xl mb-5 text-gray-500">
            <i>Counter app with class component</i>
          </h2>
        </CounterCCC>
      </div>
    </>
  );
};

export default CounterContain;
