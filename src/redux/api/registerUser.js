import axios from "axios";

import { setError } from "../slices/user";
import loginUser from "./loginUser";

const registerUser = (formData) => {
	return async (dispatch, getState) => {
		try {
			const response = await axios.post("/auth/signup", formData);
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
				dispatch(setError(response.data.error));
			}
		} catch (err) {}
	};
};

export default registerUser;
