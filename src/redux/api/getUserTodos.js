import { setTodos } from "../slices/todos";

const getUserTodos = () => {
	return async (dispatch, getState) => {
		try {
			const res = await fetch(
				"https://todo-rest-api-node.herokuapp.com/todos/",
				{
					headers: {
						"Content-Type": "application/json",
						authorization: getState().user.token,
					},
					method: "GET",
				}
			);
			const data = await res.json();
			if (data && data.data) {
				dispatch(setTodos(data.data));
			}
		} catch (err) {}
	};
};

export default getUserTodos;
