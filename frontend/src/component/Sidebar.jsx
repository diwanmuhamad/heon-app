import React from "react";
import { useNavigate } from "react-router-dom";
import { heonlogo } from "../assets";

const Sidebar = ({menu, activeMenu, setMenuView}) => {
    const navigate = useNavigate()
    return (
        <div className="font-poppins bg-blue-gradient py-10 px-4 w-1/6">
            <img
            src={heonlogo}
            className="h-[100px] w-[150px]"
            />
            
            <div className="h-2/3 border-b-2 w-full border-black-500">
                {
                    menu.map((el, idx) => {
                        return (
                            <div key={idx+el.id}
                            className={`cursor-pointer w-full py-2 my-2 rounded pl-3 ${activeMenu === el.title ? 'bg-blue1' : ""}`}
                            onClick={() => {navigate(`/admin/1/${el.title}`); setMenuView(el.title)}}
                            >
                                <h1>{el.title}</h1>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-6 pl-3">
                logout
            </div>
        </div>
    )
}

export default Sidebar;