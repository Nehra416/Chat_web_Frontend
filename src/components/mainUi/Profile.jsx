import React, { useRef, useState } from 'react'
// import me from '../Img/me.jpg'
import { Button } from '../ui/button'
import axios from 'axios'
import me from '../../Img/default.png'

const Profile = () => {
    const selectImg = useRef(null);
    const [profileImg, setProfileImg] = useState('');
    const [prviewUrl, setPreviewUrl] = useState('');

    const handleProfile = (e) => {
        const file = e.target.files[0];
        setProfileImg(file);

        // create preview url of profile for display
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    }

    const updateProfile = async () => {
        try {
            const res = await axios.post('http://localhost:8000/user/update', { profileImg }, { withCredentials: true })
            console.log("Response is :", res);
            if (res.data.success) {

            }
        } catch (error) {
            console.log(error);
        }
    }

    const [update, setUpdate] = useState({
        userName: false,
        email: false,
        password: false,
        bio: false,
    })

    return (
        <div className='bg-white w-[58vw] h-[95vh] my-3 rounded-xl overflow-hidden relative px-5'>
            <section className='flex flex-col justify-center items-center gap-2 mt-[5vh]'>
                <img src={me} alt="Dp" className='rounded-full bg-gray-100 w-40 h-40' />
                <span className='text-2xl font-medium'>Deepak Nehra</span>
                <span className='text-lg text-gray-500 font-medium'>Nehra416</span>
            </section>

            {/* Section for update the profile */}
            <section className='flex flex-col gap-1 mt-5'>
                <span className='font-medium text-lg'>Username</span>
                <section className='flex justify-between items-center'>
                    {
                        update.userName ? (
                            <>
                                <input type="text" placeholder='UserName. . .' className='pl-2 border-2 border-gray-300 outline-none focus:border-gray-500 rounded' />
                                <Button className="h-7" onClick={() => setUpdate({ ...update, userName: false })}>Save</Button>
                            </>) : (
                            <>
                                <span className='font-medium text-gray-500 ml-5'>Nehra416</span>
                                <Button className="h-7" onClick={() => setUpdate({ ...update, userName: true })}>Edit</Button>
                            </>
                        )
                    }
                </section>
                <span className='font-medium text-lg'>Password</span>
                <section className='flex justify-between items-center'>
                    {
                        update.password && (
                            <>
                                <input type="text" placeholder='UserName. . .' className='pl-2 border-2 border-gray-300 outline-none focus:border-gray-500 rounded' />
                                <Button className="h-7" onClick={() => setUpdate({ ...update, userName: false })}>Save</Button>
                            </>)
                    }
                </section>
            </section>

        </div>
    )
}

export default Profile