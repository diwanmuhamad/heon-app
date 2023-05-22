import React from "react";

const FormMSMES = () => {
    return (
        <div className="w-full mt-7 rounded-lg h-[90%] p-5 shadow-md border-2">
            <h2 className="mb-4 text-[26px]">Add MSME Data</h2>
            <div className="w-full h-5/6">
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name" />

                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="addr"
                    placeholder="Address" />
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="ctg"
                    placeholder="Category of Business" />
                <p>Started At</p>
                <input 
                    type="date"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="date"
                    placeholder="Started At" />
                <textarea 
                    className="w-full px-3 py-2"
                    placeholder="Funding Purpose"
                ></textarea>
                <input 
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4 mt-2"
                    name="nik"
                    placeholder="NIK" />
                <input 
                    type="file"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="ktp_img"
                    accept="image/png"
                    placeholder="KTP" />
                <input 
                    type="number"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="ba"
                    placeholder="Borrowed Amount" />
                 <input 
                    type="number"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="period"
                    placeholder="Period (in Months)" />
                 <div className="flex justify-center">
                    <button className="appearance-none w-[100px] bg-dimBlue rounded-lg shadow-md p-2">Submit</button>
                </div>
            </div>
           
        </div>
    )
}

export default FormMSMES;