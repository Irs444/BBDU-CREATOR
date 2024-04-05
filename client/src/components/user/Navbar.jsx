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
      return (<div className="px-3 py-2 border-bottom  shadow ">
        <div className="container d-flex flex-wrap justify-content-end">
          {/* <form
          className="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto "
          role="search"
        >
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search..."
            aria-label="Search"
          />
        </form> */}
          <div className="text-end">
            <button onClick={logout} type="button" className="btn bg-red-500 hover:bg-red-500 text-white px-4 me-2">
              Logout
            </button>
            <button onClick={submit} type="button" className="btn bg-blue-500 hover:bg-blue-500 text-white px-4 me-2">
              Add Projects
            </button>

          </div>
        </div>
      </div>
      );
    } else {
      return <div className="px-3 py-2 border-bottom  shadow ">
        <div className="container d-flex flex-wrap justify-content-end">

          <div className="text-end">
            <Link to={"/user/login"} type="button" className="btn btn-outline btn-dark px-4 me-2" style={{ fontFamily: "initial" }}>
              Login
            </Link>
            <Link to={"/user/signup"} type="button" className="btn btn-outline btn-dark" style={{ fontFamily: "initial" }}>
              SignUp
            </Link>
          </div>
        </div>
      </div>
    }
  }
  return (
    <div>
      <header>
        <div className="px-3 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center  justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none ms-5"
              >
                <img src="https://bbdu.ac.in/wp-content/uploads/2020/05/2020-05-12.png" alt="" style={{ height: 40 }} />
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>

                  <Link to={"/user/home"} href="#" className="nav-link text-white" style={{ fontFamily: "initial" }}>
                    <i class="bi bi-house fs-3 me-2 text-white"></i>


                    Home
                  </Link>
                </li>

                <li>

                  <Link to={"/user/project"} href="#" className="nav-link text-white" style={{ fontFamily: "initial" }}>
                    <i class="bi bi-journals fs-3 me-2"></i>

                    Projects
                  </Link>
                </li>
                <li>

                  <Link to={"/user/about"} href="#" className="nav-link text-white" style={{ fontFamily: "initial" }}>
                    <i class="bi bi-file-earmark-person fs-3 me-2"></i>

                    About
                  </Link>
                </li>
                <li>

                  <Link to={"/user/contact"} href="#" className="nav-link text-white" style={{ fontFamily: "initial" }}>
                    <i class="bi bi-person-lines-fill fs-3 me-2"></i>

                    Contact
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </div>

      </header>
      {showLoggedin()}

    </div>
  )
}

export default Navbar