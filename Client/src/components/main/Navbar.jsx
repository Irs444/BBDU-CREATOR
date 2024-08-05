import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useUserContext from '../../context/UserContext';


const Navbar = () => {
  const navigate = useNavigate();
  const submit = () => {
    navigate("/user/submitproject")
  }

  const { loggedIn, logout } = useUserContext();
  console.log(loggedIn);

  const showLoggedin = () => {
    if (loggedIn) {
      return (<div className="px-3 py-2">
        <div className="container d-flex flex-wrap justify-content-end">
          <div className="text-end">
            <button onClick={submit} type="button" className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 me-2 border-none">
              Add Projects
            </button>
            <button onClick={logout} type="button" className="btn bg-red-500 hover:bg-red-600 text-white px-4 me-2 border-none">
              Logout
            </button>
          </div>
        </div>
      </div>
      );
    } else {
      return <div className="px-3 py-2">
        <div className="container d-flex flex-wrap justify-content-end  ">
          <div className="text-end ">
            <Link to={"/main/login"} type="button" className=" sm:my-2 btn btn-outline bg-blue-600 hover:bg-blue-500 text-white border-none px-4" style={{ fontFamily: "initial" }}>
              Login
            </Link>
            <Link to={"/main/signup"} type="button" className="btn btn-outline bg-blue-600 hover:bg-blue-500 text-white border-none px-4 ms-2" style={{ fontFamily: "initial" }}>
              SignUp
            </Link>
          </div>
        </div>
      </div>
    }
  }

  const showLoggedin1 = () => {
    if (loggedIn) {
      return (
        <div className='d-flex justify-between'>
          <div>
            <li >
              <Link to={"/user/project"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                <i class="bi bi-house fs-3 me-2 text-white "></i>
                Projects
              </Link>
            </li>
          </div>

        </div>
      )
    }
  }
  return (
    <div>
      <header>
        <div className="text-bg-dark">
          <div className="container">
            <div className="d-flex justify-between md:justify-between sm:justify-between">
              <div>
                <a
                  href="/"
                  className="d-flex align-items-center my-lg-0 me-lg-auto text-white text-decoration-none "
                >
                  <img src="https://bbdu.ac.in/wp-content/uploads/2020/05/2020-05-12.png" alt="" style={{ height: 40, marginTop: "10px" }} />
                </a>
              </div>
              <div>
                <ul className="nav col-12 col-lg-auto my-2 justify-content-center  text-small">
                  <li >
                    <Link to={"/main/home"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                      <i class="bi bi-house fs-3 me-2 text-white "></i>
                      Home
                    </Link>
                  </li>
                  <li className='hover:text-xl'>
                    <Link to={"/main/about"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                      <i class="bi bi-file-earmark-person fs-3 me-2"></i>
                      About
                    </Link>
                  </li>
                  <li className='hover:text-xl'>
                    <Link to={"/main/contact"} href="#" className="nav-link text-white text-xl" style={{ fontFamily: "initial" }}>
                      <i class="bi bi-person-lines-fill fs-3 me-2"></i>
                      Contact
                    </Link>
                  </li>
                  {showLoggedin1()}
                </ul>
              </div>
              <div>
                {showLoggedin()}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar