import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    
    const { id } = useParams();
    const [project, setProject] = useState([]);

    const getProjectData = async () => {
        const res = await fetch("http://localhost:5000/projects/getbyid/" + id);
        console.log(res.status);
        const data = await res.json();
        setProject(data);
        console.log(data);
    }
    useEffect(() => {
        getProjectData();
    }, [])
    return (
        <div>
            <div className="container">
                {
                    project !== null ? (
                        <div className="row mt-5 shadow mx-3 rounded p-3 vh-100">
                            <div className="col-md-3">
                                <h1 className='text-center fs-4 fw-bold' style={{ fontFamily: 'initial' }}>Project Images </h1>
                                <img src={"http://localhost:5000/" + project.image} alt="" />
                            </div>
                            <div className="col-md-4" style={{ fontFamily: "initial" }}>
                                <h1 className='text-center fs-4 fw-bold'>Project Details</h1>
                                <h1 className=' fs-5 mt-4'> <span className='fw-bold'>Project Title:</span> <span className='ms-2'>{project.title}</span></h1>
                                <p className=' fs-5'><span className='fw-bold'>Description:</span> <span className='ms-2'>{project.description}</span></p>
                                <p className=' fs-5'><span className="fw-bold">Year:</span> <span className='ms-2'> {project.year}</span></p>
                                <p className='fs-5'><span className="fw-bold">Course: </span><span className='ms-2'>{project.course}</span></p>
                                <p className='fs-5'><span className="fw-bold">Language:</span> <span > {project.language}</span></p>
                            </div>
                        </div>
                    ) : (
                        <div>
                            <h1>No Project Found </h1>
                        </div>
                    )
                }

            </div>

        </div>
    )
}

export default Detail 