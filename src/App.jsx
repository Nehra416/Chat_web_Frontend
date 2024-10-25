import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignUp from './components/loginUi/SignUp'
import SignIn from './components/loginUi/SignIn'
import OtpVerify from './components/loginUi/OtpVerify'
import MenuBar from './components/mainUi/MenuBar'
import MainPage from './pages/MainPage'
import { io } from 'socket.io-client'
import { useDispatch, useSelector } from 'react-redux'
import { setSocket } from './redux/SocketSlice'
import { useEffect } from 'react'
import { setConversation } from './redux/ChatSlice'

function App() {
  const dispatch = useDispatch();
  const userId = localStorage.getItem('userId');
  const { conversation } = useSelector(store => store.chat);

  useEffect(() => {
    const socketio = io('http://localhost:8000', {
      query: {
        userId: userId
      },
      transports: ['websocket'] // why???
    });
    dispatch(setSocket(socketio));

    // Listen for new messages after setting the socket
    socketio.on('newMessage', ({ senderId, content }) => {
      console.log("newMessage is:", { senderId, content });
      dispatch(setConversation([...conversation, { senderId, content }]));
    });
  }, [dispatch, userId, conversation])


  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/signin' element={<SignIn />} />
          <Route exact path='/otp_verify' element={<OtpVerify />} />
          <Route exact path='/home' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
