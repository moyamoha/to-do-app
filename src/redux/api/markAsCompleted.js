import { completeTodo } from "../slices/todos";

const complete = (title) => {
	return async (dispatch, getState) => {
		try {
			const res = await fetch(
				`https://todo-rest-api-node.herokuapp.com/todos/markAsDone/${title}`,
				{
					headers: {
						"Content-Type": "application/json",
						authorization: getState().user.token,
					},
					method: "PATCH",
				}
			);
			if (res.status === 200) {
				dispatch(completeTodo(title));
			}
		} catch (err) {}
	};
};

export default complete;
