import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchProjectList = async () => {
        const res = await fetch("http://localhost:5000/projects/getall");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setProjectList(data.filter(project => project.verified));
        setMasterList(data.filter(project => project.verified));
    }

    useEffect(() => {
        fetchProjectList();
    }, [])

    const applySearch = (e) => {
        const inputText = e.target.value;

        setProjectList(masterList.filter((project) => {
            return project.title.toLowerCase().includes(inputText.toLowerCase());
               
        }));
    }

    const filterByDepartment = (department) => {
        const filteredProjects = masterList.filter(project => project.department === department);
        setProjectList(filteredProjects);
    }

    const filterByYear = (year) => {
        const filteredProjects = masterList.filter(project => project.year === year);
        setProjectList(filteredProjects);
    }

    return (
        <div>
            <div className="container">
                <div className="row mt-3 mx-5">
                    <form
                        className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto w-full "
                        role="search"
                    >
                        <input onChange={applySearch}
                            type="search"
                            className="form-control rounded w-100"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </form>
                    <div className="col text-center" style={{ fontFamily: "initial", fontSize: "5rem", color: "teal" }}>All Projects</div>
                </div>
                <div className="row mx-2 ">
                    <h1 className='py-4' style={{ fontFamily: "initial", fontSize: "2rem", fontWeight: "bold" }}>Filter</h1>
                    <div className=" dropdown col-md-2">
                        <h1 className="dropdowm-toggle py-2" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial", fontWeight: "bold", fontSize: "20px" }} >Departments</h1>
                        <ul className='dropdowm-menu d-block' style={{ fontFamily: "initial", fontWeight: "bold" }}>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="html" id="bca"
                                     onChange={(e) => filterByDepartment('Web Development')} />
                                    <label href="" for="bca" className="dropdowm-item">Web Development</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="css" id="mca"
                                     onChange={(e) => filterByDepartment('Data Science')} />
                                    <label href="" for="mca" className="dropdowm-item">Data Science</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="java" id="it" 
                                     onChange={(e) => filterByDepartment('AI')}/>
                                    <label href="" for="it" className="dropdowm-item">AI</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input className="form-check-input" type="radio" name='course' value="ai" id="ai" 
                                     onChange={(e) => filterByDepartment('Data Analytics')}/>
                                    <label href="" for="ai" className="dropdowm-item">Data Analytics</label>
                                </div>

                            </li>
                        </ul>
                        <h1 className="dropdowm-toggle pt-4" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial", fontWeight: "bold", fontSize: "20px" }} >Years</h1>
                        <ul className='dropdowm-menu d-block' style={{ fontFamily: "initial", fontWeight: "bold" }}>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                     onChange={(e) => filterByYear('2023-24')}/> 
                                    <label href="" className="dropdowm-item">2023-24</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                    onChange={(e) => filterByYear('2022-23')} />
                                    <label href="" className="dropdowm-item">2022-23</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                    onChange={(e) => filterByYear('2021-22')} />
                                    <label href="" className="dropdowm-item">2021-22</label>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name='year' value="" id="flexCheckDefault"
                                    onChange={(e) => filterByYear('2019-20')} />
                                    <label href="" className="dropdowm-item">2019-20</label>
                                </div>

                            </li>
                           
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {
                                projectList.map((pro) => {
                                    return (
                                        <div className="col col-md-4 g-3 ">
                                            <div className="card shadow">
                                                <img src={"http://localhost:5000/" + pro.image} alt="" className='card-img-top' style={{ height: 200 }} />
                                                <div className="card-body">
                                                    <h1 className='text-center fw-bold' style={{ fontFamily: "initial" }}>{pro.title}</h1>
                                                    <p className='text-center'>{pro.description}</p>
                                                    <p className='text-center'>{pro.department}</p>
                                                    <p className='text-center'>{pro.year}</p>
                                                    <Link to={"/user/detail/" + pro._id} type='button' className="btn btn-success text-white fs-5" style={{ fontFamily: "initial" }}>View</Link>

                                                </div>
                                            </div>

                                        </div>
                                    )
                                })
                            }

                            {/* <div className="col-md-4 ">
                                <div className="card shadow">
                                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="" className='card-img-top' />
                                    <div className="card-body">
                                    <h1 className='text-center fw-bold' style={{fontFamily:"initial"}}>Project Title</h1>
                                    <p className='text-center'>Project Description</p>
                                    <a type='button' className="btn btn-success">View</a>
                                   
                                </div>
                                </div>
                               
                            </div>
                            <div className="col-md-4 ">
                                <div className="card shadow">
                                    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/What_Is_a_Project.jpg" alt="" className='card-img-top' />
                                    <div className="card-body">
                                    <h1 className='text-center fw-bold' style={{fontFamily:"initial"}}>Project Title</h1>
                                    <p className='text-center'>Project Description</p>
                                    <a type='button' className="btn btn-success">View</a>
                                   
                                </div>
                                </div>
                               
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects