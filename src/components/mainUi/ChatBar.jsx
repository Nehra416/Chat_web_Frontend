import React, { useState } from 'react'
import { MdOpenInNew } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import UserChats from './UserChats';
import AllUsers from './AllUsers';
import { useSelector } from 'react-redux';
import axios from 'axios';


const ChatBar = () => {
    const { activePage } = useSelector(store => store.activePage);
    const [search, setSearch] = useState('');
    const [users, setUsers] = useState([]);

    const handleSearch = async (e) => {
        setSearch(e.target.value)
    }

    return (
        <div className='h-[96vh] w-[35vw] rounded-xl bg-white my-[2vh] overflow-hidden'>

            {/* Top fixed div for logo and search */}
            <div className='sticky top-0 right-0 left-0 bg-white'>
                <section className='flex justify-between items-center px-5 py-3'>
                    <span className='text-2xl font-medium'>Chat</span>
                    <span className='bg-[#F5F5F5] rounded-full p-1 cursor-pointer'><MdOpenInNew size={'20px'} /></span>
                </section>

                <section className='bg-[#F5F5F5] py-2 mx-5 px-3 rounded-3xl flex items-center gap-2'>
                    <IoSearch size={'20px'} className='text-gray-400' />
                    <input type="text" onChange={(e) => handleSearch(e)} value={search} placeholder='Search . . .' className='bg-[#F5F5F5] flex-grow outline-none text-gray-600 font-medium' />
                </section>

                <hr className='mt-4 mx-3' />
            </div>

            <div className='h-[78vh] overflow-auto chat-scrollbar' >
                {
                    activePage == 'chat' ? <UserChats activePage={activePage} /> :
                        activePage == 'all-users' ? <AllUsers activePage={activePage} /> : null
                }
            </div>
        </div>
    )
}

export default ChatBar