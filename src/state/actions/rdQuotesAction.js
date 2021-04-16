import * as act from "../../Constant/rdQuotes";

export const updateQuotes = (quotes) => ({
  type: act.UPDATE_QUOTES,
  payload: {
    quotes,
  },
});
