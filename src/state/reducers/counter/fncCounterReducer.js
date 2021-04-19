import * as act from "../../../Constant/counter";
import produce from "immer";

const counterReducer = produce(
  (draft, action) => {
    switch (action.type) {
      case act.FN_INCREASE:
        draft.count += 1;
        break;
      case act.FN_DECREASE:
        if (draft.count) draft.count -= 1;
        break;
      case act.FN_RESET:
        draft.count = 0;
        break;
      default:
    }
  },
  { count: 0 }
);

export default counterReducer;
