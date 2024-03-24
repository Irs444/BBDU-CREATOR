import React, { useEffect, useState } from 'react'

const Projects = () => {
    const [projectList, setProjectList] = useState([]);
    const [masterList, setMasterList] = useState([]);

    const fetchProjectList = async () => {
        const res = await fetch("http://localhost:5000/projects/getall");
        console.log(res.status);

        const data = await res.json();
        console.log(data);
        setProjectList(data);
        setMasterList(data);
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


    return (
        <div>
            <div className="container">
                <div className="row mt-3">
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
                <div className="row  ">
                    <h1 className='py-4' style={{ fontFamily: "initial", fontSize: "2rem", fontWeight: "bold" }}>Filter</h1>
                    <div className=" dropdown col-md-2">
                        <h1 className="dropdowm-toggle py-2" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial", fontWeight: "bold", fontSize: "20px" }} >Departments</h1>
                        <ul className='dropdowm-menu d-block' style={{ fontFamily: "initial", fontWeight: "bold" }}>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">BCA CS</a>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">BCA CS</a>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">BCA CS</a>
                                </div>

                            </li>
                        </ul>
                        <h1 className="dropdowm-toggle pt-4" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontFamily: "initial", fontWeight: "bold", fontSize: "20px" }} >Years</h1>
                        <ul className='dropdowm-menu d-block' style={{ fontFamily: "initial", fontWeight: "bold" }}>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">2023-24</a>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">2022-23</a>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">2021-22</a>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">2020-21</a>
                                </div>

                            </li>
                            <li>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <a href="" className="dropdowm-item">2019-20</a>
                                </div>

                            </li>
                        </ul>
                    </div>
                    <div className="col-md-10">
                        <div className="row">
                            {
                                projectList.map((pro) => {
                                    return (
                                        <div className="col-md-4 ">
                                            <div className="card shadow">
                                                <img src={"http://localhost:5000/" + pro.image} alt="" className='card-img-top img-fluid' style={{ height: 200 }} />
                                                <div className="card-body">
                                                    <h1 className='text-center fw-bold' style={{ fontFamily: "initial" }}>{pro.title}</h1>
                                                    <p className='text-center'>{pro.description}</p>
                                                    <a type='button' className="btn btn-success">View</a>

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