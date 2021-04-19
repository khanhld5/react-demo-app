import * as act from "../../Constant/todo";

const storeAllDone = (allDone) => {
  localStorage.setItem("allDone", JSON.stringify(allDone));
};

//action of input todo
export const handleAddTodo = (title) => (dispatch, getState) => {
  dispatch({
    type: act.ADD_TODO,
    payload: {
      title,
    },
  });
  storeAllDone(getState().todoList.allDone);
};

export const handleTodoDone = (id) => (dispatch, getState) => {
  dispatch({
    type: act.TODO_DONE,
    payload: {
      id,
    },
  });
  storeAllDone(getState().todoList.allDone);
};

export const handleAllTodoDone = () => (dispatch, getState) => {
  dispatch({
    type: act.TODO_ALLDONE,
  });
  storeAllDone(getState().todoList.allDone);
};

//action of todo item
export const handleEditTodo = (todo) => (dispatch, getState) => {
  dispatch({
    type: act.EDIT_TODO,
    payload: {
      todo,
    },
  });
  storeAllDone(getState().todoList.allDone);
};

export const handleTodoRemove = (id) => (dispatch, getState) => {
  dispatch({
    type: act.REMOVE_TODO,
    payload: {
      id,
    },
  });
  storeAllDone(getState().todoList.allDone);
};

//action of filter
export const handleRemoveComplete = () => (dispatch, getState) => {
  dispatch({
    type: act.REMOVE_COMPLETE_TODO,
  });
  storeAllDone(getState().todoList.allDone);
};

export const handleFilterToAll = () => ({
  type: act.FILTER_ALL,
});

export const handleFilterToActive = () => ({
  type: act.FILTER_ACTIVE,
});

export const handleFilterToComplete = () => ({
  type: act.FILTER_COMPLETE,
});
