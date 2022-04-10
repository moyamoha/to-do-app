import axios from "axios";

import { removeTodo } from "../slices/todos";

const deleteTodo = (id) => {
	return async (dispatch, getState) => {
		const token = getState().user.token;
		try {
			const res = await axios.delete("/todos/" + id, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (res.status === 204) {
				dispatch(removeTodo(id));
			}
		} catch (err) {}
	};
};

export default deleteTodo;
