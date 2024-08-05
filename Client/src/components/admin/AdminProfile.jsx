import React, { useState } from "react";
import { useFormik } from "formik";
import { enqueueSnackbar } from "notistack";
import { Navigate, useNavigate } from "react-router-dom";


const UserProfile = () => {
  const navigate = useNavigate();
  const [currentAdmin, setCurrentAdmin] = useState(
    JSON.parse(sessionStorage.getItem("admin"))
  );

  const [passwordHidden, setPasswordHidden] = useState(true);

  const [selImage, setSelImage] = useState("");

  const userForm = useFormik({
    initialValues: currentAdmin,
    onSubmit: async (data) => {
      values.image = selImage.name
      console.log(data);
      const res = await fetch("http://localhost:5000" + "/admin/update/" + currentAdmin._id, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.status);
      const userdata = (await res.json()).result;
      console.log(userdata);
      setCurrentAdmin(userdata);
      sessionStorage.setItem("admin", JSON.stringify(userdata));
    },

  })

  const uploadProfileImage = (e) => {
    const file = e.target.files[0];
    setSelImage(file.name);
    const fd = new FormData();
    fd.append("myfile", file);
    fetch(url + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
        updateProfile({ avatar: file.name });
      }
    });
  };

  const deleteAccount = async (id) => {
    console.log(id);

    const res = await fetch('http://localhost:5000/admin/delete/' + id, { method: 'DELETE' });
    console.log(res.status);
    if (res.status === 200) {
      // fetchPlanningServices();
      // alert.success('User Deleted Successfully');
      enqueueSnackbar('Admin Deleted Successfully', { variant: 'danger' });
    }
  }

  const createAccount = () => {
    navigate("/user/adminsignup")
  }



  return (
    <div>
      {/* <div className="container py-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-light py-3">
                <h5 className="mb-0">Summary</h5>
              </div>
              <div className="card-body">
                <img
                  height={200}
                  className="border-rounded d-block m-auto"
                  src={
                    currentAdmin.avatar &&
                      `${"http://localhost:5000"}/${currentAdmin.avatar}`
                  }
                  alt=""
                />
                <label
                  className="btn btn-outline-secondary w-100 mt-3"
                  htmlFor="upload-image"
                >
                  {" "}
                  <i class="fas fa-pen"></i>&nbsp;Edit{" "}
                </label>
                <input
                  type="file"
                  hidden
                  onChange={uploadProfileImage}
                  id="upload-image"
                />
                <p className="text-center text-dark">
                  Hello <span className="h4">{currentAdmin.name}</span>! Welcome
                  Back
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Email
                    <span className="fw-bold">{currentAdmin.email}</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Password
                    {passwordHidden ? (
                      <span className="fw-bold">****</span>
                    ) : (
                      <span className="fw-bold">{currentAdmin.password}</span>
                    )}
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => setPasswordHidden(!passwordHidden)}
                    >
                      {passwordHidden ? "Show" : "Hide"}
                    </button>
                  </li>
                  
                </ul>
                <button
                  type="button"
                  className="btn btn-danger btn-block"
                  onClick={() => deleteAccount(currentAdmin._id)}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8 mb-4">
            <div className="card mb-4">
              <div className="card-header bg-primary text-light py-3">
                <h5 className="mb-0">All details</h5>
              </div>
              <div className="card-body">
                <form>
                 
                  <div className="row mb-4">
                    <div className="col">
                      <div className="">
                      <label className="form-label fw-bold" htmlFor="form7Example1">
                           Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          onChange={userForm.handleChange}
                          value={userForm.values.name}
                          className="form-control"
                        />
                        
                      </div>
                    </div>
                  
                  </div>
                  
                 
                  <div className=" mb-4">
                  <label className="form-label fw-bold" htmlFor="form7Example4">
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      onChange={userForm.handleChange}
                      value={userForm.values.address}
                      className="form-control"
                    />
                   
                  </div>
                  
                  <div className=" mb-4">
                  <label className="form-label fw-bold" htmlFor="form7Example5">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      onChange={userForm.handleChange}
                      value={userForm.values.email} 
                      className="form-control"
                    />
                    
                  </div>
                
                    <label className="form-label fw-bold" htmlFor="form7Example6">
                      Phone
                    </label>
                  <div className="form-outline mb-4">
                    <input
                      type="number"
                      id="contact"
                      onChange={userForm.handleChange}
                      value={userForm.values.contact}
                      className="form-control"
                    />
                  </div>
                  
                    <label className="form-label fw-bold" htmlFor="form7Example7">
                      Additional information
                    </label>
                  <div className="form-outline mb-4">
                    <textarea
                      className="form-control"
                      id="form7Example7"
                      rows={4}
                      defaultValue={""}
                    />
                  </div>
                  
                  <div className="form-check d-flex justify-content-center ">
                   
                    <button onClick={createAccount} className="btn btn-primary" type="submit" htmlFor="form7Example8">
                      Create an account?
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <main class="profile-page">
        <section class="relative block h-500-px">
          <div class="absolute top-0 w-full h-full bg-center bg-cover" >
            <span id="blackOverlay" class="w-full h-full absolute opacity-50 bg-black"></span>
          </div>
          <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ translate: "translateZ(0px)" }} >
            <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
              <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
          </div>
        </section>
        <section class="relative py-16 bg-blueGray-200">
          <div class="container mx-auto px-4">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div class="px-6">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div class="relative">
                      <img alt="..." src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" />
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div class="py-6 px-3 mt-32 sm:mt-0">
                      <button class="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                        Connect
                      </button>
                    </div>
                  </div>
                  <div class="w-full lg:w-4/12 px-4 lg:order-1">
                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">22</span><span class="text-sm text-blueGray-400">Friends</span>
                      </div>
                      <div class="mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">10</span><span class="text-sm text-blueGray-400">Photos</span>
                      </div>
                      <div class="lg:mr-4 p-3 text-center">
                        <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">89</span><span class="text-sm text-blueGray-400">Comments</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-center mt-12">
                  <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {currentAdmin.name}
                  </h3>
                  <div class="text-xl leading-normal mt-0 mb-2 text-blueGray-400 font-bold ">
                  <i class="fa-solid fa-envelope me-2"></i>
                    {currentAdmin.email}
                  </div>
                  <div class="mb-2 text-blueGray-600 mt-10">
                    <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Solution Manager - Creative Tim Officer
                  </div>
                  <div class="mb-2 text-blueGray-600">
                    <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>University of Computer Science
                  </div>
                </div>
                <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full lg:w-9/12 px-4">
                      <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                        An artist of considerable range, Jenna the name taken by
                        Melbourne-raised, Brooklyn-based Nick Murphy writes,
                        performs and records all of his own music, giving it a
                        warm, intimate feel with a solid groove structure. An
                        artist of considerable range.
                      </p>
                      <a href="#pablo" class="font-normal text-pink-500">Show more</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer class="relative bg-blueGray-200 pt-8 pb-6 mt-8">
            <div class="container mx-auto px-4">
              <div class="flex flex-wrap items-center md:justify-between justify-center">
                <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                  <div class="text-sm text-blueGray-500 font-semibold py-1">
                   
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </section>
      </main>
      
    </div>
  );
};

export default UserProfile;