import axios from "axios";
import { takeTodoUnderWork } from "../slices/todos";

const startTodo = (id) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    try {
      const res = await axios.patch(
        "/todos/markAsStarted/" + id,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch(takeTodoUnderWork(id));
    } catch (err) {}
  };
};

export default startTodo;
