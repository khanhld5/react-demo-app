import React from "react";

const ButtonCtn = React.memo(({ ...props }) => {
  const hanldeBtnAnimation = (e) => {
    const btn = e.currentTarget;
    btn.classList.add("movement");
  };
  const removeBtnAnimation = (e) => {
    const btn = e.currentTarget;
    btn.classList.remove("movement");
  };
  return (
    <section id="btn-contain">
      <div className="wrp-button grid grid-rows-4 grid-cols-4 grid-flow-rows">
        <button
          type="button"
          className="btn btn-clear col-span-2 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleRemoveCalc();
            hanldeBtnAnimation(e);
          }}
        >
          AC
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression("/");
            hanldeBtnAnimation(e);
          }}
        >
          /
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression("*");
            hanldeBtnAnimation(e);
          }}
        >
          x
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression(7);
            hanldeBtnAnimation(e);
          }}
        >
          7
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression(8);
            hanldeBtnAnimation(e);
          }}
        >
          8
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression(9);
            hanldeBtnAnimation(e);
          }}
        >
          9
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression("-");
            hanldeBtnAnimation(e);
          }}
        >
          -
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression(4);
            hanldeBtnAnimation(e);
          }}
        >
          4
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression(5);
            hanldeBtnAnimation(e);
          }}
        >
          5
        </button>
        <button
          type="button"
          className="btn btn-val col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression(6);
            hanldeBtnAnimation(e);
          }}
        >
          6
        </button>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleAddEpression("+");
            hanldeBtnAnimation(e);
          }}
        >
          +
        </button>
        <div className=" grid grid-rows-2 grid-cols-3 grid-flow-rows col-span-3 row-span-2">
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onAnimationEnd={removeBtnAnimation}
            onClick={(e) => {
              props.handleAddEpression(1);
              hanldeBtnAnimation(e);
            }}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onAnimationEnd={removeBtnAnimation}
            onClick={(e) => {
              props.handleAddEpression(2);
              hanldeBtnAnimation(e);
            }}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onAnimationEnd={removeBtnAnimation}
            onClick={(e) => {
              props.handleAddEpression(3);
              hanldeBtnAnimation(e);
            }}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-zero col-span-2 row-span-2 rounded-3xl"
            onAnimationEnd={removeBtnAnimation}
            onClick={(e) => {
              props.handleAddEpression(0);
              hanldeBtnAnimation(e);
            }}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-val col-span-1 row-span-2 rounded-3xl"
            onAnimationEnd={removeBtnAnimation}
            onClick={(e) => {
              props.handleAddEpression(".");
              hanldeBtnAnimation(e);
            }}
          >
            .
          </button>
        </div>
        <button
          type="button"
          className="btn btn-action col-span-1 row-span-2 rounded-3xl"
          onAnimationEnd={removeBtnAnimation}
          onClick={(e) => {
            props.handleCalcResult();
            hanldeBtnAnimation(e);
          }}
        >
          =
        </button>
      </div>
    </section>
  );
});
export default ButtonCtn;
