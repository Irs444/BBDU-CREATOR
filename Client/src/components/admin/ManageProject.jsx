import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'

const ManageProject = () => {

  const { id } = useParams();

  const [projectList, setProjectList] = useState([]);

  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPage = 8;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = projectList.slice(firstIndex, lastIndex);
  const npage = Math.ceil(projectList.length / recordsPerPage);
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

  // const [masterList, setMasterList] = useState([]);

  // ... existing code ...

  const updateVerified = async (projectId) => {
    console.log(projectId);
    const res = await fetch(`http://localhost:5000/projects/update/${projectId}`, {
      method: 'PUT',
      body: JSON.stringify({ verified: true }),
      headers: {
        'Content-Type': 'application/json',
      },

    });

    if (res.status === 200) {
      // If the request was successful, update the local state
      setProjectList(projectList.map(project =>
        project._id === projectId ? { ...project, verified: true } : project
      ));
      enqueueSnackbar('Project Verified Successfully', { variant: 'success' });
    } else {
      console.error('Failed to verify project');
    }
  }

  // ... existing code ...

  const fetchProjectList = async () => {
    const res = await fetch("http://localhost:5000/projects/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setProjectList(data);
  }

  useEffect(() => {
    fetchProjectList();
  }, [])

  const deleteProject = async (id) => {
    console.log(id);

    const res = await fetch("http://localhost:5000/projects/delete/" + id, {
      method: "DELETE",
    });
    console.log(res.status);
    if (res.status === 200) {
      enqueueSnackbar('Project Deleted Successfully', { variant: 'danger' });
      fetchProjectList();

    }

  }

  const displayProjectList = () => {
    return <table className='table'>
      <thead >
        <tr className=' border-gray-500 text-xl' style={{ fontFamily: "initial" }}>
          <th >Images</th>
          <th>Title</th>
          <th>Department</th>
          <th>Course</th>
          <th>Year</th>
          <th >Action</th>
          <th >Status</th>
        </tr>
      </thead>
      <tbody>
        {
          records.map((pro) => {
            return <tr style={{ fontFamily: "initial" }}>
              <td className='py-3' ><img src={"http://localhost:5000/" + pro.image} alt="" style={{ height: 40 }} /></td>
              <td>{pro.title}</td>
              <td>{pro.department}</td>
              <td>{pro.course}</td>
              <td>{pro.year}</td>

              <td>
                <Link className='btn bg-gray-300 hover:bg-gray-400' href=""> <i class="bi bi-trash3 fs-4 text-danger" onClick={e => deleteProject(pro._id)}></i></Link>

              </td>
              <td>
                <button className='btn bg-gray-300 hover:bg-gray-400' onClick={() => updateVerified(pro._id)}>{
                  pro.verified ? <span><i className="bi bi-check2 text-4xl text-green-800 cursor-pointer  "></i></span> : <span><i class="fa-solid fa-xmark text-4xl text-red-800 cursor-pointer "></i></span>

                }</button>

              </td>
            </tr>
          })
        }

      </tbody>

    </table>
  }

  return (
    <div className='bg-gray-300 py-10 '>
      <div className="container shadow-md mx-auto  rounded border border-gray-500 bg-white">
        <h1 className='text-center fw-bold my-4 text-3xl' style={{ fontFamily: 'initial' }}>Manage Project</h1>
        {displayProjectList()}
        <Pagination numbers={numbers} currentPage={currentPage} prePage={prePage} nextPage={nextPage} changePage={changePage} recordsPerPage={recordsPerPage} />
      </div>
    </div>
  )
}

export default ManageProject

const Pagination = ({ numbers, currentPage, prePage, nextPage, changePage, totalItem = 20, recordsPerPage }) => {
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