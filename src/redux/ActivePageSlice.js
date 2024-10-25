import { createSlice } from "@reduxjs/toolkit";

const activePageSlice = createSlice({
    name: 'activePage',
    initialState: {
        activePage: 'chat',
        chattingPage: 'home'
    },
    reducers: {
        setActivePage: (state, action) => {
            state.activePage = action.payload;
        },
        setChattingPage: (state, action) => {
            state.chattingPage = action.payload;
        },

    }
})

export const { setActivePage, setChattingPage } = activePageSlice.actions;

export default activePageSlice.reducer;