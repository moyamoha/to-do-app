import axios from "axios";

import { login, setError } from "../slices/user";

const loginUser = (credentials) => {
	return async (dispatch, getState) => {
		try {
			const res = await axios.post("/auth/login", credentials);
			if (res.status === 200) {
				if (res.data.error) {
					dispatch(setError("Please check your credintials"));
					return;
				}
				const username = JSON.parse(
					window.atob(res.data.token.split(".")[1])
				).username;
				dispatch(
					login({
						username: username,
						token: res.data.token,
					})
				);
			}
		} catch (err) {}
	};
};

export default loginUser;
