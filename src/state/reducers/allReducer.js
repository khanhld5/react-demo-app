import cccCounter from "./counter/cccCounterReducer";
import fncCounter from "./counter/fncCounterReducer";
import quotes from "./rdQuotesMachine/quotesReducer";
import todoList from "./todoList/todoListReducer";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  cccCounter,
  fncCounter,
  quotes,
  todoList,
});
export default allReducer;
