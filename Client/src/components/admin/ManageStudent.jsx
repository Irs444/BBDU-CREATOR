import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const ManageStudent = () => {

    const [userList, setUserList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = userList.slice(firstIndex, lastIndex);
    const npage = Math.ceil(userList.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    function prePage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    function changePage(id) {
        setCurrentPage(id)
    }

    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }

    const fetchUserList = async () => {
        const res = await fetch("http://localhost:5000/user/getall");
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    }
    useEffect(() => {
        fetchUserList();
    }, [])

    const deleteUser = async (id) => {
        console.log(id);

        const res = await fetch("http://localhost:5000/user/delete/" + id, {
            method: "DELETE",
        });
        console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('User Deleted Successfully', { variant: 'success' });
            fetchUserList();

        }

    }

    const displayUserData = () => {

        return <table className='table' >
            <thead >
                <tr className='border-gray-500 text-xl' >
                    <th>Name</th>
                    <th>Email</th>
                    <th>Created At</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    records.map((pod) => {
                        return <tr>
                            <td>{pod.name}</td>
                            <td>{pod.email}</td>
                            <td>{pod.createdAt}</td>
                            <td>
                                <Link className='btn bg-gray-300 hover:bg-gray-400' href=""> <i class="bi bi-trash3 fs-4 text-danger" onClick={e => deleteUser(pod._id)}></i></Link>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    }
    return (
        <div className='bg-gray-300 vh-100 pt-10'>
            <div className='container shadow-md mx-auto  rounded border border-gray-500 bg-white' style={{ fontFamily: "initial" }}>

                <h1 className='text-center fw-bold my-4 text-3xl '>Manage Student</h1>
                {displayUserData()}
                <Pagination numbers={numbers} currentPage={currentPage} prePage={prePage} nextPage={nextPage} changePage={changePage} recordsPerPage={recordsPerPage} />
            </div>

        </div>
    )
}

export default ManageStudent

const Pagination = ({ numbers, currentPage, prePage, nextPage, changePage, totalItem = 17, recordsPerPage }) => {
    return (
        <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
                <a
                    href="#"
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Previous
                </a>
                <a
                    href="#"
                    className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Next
                </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{(currentPage - 1) * recordsPerPage + 1}</span> to <span className="font-medium">{currentPage * recordsPerPage}</span> of{' '}
                        <span className="font-medium">{totalItem}</span> results
                    </p>
                </div>
                <div>
                    <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                        <a


                            className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Previous</span>
                            <ChevronLeftIcon aria-hidden="true" className="h-5 w-5 cursor-pointer" onClick={prePage} />
                        </a>
                        {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
                        {
                            numbers.map((n, i) => (

                                <a
                                    onClick={() => changePage(n)}
                                    key={i}
                                    aria-current="page"
                                    className={` ${currentPage === n ? ' bg-indigo-600 text-white' : 'text-gray-500 border'} cursor-pointer relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
                                >
                                    {n}
                                </a>
                            ))
                        }



                        <a


                            className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        >
                            <span className="sr-only">Next</span>
                            <ChevronRightIcon aria-hidden="true" className="h-5 w-5 cursor-pointer" onClick={nextPage} />
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    )
}