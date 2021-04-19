import * as act from "../../../Constant/todo";
import * as filter from "../../../Constant/filter";

const initailState = {
  list: JSON.parse(localStorage.getItem("list")) || [],
  allDone: JSON.parse(localStorage.getItem("allDone")) || false,
  filter: filter.ALL,
};

const todoListReducer = (state = initailState, action) => {
  const payload = action.payload;
  const checkAllDone = (list) => {
    let allDone = false;
    if (list.every((item) => item.done === true)) return (allDone = true);
    return allDone;
  };

  switch (action.type) {
    // case act.INITIAL_TODO_LIST: {
    //   const list = payload.list;
    //   return { ...state, list };
    // }

    case act.ADD_TODO: {
      let id = 0;
      const title = payload.title;
      const stateList = state.list;
      const allDone = false;
      if (stateList.length) id = stateList[stateList.length - 1].id + 1;
      const todo = { id: id, done: false, title };
      return { ...state, list: [...stateList, todo], allDone };
    }

    case act.TODO_DONE: {
      // const todo = payload.todo;
      const id = payload.id;
      const stateList = state.list;
      const newList = [...stateList];
      // need test
      for (let todo of newList) {
        if (todo.id === id) {
          todo.done = !todo.done;
          break;
        }
      }
      const allDone = checkAllDone(stateList);
      return { ...state, list: newList, allDone };
    }

    case act.TODO_ALLDONE: {
      const stateList = state.list;
      const newList = [...stateList];
      const stateAllDone = state.allDone;
      if (stateAllDone) {
        for (let i = 0; i < newList.length; i++) {
          newList[i].done = false;
        }
        const allDone = false;
        return { ...state, list: newList, allDone };
      } else {
        for (let i = 0; i < stateList.length; i++) {
          newList[i].done = true;
        }
        const allDone = true;
        return { ...state, list: newList, allDone };
      }
    }

    case act.EDIT_TODO: {
      const todo = payload.todo;
      const id = todo.id;
      const title = todo.title;
      const stateList = state.list;
      const newList = [...stateList];

      for (let todo of newList) {
        if (todo.id === id) {
          todo.title = title;
          break;
        }
      }
      return { ...state, list: newList };
    }

    case act.REMOVE_TODO: {
      const id = payload.id;
      const stateList = state.list;
      const newList = stateList.filter((todo) => todo.id !== id);
      const allDone = checkAllDone(newList);
      return { ...state, list: newList, allDone };
    }

    case act.REMOVE_COMPLETE_TODO: {
      const stateList = state.list;
      const newList = stateList.filter((todo) => todo.done === false);
      return { ...state, list: newList, allDone: false };
    }

    // case act.INITIAL_ALLDONE: {
    //   const allDone = payload.allDone;
    //   return { ...state, allDone };
    // }

    // might not need?
    // case act.ALLDONE_TRUE: {
    //   return { allDone: true };
    // }

    // case act.ALLDONE_FALSE: {
    //   return { allDone: false };
    // }

    case act.FILTER_ALL: {
      return { ...state, filter: filter.ALL };
    }
    case act.FILTER_ACTIVE: {
      return { ...state, filter: filter.ACTIVE };
    }
    case act.FILTER_COMPLETE: {
      return { ...state, filter: filter.COMPLETE };
    }

    default:
      return state;
  }
};
export default todoListReducer;
