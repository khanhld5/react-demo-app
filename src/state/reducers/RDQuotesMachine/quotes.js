import * as act from "../../../Constant/rdQuotes";

const rdQuotesReducer = (state = [], action) => {
  switch (action.type) {
    case act.UPDATE_QUOTES:
      return action.payload.quotes;
    default:
      return state;
  }
};
export default rdQuotesReducer;
