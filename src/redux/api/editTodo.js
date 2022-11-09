import axios from "axios";

import { changeTodo } from "../slices/todos";

const editTodo = (id, todo) => {
  return async (dispatch, getState) => {
    const token = getState().user.token;
    try {
      const res = await axios.put("/todos/" + id, todo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status === 200) {
        dispatch(changeTodo({ id: id, data: res.data }));
      }
    } catch (err) {}
  };
};

export default editTodo;
