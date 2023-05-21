import React from "react";

const ViewTable = ({setView, menu}) => {
    return (
        <div className="w-full mt-7 rounded-lg h-[480px] p-5 shadow-md border-2">
            <div className="flex justify-end w-full">
                <button 
                onClick={()=> {
                    if (menu === "MSME") {
                        setView(`add${menu}`)
                    }
                }}
                type='button' className="appearance-none w-[100px] bg-dimBlue rounded-lg shadow-md p-2">+ Add</button>
            </div>
            <div>
                <table></table>
            </div>
        </div>
    )
}

export default ViewTable;