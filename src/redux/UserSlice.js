import { createSlice } from '@reduxjs/toolkit'

const userslice = createSlice({
    name: 'user',
    initialState: {
        userData: {},
        selectedUser: null
    },
    reducers: {
        // we add here
        setUserData: (state, action) => {
            state.userData = action.payload;
        },
        setSelectedUser: (state, action) => {
            state.selectedUser = action.payload;
        },
    }
})

export const { setUserData, setSelectedUser } = userslice.actions;

export default userslice.reducer;