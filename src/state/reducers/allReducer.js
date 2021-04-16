import cccCounter from "./counter/cccCounter";
import fncCounter from "./counter/fncCounter";
import quotes from "./RDQuotesMachine/quotes";
import { combineReducers } from "redux";

const allReducer = combineReducers({ cccCounter, fncCounter, quotes });
export default allReducer;
