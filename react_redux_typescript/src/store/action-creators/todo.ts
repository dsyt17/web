import { Dispatch } from "redux";
import axios from "axios";
import { TodoAction, TodoActionsTypes } from "../../types/todo";

export const fetchTodos = (page = 1, limit = 5) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionsTypes.FETCH_TODOS });
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`
      );
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: TodoActionsTypes.FETCH_TODOS_ERROR,
        payload: String(error),
      });
    }
  };
};

export const setTodoPage = (page: number) => {
  return { type: TodoActionsTypes.SET_TODO_PAGE, payload: page };
};
