import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import { Link, useNavigate } from 'react-router-dom';
import useUserContext from '../../context/UserContext';

const LoginSchema = Yup.object().shape({

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required')
});

const Login = () => {

  // for Logout
  const { setLoggedIn } = useUserContext();
  //for Logout

  const navigate = useNavigate();

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (values, { resetForm }) => {
      // alert(JSON.stringify(values));
      console.log(values);
      resetForm()

      // send request to backend/REST API
      const res = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log(res.status);
      // console.log(res.statusText);

      if (res.status === 200) {
        
        setLoggedIn(true);
        // navigate('/user/project');

        const data = await res.json();
        console.log(data);
        //to uave user data  in session ,inbuilt api- sessionstorage
        sessionStorage.setItem('isLoggedin', true);
        if(data.role === "admin"){
          sessionStorage.setItem('admin', JSON.stringify(data));
          enqueueSnackbar('Admin Loggedin Successfully', { variant: 'success' });
          navigate("/admin/adminprofile");
        }else{
          sessionStorage.setItem('user', JSON.stringify(data));
          enqueueSnackbar('User Loggedin Successfully', { variant: 'success' });
          navigate("/user/project");
        }

      } else if (res.status === 401) {
        enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });
      } else {
        enqueueSnackbar('Something went wrong', { variant: 'error' });
      }


    },
    validationSchema: LoginSchema
  });

  return (
    <div className='bg-gray-300 vh-100 flex justify-center' style={{ fontFamily: "initial" }}>
      <div className="w-full max-w-md my-10">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={loginForm.handleSubmit}>
          <h2 className="mt-10 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={loginForm.values.email}
              onChange={loginForm.handleChange}
              placeholder="Enter your email" />
          </div>
          {loginForm.touched.email && <span className="text-danger">{loginForm.errors.email}</span>}
          <div className="mb-4">
            <div className='flex items-center justify-between'>

              <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                Password
              </label>
              <div className="text-lg">
                <Link to={"/main/reset-password"} className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Forgot password?
                </Link>
              </div>
            </div>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              value={loginForm.values.password}
              onChange={loginForm.handleChange}
              placeholder="Enter your password" />
          </div>
          {loginForm.touched.password && <span className="text-danger">{loginForm.errors.password}</span>}
          <div className="flex items-center justify-between">
            <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Sign In
            </button>
          
          </div>
          <div className='text-center mt-1'>
                        <span>Create an account?</span>
                        <Link to={"/main/signup"} className='text-blue-500 ms-2 font-bold'>SignUp</Link>
                    </div>
        </form>

      </div>

    </div>


  )
}

export default Login