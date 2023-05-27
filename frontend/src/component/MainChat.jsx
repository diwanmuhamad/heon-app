import React from "react"
import { FaLocationArrow, FaBars, FaPlus } from "react-icons/fa";
import { heonlogo } from "../assets";

const MainChat = ({chatData, setChatData, setOpenSide}) => {
    return (
        <div className="h-full w-full">
            <div className="h-[10%] bg-zinc-900 w-full flex justify-between p-3 sm:hidden text-gray-400">
                <FaBars className="mt-1 cursor-pointer"
                onClick={()=>setOpenSide(true)}
                />
                <h2>New Chat</h2>
                <FaPlus className="mt-1 cursor-pointer"/>
            </div>
            <div className="bg-neutral-800 w-full h-screen px-[10%] py-4">
           
                <div className="overflow-y-auto h-5/6 w-full">
                    {
                        chatData.length === 0 ?
                        <div className="w-full h-full p-4">
                            <img src={heonlogo} className="h-[30%] w-[30%] mx-auto"/>
                            <div className="w-full h-[40%] flex p-3 justify-between">
                                <div className="w-[30%] h-[60%] rounded py-3 bg-neutral-600 shadow-xl text-center text-gray-400">Find you best buyers</div>
                                <div className="w-[30%] h-[60%] rounded py-3 bg-neutral-600 shadow-xl text-center text-gray-400">Start The Deal</div>
                                <div className="w-[30%] h-[60%] rounded py-3 bg-neutral-600 shadow-xl text-center text-gray-400">Find Your Soulmate</div>
                                
                            </div>
                        </div>
                        :
                        <div>

                        </div>
                    }
                </div>
                <div className="h-1/6 w-full py-3">
                    <div className="flex h-[65%] w-full shadow-2xl bg-neutral-600 rounded">
                        <input type="text" className="appearance-none outline-none h-full w-[92%] bg-neutral-600 px-4 rounded-l" placeholder="Send Message..."/>
                        <div className="h-full w-[8%] flex justify-center items-center">
                            <FaLocationArrow
                                className="text-gray-400 cursor-pointer"
                            />
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
       
    )
}

export default MainChat;