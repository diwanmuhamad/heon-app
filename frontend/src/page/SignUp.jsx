import {useState} from 'react';
import {Link} from 'react-router-dom'

const SignUp = () => {
    const [styleSelect, setStyleSelect] = useState(false)
    return (
        <div className="bg-primary w-full overflow-hidden p-10">
             <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full border-solid border-2 border-white-600">
                        <h1 className="mb-8 text-3xl text-center">Sign up <span className='text-gradient'>heon</span></h1>
                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="fullname"
                            placeholder="Full Name" />

                        <input 
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="email"
                            placeholder="Email" />
                        <select 
                            className={`block border border-grey-light w-full p-3 rounded mb-4 ${!styleSelect? "text-gray-500" : ""}`}
                            name="Role"
                            placeholder="Role"
                            onChange={() => setStyleSelect(true)}
                            >
                                <option value="" selected disabled className='text-gray-500'>Role</option>
                                <option value="1">Freelancer</option>
                                <option value="2">Investor</option>
                        </select>

                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password" />
                        <input 
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="confirm_password"
                            placeholder="Confirm Password" />

                        <button
                            type="button"
                            className="w-full text-center py-3 rounded bg-blue-gradient text-black text-poppins hover:cursor-pointer focus:outline-none my-1"
                        >Create Account</button>

                        <div className="text-center text-sm text-grey-dark mt-4">
                            <p>
                                By signing up, you agree to the <a href='#' className='text-blue-300 underline'>Term of Service</a> and <a href="#" className='text-blue-300 underline'>Privacy Policy</a>
                            </p>
                        </div>
                    </div>

                    <div className="text-white mt-6">
                        Already have an account? <Link to={{pathname:'/login'}} className='text-blue-300 underline'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default SignUp;