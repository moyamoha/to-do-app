import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		loggedIn: false,
		username: "",
		token: "",
		error: "",
		loggingIn: false,
	},
	reducers: {
		login: (state, action) => {
			state.loggedIn = true;
			state.username = action.payload.username;
			state.token = action.payload.token;
			state.error = "";
			state.loggingIn = false;
		},
		logout: (state) => {
			state.loggedIn = false;
			state.username = "";
			state.token = "";
		},
		setError: (state, action) => {
			state.error = action.payload;
		},
		setLogging: (state) => {
			state.loggingIn = true;
		},
	},
});

export const { login, logout, setError, setLogging } = userSlice.actions;
export default userSlice.reducer;
