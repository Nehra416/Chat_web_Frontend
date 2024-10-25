import React from 'react'
import me from "../../Img/default.png";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedUser } from '@/redux/UserSlice';
import { setChattingPage } from '@/redux/ActivePageSlice';


const AllUsers = () => {
    const { allUsers } = useSelector(store => store.chat);
    const dispatch = useDispatch();

    return (
        <>
            {
                allUsers.map((item, index) => {
                    return (
                        <div key={index} onClick={() => dispatch(setSelectedUser(item._id), dispatch(setChattingPage('chat')))} className={`flex gap-3 items-center cursor-pointer hover:bg-gray-100 mx-2 rounded p-2 ${search === item._id && ' bg-gray-200'}`}>
                            <img src={item.profilePic || me} alt="Dp" className='rounded-full w-12 h-12' />
                            <section className='flex flex-col flex-grow '>
                                <span className='font-medium  max-w-[20vw] truncate'>{item.userName}</span>
                                <section className='flex items-center gap-2 '>
                                    {/* <span className='text-sm text-gray-500 max-w-[18vw] truncate'>{item.lastMessage}</span> */}
                                    {/* <span className='text-gray-400 text-xs flex items-center'><GoDotFill color='lightgray' size={'10px'} /> 1 day ago</span> */}
                                </section>
                            </section>
                        </div>
                    )
                })
            }
        </>

    )
}

export default AllUsers