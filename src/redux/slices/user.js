import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		loggedIn: false,
		username: "",
		token: "",
		error: "",
	},
	reducers: {
		login: (state, action) => {
			state.loggedIn = true;
			state.username = action.payload.username;
			state.token = action.payload.token;
			state.error = "";
		},
		logout: (state) => {
			state.loggedIn = false;
			state.username = "";
			state.token = "";
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { login, logout, setError } = userSlice.actions;
export default userSlice.reducer;
