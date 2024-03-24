
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required')
  });

const AdminLogin = () => {

    const navigate = useNavigate();

    const loginForm = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        onSubmit: async (values, {resetForm}) => {
          // alert(JSON.stringify(values));
          console.log(values);
          resetForm()
    
          // send request to backend/REST API
          const res = await fetch('http://localhost:5000/admin/authenticate', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
          });
    
          console.log(res.status);
          // console.log(res.statusText);
    
          if (res.status === 200) {
            enqueueSnackbar('Loggedin Successfully', { variant: 'success' });
            // setLoggedIn(true);
            navigate('/admin/adminprofile');
    
            const data = await res.json();
            console.log(data);
            //to uave user data  in session ,inbuilt api- sessionstorage
            sessionStorage.setItem('admin', JSON.stringify(data));
    
          } else if (res.status === 401) {
            enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
          }
    
    
        },
        validationSchema: LoginSchema
      });

  return (
    <div>
         <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-8">
            <div className="d-flex justify-content-center">
                <div className="card w-25 pb-4 shadow md:px-5 py-5 my-5">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 style={{ fontFamily: "initial", color: 'teal' }} className=" fs-2  text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                           Admin Login
                        </h2>
                    </div>
                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-3" action="#" method="POST" onSubmit={loginForm.handleSubmit}>
                          
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="email"
                                    className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        value={loginForm.values.email}
                                        onChange={loginForm.handleChange}
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        loginForm.touched.email &&
                                        <span className='text-danger'>{loginForm.errors.email}</span>
                                    }
                                 
                                </div>
                            </div>
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="password"
                                    className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                  Password
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        value={loginForm.values.password}
                                        onChange={loginForm.handleChange}
                                        name="password"
                                        type="password"
                                        autoComplete="password"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                     {
                                        loginForm.touched.password &&
                                        <span className='text-danger'>{loginForm.errors.password}</span>
                                    }
                                </div>
                            </div>
                       
                            {/* <label className="block">
                            <label htmlFor='uploade-image' className="sr-only" style={{fontFamily:"initial"}}>Choose profile photo</label>
                            <input onChange={uploadeVideos} type="file" id='update-image' className="block w-full text-sm text-gray-500 
                                       file:me-4 file:py-2 file:px-4
                                       file:rounded-lg file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-blue-600 file:text-white
                                       hover:file:bg-blue-700
                                       file:disabled:opacity-50 file:disabled:pointer-events-none
                                       dark:file:bg-blue-500
                                       dark:hover:file:bg-blue-400
                                       "/>
                        </label> */}

                            <div>
                                <button style={{ fontFamily: "initial" }}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                Login
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
                </div>
            </div>
    </div>
  )
}

export default AdminLogin