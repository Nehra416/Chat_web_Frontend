import ChatBar from '@/components/mainUi/ChatBar'
import Chating from '@/components/mainUi/Chating';
import Home from '@/components/mainUi/Home';
import MenuBar from '@/components/mainUi/MenuBar'
import Profile from '@/components/mainUi/Profile';
import GetAllTypeChats from '@/hooks/GetAllTypeChats';
import React from 'react'
import { useSelector } from 'react-redux';

const MainPage = () => {
    GetAllTypeChats();
    const { chattingPage } = useSelector(store => store.activePage)
    return (
        <div className='flex gap-3'>
            <MenuBar />
            <ChatBar />
            {
                chattingPage === 'home' ? <Home /> :
                    chattingPage === 'chat' ? <Chating /> :
                        chattingPage === 'profile' ? <Profile /> : null
            }
            {/* <Chating /> */}
        </div>
    )
}

export default MainPage