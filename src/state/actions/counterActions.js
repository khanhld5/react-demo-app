import * as act from "../../Constant/counter";
//ccc counter
export const handleCCIncrease = () => ({
  type: act.CC_INCREASE,
});
export const handleCCDecrease = () => ({
  type: act.CC_DECREASE,
});
export const handleCCReset = () => ({
  type: act.CC_RESET,
});
//fnc counter
export const handleFnIncrease = () => ({
  type: act.FN_INCREASE,
});
export const handleFnDecrease = () => ({
  type: act.FN_DECREASE,
});
export const handleFnReset = () => ({
  type: act.FN_RESET,
});
