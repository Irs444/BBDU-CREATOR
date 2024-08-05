import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (
        <div className='bg-gray-300 vh-100'>
            <div className='d-flex justify-center'>
                <img src="https://miro.medium.com/v2/resize:fit:1400/1*zE2qnVTJehut7B8P2aMn3A.gif" alt="" style={{mixBlendMode:"multiply"}}/>
            </div>
            <main style={{fontFamily:"initial"}}>
                <div className="text-center">
                    {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">Page not found</h1>
                    <p className="mt-6 text-xl leading-7 text-gray-800">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                           to={"/main/home"}
                            className="rounded-md bg-indigo-600 px-4 py-2.5 text-lg font-bold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Go back home
                        </Link>
                       
                    </div>
                </div>
            </main>
        </div>
    )
}

export default PageNotFound