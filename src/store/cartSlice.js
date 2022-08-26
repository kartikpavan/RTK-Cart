import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		add: (state, action) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.push(action.payload);
		},
		remove: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { add, remove } = cartSlice.actions; // createSlice creates actions
export default cartSlice.reducer; // and as well as provide us with reducers
