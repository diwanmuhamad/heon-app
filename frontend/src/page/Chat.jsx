import {useState} from 'react';
import { SidebarChat, MainChat } from '../component';


const Chat = () => {
    const [chatData, setChatData] = useState([])
    const [openSide, setOpenSide] = useState(false)
    return (
        <div className="bg-primary w-full overflow-hidden flex">
            <SidebarChat openSide={openSide} setOpenSide={setOpenSide} setChatData={setChatData}/>
            <MainChat chatData={chatData} setChatData={setChatData} setOpenSide={setOpenSide}/>
        </div>
    )
}

export default Chat;