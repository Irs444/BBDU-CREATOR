import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ManageProject = () => {

  const {id} = useParams();

  const [projectList, setProjectList] = useState([]);
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
      console.error('Failed to update project');
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
    return <table className='table  rounded'>
      <thead>
        <tr style={{ fontFamily: "initial" }}>
          <th>Images</th>
          <th>Title</th>
          <th>Description</th>
          <th>Language</th>
          <th>Year</th>
          <th colSpan={2}>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          projectList.map((pro) => {
            return <tr style={{ fontFamily: "initial" }}>
              <td><img src={"http://localhost:5000/" + pro.image} alt="" style={{ height: 40 }} /></td>
              <td>{pro.title}</td>
              <td>{pro.description}</td>
              <td>{pro.language}</td>
              <td>{pro.year}</td>
              <td>
                <Link href=""> <i class="bi bi-trash3 fs-4 text-danger" onClick={e => deleteProject(pro._id)}></i></Link>

              </td>
              <td>
              <button className='btn btn-primary' onClick={() => updateVerified(pro._id)}>{
                  pro.verified ? 'Verified'  : 'Verify'
                
              }</button>

              </td>
            </tr>
          })
        }

      </tbody>

    </table>
  }

  return (
    <div>
      <div className="container-fluid shadow">
        <h1 className='text-center fw-bold my-4 fs-2' style={{ fontFamily: 'initial', color: "teal" }}>Manage Project</h1>
        {displayProjectList()}
      </div>
    </div>
  )
}

export default ManageProject