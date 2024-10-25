import { configureStore } from '@reduxjs/toolkit'
import ChatReduser from './ChatSlice';
import UserReduser from './UserSlice';
import activePageReducer from './ActivePageSlice';
import socketioReducer from './SocketSlice'

const store = configureStore({
    reducer: {
        chat: ChatReduser,
        user: UserReduser,
        activePage: activePageReducer,
        socket: socketioReducer
    },

})

export default store;