import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        userToggle: false,
        userData: []
    },
    reducers: {
        setUserData: (state, actions) => {
            state.userData = actions.payload
        },
        showUser: (state) => {
            state.userToggle = !state.userToggle
        }
    }
})

export const { setUserData, showUser } = userSlice.actions;
export default userSlice.reducer;