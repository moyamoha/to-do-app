import { login, setError } from "../slices/user";

const loginUser = (credentials) => {
	return async (dispatch, getState) => {
		try {
			const res = await fetch(
				"https://todo-rest-api-node.herokuapp.com/auth/login",
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						...credentials,
					}),
				}
			);
			if (res.status !== 200) {
				dispatch(setError("Please check your credintials"));
			}
			const data = await res.json();
			const username = JSON.parse(
				window.atob(data.token.split(".")[1])
			).username;
			dispatch(
				login({
					username: username,
					token: "Bearer " + data.token,
				})
			);
		} catch (err) {}
	};
};

export default loginUser;
