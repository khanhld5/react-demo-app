import * as act from "../../../Constant/todo";

const todoListReducer = (state = {}, action) => {
  const payload = action.payload;
  switch (action.type) {
    case act.UPDATE_TODO_LIST: {
      const list = payload.list;
      const allDone = payload.allDone;
      return { list, allDone };
    }

    case act.REMOVE_COMPLETE_TODO: {
      const list = payload.list;
      const allDone = payload.allDone;
      return { list, allDone };
    }

    default:
      return state;
  }
};
export default todoListReducer;
