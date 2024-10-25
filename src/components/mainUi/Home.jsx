import React from 'react'
import { Button } from '../ui/button'
import { useDispatch } from 'react-redux'
import { setActivePage } from '@/redux/ActivePageSlice';

const Home = () => {
    const dispatch = useDispatch();
    return (
        <div className='bg-white w-[58vw] h-[95vh] my-3 rounded-xl overflow-hidden relative flex justify-center items-center'>
            <section>
                <h1 className='text-3xl font-bold text-gray-900'>Welcome to Chat_Web</h1>
                <p className='text-lg font-medium text-gray-500'>Built by using React and Redux with using tailwind CSS.</p>

                <div className='mt-5 '>
                    <Button onClick={() => dispatch(setActivePage('chat'))}>
                        Join a Chat
                    </Button>
                    <span className='font-medium ml-5 text-gray-500'>Chat with your friends</span>
                </div>

            </section>
        </div>
    )
}

export default Home