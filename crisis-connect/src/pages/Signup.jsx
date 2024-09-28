import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


export default function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [error, setError] = useState("");
    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                },
                (err) => {
                    setError(err.message);
                }
            );
        } else {
            setError("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getUserLocation()


    }, [])


    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                name: name,
                email: email,
                location: location,
            });

            const navigate = useNavigate()
            navigate('/')
            console.log("User signed up and data stored in Firestore");
        } catch (error) {
            setError(error.message);
        }
    };


    return (
        <div className='w-full pt-20 h-screen grid grid-cols-2'>
            <div className='w-full h-full bg-blue-950 grid place-items-center'>
                <img src="/auth-banner.png" className='w-[600px]' alt="" />
            </div>
            <div className='w-full h-full bg-white grid place-items-center'>
                <form onSubmit={handleSignup}>
                    <h3 className='text-blue-950 font-bold text-4xl'>Get Started –<br /> Create an Account</h3>
                    <div className="w-96 space-y-3 mt-8">
                        <div>
                            <label
                                htmlFor="hs-leading-icon"
                                className="block text-sm font-medium mb-2 dark:text-white"
                            >
                                Full name
                            </label>
                            <div className="relative">
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    id="hs-leading-icon"
                                    name="hs-leading-icon"
                                    className="py-3 px-4 ps-11 block w-full border shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                    placeholder="john doe"
                                />
                                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                                    <i className="ri-user-line"></i>
                                </div>
                            </div>
                        </div>
                    </div>
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
                                    onChange={(e) => setEmail(e.target.value)}
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    type="password"
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

                    <span className='text-xs '>Already have an account? <Link to={"/login"} className='text-blue-900 font-semibold underline'>Login now!</Link></span>


                    <button type="submit" className="text-center flex itesmc-enter justify-center mt-5 w-full py-3 px-4  items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-950 text-white hover:bg-blue-900 focus:outline-none focus:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                        Signup
                    </button>
                </form>
            </div>
        </div>
    )
}
