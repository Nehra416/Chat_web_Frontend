import { setAllUsers, setFriendsList } from "@/redux/ChatSlice";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";


const GetAllTypeChats = () => {
    const dispatch = useDispatch();
    const { activePage } = useSelector(store => store.activePage);
    // console.log("active page is : ", activePage)

    useEffect(() => {
        const getChatList = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/message/${activePage}`, { withCredentials: true })
                console.log("res is : ", res)
                if (res.data.success) {
                    console.log('redux', res.data.users.friends)
                    if (activePage === 'chat') dispatch(setFriendsList(res.data.users.friends))
                    else if (activePage === 'all-users') dispatch(setAllUsers(res.data.users))

                }
            } catch (error) {
                console.log(error)
                toast.error(error.response.data.message)
            }
        }
        getChatList();
    }, [activePage])
}

export default GetAllTypeChats;