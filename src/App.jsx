import React from "react";
import "./index.css";
import logo from "./logo.png";
import RandomQuotes from "./Component/RDQuotesMachine/randomQuotes";
import CounterContain from "./Component/Counter/counterCtn";
import TodoList from "./Component/To-Do-App/todoContain";
import Calculator from "./Component/calculator/calculator";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="min-h-full">
      <Router>
        <header className="App-header">
          <nav className="flex bg-gray-800 text-white justify-center text-2xl ">
            <ul className="flex w-full items-center">
              <li className="mr-auto">
                <Link to="/">
                  <img src={logo} alt="Home" className="w-32 p-2" />
                </Link>
              </li>
              <li className="px-4 py-1 mr-3">
                <Link to="/">Home</Link>
              </li>
              <li className="px-4 py-1 ">
                <Link to="/counter">Counter</Link>
              </li>
              <li className="px-4 py-1">
                <Link to="/randomQuotes">Random quote machine</Link>
              </li>
              <li className="px-4 py-1">
                <Link to="/calculator">Calculator</Link>
              </li>
              <li className="px-4 py-1 mr-auto">
                <Link to="/todolist">Todo list</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <section
            style={{ background: "#f0e4d7", zIndex: "-1" }}
            className="py-10 min-h-screen w-full absolute top-0 left-0 pt-28 "
          >
            <Route exact path="/">
              <h1 className="text-center font-medium text-5xl">
                This is Le Khanh Demo, pls enjoy it!
              </h1>
            </Route>
            <Route path="/counter">
              <CounterContain />
            </Route>
            <Route path="/randomQuotes">
              <RandomQuotes />
            </Route>
            <Route path="/calculator">
              <Calculator />
            </Route>
            <Route path="/todolist">
              <TodoList />
            </Route>
          </section>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
