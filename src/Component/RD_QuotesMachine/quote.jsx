import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

const Quote = (props) => {
  const color = props.color;
  return (
    <div
      style={color}
      className={`mb-3 p-8 pb-4 rounded transition-all duration-300 text-white ${
        props.opacity ? "fade" : ""
      }`}
    >
      <h1 className="mb-4 ">
        <span className="text-2xl font-medium">
          <FontAwesomeIcon icon={faQuoteLeft} size="1x" />
        </span>{" "}
        <span className="ml-3 text-xl">{props.quote}</span>
      </h1>
      <h2 className="text-right">- {props.author}</h2>
    </div>
  );
};

export default Quote;
