import * as act from "../../Constant/counter";
//ccc counter
export const ccIncrease = () => ({
    type: act.CC_INCREASE
})
export const ccDecrease = () => ({
    type: act.CC_DECREASE
})
export const ccReset = () => ({
    type: act.CC_RESET
})
//fnc counter
export const fnIncrease = () => ({
    type: act.FN_INCREASE
})
export const fnDecrease = () => ({
    type: act.FN_DECREASE
})
export const fnReset = () => ({
    type: act.FN_RESET
})