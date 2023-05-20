import {useState} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="bg-primary w-full overflow-hidden p-10">
             <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border-solid border-2 border-white-600">
                        <h1 className="mb-8 text-3xl text-center">Login <span className='text-gradient'>heon</span></h1>

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />

                        <button
                            type="button"
                            className="w-full text-center py-3 rounded bg-blue-gradient text-black text-poppins hover:cursor-pointer focus:outline-none my-1"
                        >Login</button>

                    </div>

                    <div className="text-white mt-6">
                        Don't have an account? <Link to={{pathname:'/signup'}} className='text-blue-300 underline'>Sign Up</Link>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Login;