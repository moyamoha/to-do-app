import { addTodo } from "../slices/todos";

const createTodo = (todo) => {
	return async (dispatch, getState) => {
		try {
			const res = await fetch(
				`https://todo-rest-api-node.herokuapp.com/todos/`,
				{
					headers: {
						"Content-Type": "application/json",
						authorization: getState().user.token,
					},
					method: "POST",
					body: JSON.stringify(todo),
				}
			);
			if (res.status === 201) {
				const data = await res.json();
				dispatch(addTodo(data));
			}
		} catch (err) {}
	};
};

export default createTodo;
