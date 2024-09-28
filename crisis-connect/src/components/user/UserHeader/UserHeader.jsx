import React from 'react'
import { Link } from 'react-router-dom'
export default function UserHeader() {
    return (
        <header className="flex z-[999] border-b fixed top-0 shadow-sm  flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
            <nav className="max-w-[85rem] w-full mx-auto px-4 flex flex-wrap basis-full items-center justify-between">

                <Link
                    className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
                    to="/"
                    aria-label="Brand"
                >

                    <div className='max-h-20  grid place-items-center '>
                        <img src="/CRISIS_CONNECT_LOGO.png" className=' scale-150 transform w-auto h-10' alt="" />

                    </div>
                </Link>


                <div className="sm:order-3 flex items-center gap-x-2">
                    <button
                        type="button"
                        className="sm:hidden hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                        id="hs-navbar-alignment-collapse"
                        aria-expanded="false"
                        aria-controls="hs-navbar-alignment"
                        aria-label="Toggle navigation"
                        data-hs-collapse="#hs-navbar-alignment"
                    >
                        <svg
                            className="hs-collapse-open:hidden shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1={3} x2={21} y1={6} y2={6} />
                            <line x1={3} x2={21} y1={12} y2={12} />
                            <line x1={3} x2={21} y1={18} y2={18} />
                        </svg>
                        <svg
                            className="hs-collapse-open:block hidden shrink-0 size-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Toggle</span>
                    </button>
                    <Link to={"/new-report"} type="button" className=" py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:bg-teal-600 disabled:opacity-50 disabled:pointer-events-none">
                        Report a Crisis
                    </Link>

                    <Link to="/login"
                        type="button"
                        className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Login
                    </Link>

                </div>
                <div
                    id="hs-navbar-alignment"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:grow-0 sm:basis-auto sm:block sm:order-2"
                    aria-labelledby="hs-navbar-alignment-collapse"
                >
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:mt-0 sm:ps-5">

                    </div>
                </div>
            </nav>
        </header>
    )
}
