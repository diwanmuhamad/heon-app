import {useState, useEffect} from "react";
import {ViewTable, FormMSME} from '../component'

const Contentbar = ({menu}) => {
    const [data, setData] = useState([])
    const [view, setView] = useState('data')

    useEffect(()=> {
        if (menu === "Profile") {

        }
        else if (menu === "MSME") {

        }
        setView('data')
    }, [menu])
    return (
        <div className="bg-primary w-full py-10 px-10">
            <div className="w-full h-[50px] border-2 rounded-lg">

            </div>
            {
                view === "data" ?
                <ViewTable setView={setView} menu={menu}/>
                :
                view === "addMSME" ?
                <FormMSME setView={setView}/>
                :
                null
            }
        </div>
    )
}

export default Contentbar;