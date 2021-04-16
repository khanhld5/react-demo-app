import * as act from "../../Constant/todo";

export const handleUpdateList = (list, allDone) => ({
  type: act.UPDATE_TODO_LIST,
  payload: {
    list,
    allDone,
  },
});
// export const removeSingleTodo = (list) => ({
//   type: act.REMOVE_SINGLE_TODO,
// });
export const handleRemoveComplete = (list) => ({
  type: act.REMOVE_COMPLETE_TODO,
  payload: {
    list,
    allDone: false,
  },
});
