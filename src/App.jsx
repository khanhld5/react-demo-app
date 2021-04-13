import React from "react";
import "./index.css";
import logo from "./logo.png";
import RandomQuotes from "./Component/RD_QuotesMachine/randomQuotes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Router>
        <nav className="flex bg-gray-800 text-white mb-10 justify-center text-2xl">
          <ul className="flex">
            <li>
              <Link to="/">
                <img src={logo} alt="Home" />
              </Link>
            </li>
            <li className="px-4 py-1 mr-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-4 py-1 ">
              <Link to="/randomQuotes">Random quote machine</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <div className="container m-auto item-center">
            <Route exact path="/">
              <h1 className="text-center font-medium text-5xl">Home</h1>
            </Route>
            <Route path="/randomQuotes">
              <RandomQuotes />
            </Route>
          </div>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
