import { changeTodo } from "../slices/todos";

const editTodo = (oldTitle, todo) => {
	return async (dispatch, getState) => {
		try {
			const res = await fetch(
				`https://todo-rest-api-node.herokuapp.com/todos/${oldTitle}`,
				{
					headers: {
						"Content-Type": "application/json",
						authorization: getState().user.token,
					},
					method: "PUT",
					body: JSON.stringify(todo),
				}
			);
			const data = await res.json();
			if (res.status === 200) {
				dispatch(changeTodo({ oldTitle, data }));
			}
		} catch (err) {}
	};
};

export default editTodo;
