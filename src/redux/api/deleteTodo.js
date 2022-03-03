import { removeTodo } from "../slices/todos";

const deleteTodo = (title) => {
	return async (dispatch, getState) => {
		try {
			const res = await fetch(
				`https://todo-rest-api-node.herokuapp.com/todos/${title}`,
				{
					headers: {
						"Content-Type": "application/json",
						authorization: getState().user.token,
					},
					method: "DELETE",
				}
			);
			if (res.status === 204) {
				dispatch(removeTodo(title));
			}
		} catch (err) {}
	};
};

export default deleteTodo;
