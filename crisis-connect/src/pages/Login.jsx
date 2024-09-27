import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className='w-full pt-20 h-screen grid grid-cols-2'>
            <div className='w-full h-full bg-blue-950 grid place-items-center'>
                <img src="/auth-banner.png" className='w-[600px]' alt="" />
            </div>
            <div className='w-full h-full bg-white grid place-items-center'>
                <form action="">
                    <h3 className='text-blue-950 font-bold text-4xl'>Welcome Back! <br /> Log In to Your Account</h3>
                    <div className="w-96 space-y-3 mt-8">
                        <div>
                            <label
                                htmlFor="hs-leading-icon"
                                className="block text-sm font-medium mb-2 dark:text-white"
                            >
                                Email address
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="hs-leading-icon"
                                    name="hs-leading-icon"
                                    className="py-3 px-4 ps-11 block w-full border shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="you@site.com"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <i className="ri-mail-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-96 space-y-3 my-4">
                        <div>
                            <label
                                htmlFor="hs-leading-icon"
                                className="block text-sm font-medium mb-2 dark:text-white"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    id="hs-leading-icon"
                                    name="hs-leading-icon"
                                    className="py-3 px-4 ps-11 block w-full border shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="*********"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <i className='ri-lock-line'></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className='text-xs '>Don't have an account? <Link to={"/signup"} className='text-blue-900 font-semibold underline'>Sign up now!</Link></span>


                    <button type="button" class="text-center flex itesmc-enter justify-center mt-5 w-full py-3 px-4  items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-950 text-white hover:bg-blue-900 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}
