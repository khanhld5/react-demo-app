import * as act from '../../../Constant/counter';

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case act.FN_INCREASE:
      return state + 1;
    case act.FN_DECREASE:
      return state ? state - 1 : state;
    case act.FN_RESET:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
