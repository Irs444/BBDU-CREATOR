import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '../user/Footer'
import Navbar from './Navbar';

const Main = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            }
        })
    }, [])


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div>
            <div className='container-fluid'>
                <div className=" grid-rows-3">
                    <div>
                        <Navbar />
                    </div>
                    <div>
                        <Outlet />
                        {
                            backToTopButton && (
                                <button
                                    onClick={scrollUp}
                                    type="button"
                                    data-twe-ripple-init=""
                                    data-twe-ripple-color="light"
                                    className="!fixed bottom-5 end-5 rounded-full bg-blue-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
                                    id="btn-back-to-top"
                                >
                                    <span className="[&>svg]:w-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={3}
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                                            />
                                        </svg>
                                    </span>
                                </button>


                            )
                        }

                    </div>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main