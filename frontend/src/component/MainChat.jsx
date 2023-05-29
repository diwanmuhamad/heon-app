import {useEffect, useState} from "react"
import { FaLocationArrow, FaBars, FaPlus } from "react-icons/fa";
import { heonlogo } from "../assets";
import { Link } from "react-router-dom";
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const MainChat = ({chatData, setChatData, setOpenSide}) => {
    const [question, setQuestion] = useState("")

    const submitChat = () => {
        let temp = [...chatData]
        temp.push({user:true, msg: question})
        setChatData(temp)
        setQuestion("")
        Axios.post('http://18.141.142.224:3002/suggestions', {
            question: question
          }, {
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}` 
            }
          }).then(function (response) {
            console.log(response);
            let temp2 = [...temp]
            temp2.push({...response.data, user: false})
            setChatData(temp2)
          })
          .catch(function (error) {
            console.log(error);
            toast.error("Something Wrong")
          });
    }

    useEffect(()=> {
        const input = document.querySelector('#prompt')
        const contPrompt = document.querySelector('#contPrompt')
        function autosize(){
            var el = this;
            setTimeout(function(){
                if (el.scrollHeight <= 126) {
                    el.style.cssText = 'height:auto; padding:0';
                    // for box-sizing other than "content-box" use:
                    // el.style.cssText = '-moz-box-sizing:content-box';
                    el.style.cssText = 'height:' + el.scrollHeight + 'px';
                }
            },0);
          }
        input.addEventListener('keydown', autosize)
    },[])
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
                            <Link className='appearance-none cursor-pointer' to={{pathname:'/'}}><img src={heonlogo} className="h-[30%] w-[30%] mx-auto"/></Link>
                            <div className="w-full h-[40%] flex p-3 justify-between">
                                <div className="w-[30%] h-[60%] rounded py-3 bg-neutral-600 shadow-xl text-center text-gray-400 text-sm sm:text-base">Find you best buyers</div>
                                <div className="w-[30%] h-[60%] rounded py-3 bg-neutral-600 shadow-xl text-center text-gray-400 text-sm sm:text-base">Start The Deal</div>
                                <div className="w-[30%] h-[60%] rounded py-3 bg-neutral-600 shadow-xl text-center text-gray-400 text-sm sm:text-base">Match Your Needs</div>
                                
                            </div>
                        </div>
                        :
                        <div>
                            {
                                chatData.map((el) => {
                                    return(
                                        el.user?
                                        <div key={el.msg}
                                        className="w-full flex mb-10"
                                        
                                        >
                                        {/* <img width="30" height="30"/> */}
                                        <p className="text-gray-400">You:</p>
                                        <p className="text-white ml-2">{el.msg}</p></div>
                                        :
                                        <div
                                        className="w-full flex mb-5" 
                                        key={el.data}>
                                        {/* <img src={heonlogo} width="20" height="20"/>     */}
                                        <p className="text-gradient">Heon:</p>
                                        <p className="text-white ml-2">{el.data}</p></div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
                <div className="relative h-1/6 w-full py-3">
                    <div id="contPrompt" className="relative flex h-[68%] w-full shadow-2xl bg-neutral-600 rounded">
                        <textarea
                        id="prompt"
                        value={question}
                        onChange={(e)=>setQuestion(e.target.value)}
                        className="max-height-full resize-none appearance-none outline-none w-full bg-neutral-600 px-[20px] py-[15px] sm:py-[15px] rounded text-white overflow-hidden" placeholder="Send Message...">
                        </textarea>
            
                        <FaLocationArrow
                            onClick={submitChat}
                            className="text-gray-400 cursor-pointer absolute bottom-4 right-5"
                        />
   
                    </div>
                </div>
                <ToastContainer/>
            </div>
        </div>
       
    )
}

export default MainChat;