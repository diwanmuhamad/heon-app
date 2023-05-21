import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Sidebar, Contentbar } from '../component'
import { freelanceAdminMenu, investorAdminMenu } from '../const'

const Admin = () => {
    const {role, menu} = useParams()
    const [menuView, setMenuView] = useState(menu)
    const navigate = useNavigate()
    useEffect(()=> {
        if (role !== "1" && role !== "2") { navigate('/login')}
        const nameMenu1 = freelanceAdminMenu.map((el) => el.title)
        const nameMenu2 = investorAdminMenu.map((el) => el.title)
        
        if ((role === "1" && !nameMenu1.includes(menu)) || 
        (role === "2" && !nameMenu2.includes(menu))) { navigate('/login')}
    }, [])
    

    return (
        <div className='w-full overflow-hidden flex'>
            <Sidebar menu={role === "1" ? freelanceAdminMenu : investorAdminMenu} activeMenu={menu} setMenuView={setMenuView}/>
            <Contentbar menu={menuView}/>
        </div>
    )
}

export default Admin