import * as act from "../../../Constant/counter";

const counterReducer = (state = 0, action) => {
    switch(action.type){
        case act.CC_INCREASE:
            return state + 1
        case act.CC_DECREASE:
            return state ? state - 1: state
        case act.CC_RESET:
            return 0;
        default :
         return state
    }
}

export default counterReducer