import { createSlice } from '@reduxjs/toolkit'

const chatslice = createSlice({
    name: 'chat',
    initialState: {
        friendList: [],
        allUsers: [],
        conversation: []
    },
    reducers: {
        // we add here
        setFriendsList: (state, action) => {
            state.friendList = action.payload;
        },
        setAllUsers: (state, action) => {
            state.allUsers = action.payload;
        },
        setConversation: (state, action) => {
            state.conversation = action.payload;
        },
    }
})

export const { setFriendsList, setAllUsers, setConversation } = chatslice.actions;

export default chatslice.reducer;