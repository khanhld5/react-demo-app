import React, { Component } from "react";
import { connect } from "react-redux";
import {
  handleCCIncrease,
  handleCCDecrease,
  handleCCReset,
} from "../../state/actions/counterActions";

class CounterCCC extends Component {
  render() {
    const count = this.props.count;
    const btnStyle = `inline-block transition duration-300 px-6 py-3 rounded-md font-bold text-2xl shadow-lg hover:shadow-2xl  focus:outline-none hover:opacity-80 ${
      count < 10
        ? "bg-gradient-to-br from-yellow-200 to-green-200"
        : count < 50
        ? "bg-gradient-to-bl from-red-200 to-indigo-300"
        : "bg-gradient-to-tr from-blue-200 to-purple-300"
    }`;

    const counterStyle = `inline-block transition duration-300 cursor-pointer px-16 py-10 rounded-md text-white font-bold text-9xl shadow-xl hover:shadow-2xl ${
      count < 10
        ? "bg-gradient-to-br from-blue-200 to-green-200"
        : count < 50
        ? "bg-gradient-to-bl from-red-200 to-indigo-300"
        : "bg-gradient-to-tr from-yellow-200 to-purple-300"
    }`;
    return (
      <aside className="displayCounter w-1/2 m-auto text-center transition duration-300">
        {this.props.children}
        <h3 className="mb-16">
          <span
            className={counterStyle}
            onClick={() => {
              if (count) this.props.handleCCReset();
            }}
          >
            {count}
          </span>
        </h3>
        <div className="btn-Contain flex text-white justify-center">
          <button
            onClick={() => {
              if (count) this.props.handleCCDecrease();
            }}
            className={btnStyle}
          >
            -
          </button>
          <button
            onClick={() => this.props.handleCCIncrease()}
            className={btnStyle + " ml-16"}
          >
            +
          </button>
        </div>
      </aside>
    );
  }
}

export default connect(
  (state) => ({
    count: state.cccCounter.count,
  }),
  {
    handleCCIncrease,
    handleCCDecrease,
    handleCCReset,
  }
)(CounterCCC);
