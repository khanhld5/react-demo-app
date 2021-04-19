import * as act from "../../../Constant/todo";
import * as filter from "../../../Constant/filter";
import produce from "immer";

const initailState = {
  list: JSON.parse(localStorage.getItem("list")) || [],
  allDone: JSON.parse(localStorage.getItem("allDone")) || false,
  filter: filter.ALL,
};

const todoListReducer = produce((draft, action) => {
  const payload = action.payload;
  const checkAllDone = (list) => {
    let allDone = false;
    if (list.length && list.every((item) => item.done === true))
      return (allDone = true);
    return allDone;
  };

  switch (action.type) {
    case act.ADD_TODO:
      {
        let id = 0;
        const title = payload.title;
        const list = draft.list;
        if (list.length) id = list[list.length - 1].id + 1;
        const todo = { id: id, done: false, title };
        list.push(todo);
        draft.allDone = false;
      }
      break;

    case act.TODO_DONE:
      {
        const id = payload.id;
        const list = draft.list;
        for (let todo of list) {
          if (todo.id === id) {
            todo.done = !todo.done;
            break;
          }
        }
        draft.allDone = checkAllDone(list);
      }
      break;

    case act.TODO_ALLDONE:
      {
        const list = draft.list;
        const allDone = draft.allDone;
        if (allDone) {
          for (let i = 0; i < list.length; i++) {
            list[i].done = false;
          }
          draft.allDone = false;
        } else {
          for (let i = 0; i < list.length; i++) {
            list[i].done = true;
          }
          draft.allDone = true;
        }
      }
      break;

    case act.EDIT_TODO:
      {
        const todo = payload.todo;
        const id = todo.id;
        const title = todo.title;
        const list = draft.list;
        for (let todo of list) {
          if (todo.id === id) {
            todo.title = title;
            break;
          }
        }
      }
      break;

    case act.REMOVE_TODO:
      {
        const id = payload.id;
        const newList = draft.list.filter((todo) => todo.id !== id);
        draft.allDone = checkAllDone(newList);
        draft.list = newList;
      }
      break;

    case act.REMOVE_COMPLETE_TODO:
      {
        const newlist = draft.list.filter((todo) => todo.done === false);
        draft.allDone = false;
        draft.list = newlist;
      }
      break;

    case act.FILTER_ALL:
      draft.filter = filter.ALL;
      break;
    case act.FILTER_ACTIVE:
      draft.filter = filter.ACTIVE;
      break;
    case act.FILTER_COMPLETE:
      draft.filter = filter.COMPLETE;
      break;
    default:
  }
}, initailState);
export default todoListReducer;
