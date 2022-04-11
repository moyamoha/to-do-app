import axios from "axios";

import { setTodos } from "../slices/todos";

const getUserTodos = () => {
	return async (dispatch, getState) => {
		const token = getState().user.token;
		try {
			const res = await axios.get("/todos/", {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			if (res.data && res.data.data) {
				dispatch(setTodos(res.data.data));
			}
		} catch (err) {}
	};
};

export default getUserTodos;
