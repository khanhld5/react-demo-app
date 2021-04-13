import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/randomQuotes">Random quote machine</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
