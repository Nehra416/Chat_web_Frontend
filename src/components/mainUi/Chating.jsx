import React, { useEffect, useState } from 'react'
import me from "../../Img/default.png"
import { MdCall } from "react-icons/md";
import { FaVideo } from "react-icons/fa";
import { MdMoreHoriz } from "react-icons/md";
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { setConversation } from '@/redux/ChatSlice';


const Chating = () => {
    const [userData, setUserData] = useState();
    const [inputText, setInputText] = useState('')
    const [loading, setLoading] = useState(false);

    const { selectedUser } = useSelector((state) => state.user);
    const { conversation } = useSelector((state) => state.chat);
    const dispatch = useDispatch();

    useEffect(() => {
        const getChat = async () => {

            try {
                const res = await axios.post(`http://localhost:8000/message/all`, { senderId: selectedUser }, { withCredentials: true })
                console.log("res is :", res.data.messages.message);

                if (res.data.success) {
                    dispatch(setConversation(res.data.messages?.message || []))
                    // setChatData(res.data.messages?.message || []);
                    // console.log("chat data is :", chatData);
                    setUserData(res.data.user);
                    console.log("user is :", res.data.user);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getChat();
    }, [selectedUser]);

    const sendMessage = async () => {
        // stop the sending request if input field is empty
        let text = inputText.trim();
        if (text === '') return;

        try {
            setLoading(true);

            const res = await axios.post('http://localhost:8000/message/send', { senderId: selectedUser, content: inputText }, { withCredentials: true })
            console.log("res is :", res);
            if (res.data.success) {
                dispatch(setConversation([...conversation, { senderId: selectedUser, content: inputText }]));
                setInputText('');
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className='bg-white w-[58vw] h-[95vh] my-3 rounded-xl overflow-hidden relative'>

            {/* Chating Header div */}
            <div className='flex justify-between items-center p-3 shadow shadow-gray-200 drop-shadow-xl'>
                <section className='flex items-center gap-2'>
                    {/* <img src={me} alt="Dp" className='rounded-full w-10 h-10' /> */}
                    <img src={userData?.profilePic || me} alt="Dp" className='rounded-full w-10 h-10 bg-gray-100' />
                    <span className='text-lg font-medium'>{userData?.userName}</span>
                </section>
                <section className='flex gap-4'>
                    <MdCall size={'22px'} cursor={'pointer'} />
                    <FaVideo size={'22px'} cursor={'pointer'} />
                    <MdMoreHoriz size={'22px'} cursor={'pointer'} />
                </section>
            </div>

            {/* Display Message */}
            <div className='overflow-auto h-[75vh] pb-3 chat-scrollbar'>
                <section className='flex gap-2 justify-center flex-col items-center my-7'>
                    <img src={userData?.profilePic || me} alt="Profile" className='rounded-full bg-gray-100 w-32 h-32' />
                    <span className='text-2xl font-medium max-w-[30vw] truncate'>{userData?.userName}</span>
                </section>
                {
                    conversation.map((item, index) => {
                        return (
                            <div className='mx-2 mt-2' key={index}>
                                {
                                    selectedUser === item.senderId ?
                                        <section section className='flex justify-end group' >
                                            <span className='bg-gray-600 text-white px-3 py-1 rounded-2xl border max-w-[30vw]'>{item.content}</span>
                                        </section>
                                        :
                                        <section section className='flex gap-2 items-center mb-2 group'>
                                            <img src={userData?.profilePic || me} alt="Dp" className='rounded-full bg-gray-100 w-8 h-8' />
                                            <span className='bg-[#F5F5F5] px-3 py-1 rounded-2xl border max-w-[30vw]'>{item.content}</span>
                                        </section>

                                }
                            </div>
                        )
                    })
                }
            </div >

            {/* Send Message div */}
            <div div className='flex gap-2 absolute bottom-0 left-0 right-0 mx-2 bg-white py-2' >
                <input value={inputText} onChange={(e) => setInputText(e.target.value)} type="text" className='pl-2 py-1 border rounded outline-none flex-grow' placeholder='Text . . .' />
                {
                    loading ?
                        <button className='bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded text-center'><Loader2 /></button>
                        :
                        <button onClick={sendMessage} className='bg-gray-600 hover:bg-gray-800 text-white px-4 py-2 rounded'>Send</button>
                }
            </div >
        </div >
    )
}

export default Chating