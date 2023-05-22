import React from "react";

const FormProject = () => {
    return (
        <div className="w-full mt-7 rounded-lg h-[90%] p-5 shadow-md border-2">
            <h2 className="mb-4 text-[26px]">Add Project Data</h2>
            <div className="w-full h-5/6">
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="projectname"
                    placeholder="Project Name" />

                <p>Started At</p>
                <input 
                    type="time"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="time"
                    placeholder="Started At" />
                <input 
                    type="date"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="date"
                    placeholder="Started At" />
                <input 
                    type="number"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="creditlimit"
                    placeholder="Credit Limit" />
                 <input 
                    type="number"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="interest"
                    placeholder="Interest" />
                <input 
                    type="number"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="rewardamount"
                    placeholder="Reward Amount" />

                <div className="flex justify-center">
                    <button className="appearance-none w-[100px] bg-dimBlue rounded-lg shadow-md p-2">Submit</button>
                </div>
            </div>
           
        </div>
    )
}

export default FormProject;