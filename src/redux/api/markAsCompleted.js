import axios from "axios";
import { completeTodo } from "../slices/todos";

const complete = (id) => {
	return async (dispatch, getState) => {
		const token = getState().user.token;
		try {
			const res = await axios.patch(
				"/todos/markAsDone/" + id,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (res.status === 200) {
				dispatch(completeTodo(id));
			}
		} catch (err) {}
	};
};

export default complete;
