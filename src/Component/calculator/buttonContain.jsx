import React from "react";

export default function ButtonCtn({ ...props }) {
  return (
    <section id="btn-contain">
      <div className="wrp-button grid grid-rows-4 grid-cols-4 grid-flow-rows">
        <button
          type="button"
          className="btn btn-clear col-span-2 row-span-2 rounded-3xl"
          onClick={props.handleRemoveCalc}
        >
          AC
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression("/")}
        >
          /
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression("*")}
        >
          x
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression(7)}
        >
          7
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression(8)}
        >
          8
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression(9)}
        >
          9
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression("-")}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression(4)}
        >
          4
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression(5)}
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression(6)}
        >
          6
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onClick={() => props.handleAddEpression("+")}
        >
          +
        </button>
        <div className=" grid grid-rows-2 grid-cols-3 grid-flow-rows col-span-3 row-span-2">
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onClick={() => props.handleAddEpression(1)}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onClick={() => props.handleAddEpression(2)}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onClick={() => props.handleAddEpression(3)}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-zero col-span-2 row-span-2 rounded-3xl"
            onClick={() => props.handleAddEpression(0)}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onClick={() => props.handleAddEpression(".")}
          >
            .
          </button>
        </div>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onClick={props.handleCalcResult}
        >
          =
        </button>
      </div>
    </section>
  );
}
