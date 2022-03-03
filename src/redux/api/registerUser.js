import { setError } from "../slices/user";
import loginUser from "./loginUser";

const registerUser = (formData) => {
	return async (dispatch, getState) => {
		try {
			const response = await fetch(
				"https://todo-rest-api-node.herokuapp.com/auth/signup",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(formData),
				}
			);
			if (response.status === 201) {
				try {
					dispatch(
						loginUser({
							username: formData.username,
							password: formData.password1,
						})
					);
				} catch (err) {}
			} else {
				const data = await response.json();
				dispatch(setError(data.error));
			}
		} catch (err) {}
	};
};

export default registerUser;
