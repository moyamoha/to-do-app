import axios from "axios";

import { addTodo } from "../slices/todos";

const createTodo = (todo) => {
	return async (dispatch, getState) => {
		const token = getState().user.token;
		try {
			const res = await axios.post("/todos/", todo, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (res.status === 201) {
				dispatch(addTodo(res.data));
			}
		} catch (err) {}
	};
};

export default createTodo;
