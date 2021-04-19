import * as act from "../../../Constant/counter";
import produce from "immer";

const counterReducer = produce(
  (draft, action) => {
    switch (action.type) {
      case act.CC_INCREASE: {
        draft.count += 1;
        break;
      }
      case act.CC_DECREASE:
        if (draft.count) draft.count -= 1;
        break;
      case act.CC_RESET:
        draft.count = 0;
        break;
      default:
    }
  },
  { count: 0 }
);

export default counterReducer;
