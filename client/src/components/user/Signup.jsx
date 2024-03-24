import React from 'react'
import "./Signup.css"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { enqueueSnackbar } from 'notistack';

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    cPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {
    

    const navigate = useNavigate();

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cPassword: ''
           
        },
        onSubmit: async (values, { resetForm }) => {
            // setSubmitting(true);
            console.log(values);
            resetForm()

            const res = await fetch('http://localhost:5000/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            // console.log(response.statusText);

            if (res.status === 200) {

                enqueueSnackbar("User Added Successfully", { variant: 'success' });
                navigate('/user/login');

            } else if (res.status === 401) {
                enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });

            } else {
                enqueueSnackbar("User Not Added", { variant: 'error' });
            }

        },
        validationSchema: SignupSchema
    });
    return (
        <div className='back '>
            <div className="container mt-0" >
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 d-flex justify-content-center text-white fw-bold" style={{marginTop:"60px", marginBottom:"60px"}} >
                        <form action="" className='w-80  p-5 rounded shadow border bg-gray-800 ' onSubmit={signupForm.handleSubmit}>
                            <h1 className='fs-2 fw-bold text-center text-white' style={{ fontFamily: "initial" }}>Student Signup</h1>
                            <>
                                <div className="relative">
                                    <input
                                        type="text"
                                        id='name'
                                        value={signupForm.values.name}
                                        onChange={signupForm.handleChange}
                                        className="font-white place peer py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                        placeholder="Enter Name"
                                        style={{ fontFamily: "initial" }}
                                    />
                                    {signupForm.touched.name &&
                                        <span className="text-danger">{signupForm.errors.name}</span>
                                    }
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        {/* <svg
                                            className="flex-shrink-0 size-4 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx={12} cy={7} r={4} />
                                        </svg> */}
                                        <i class="bi bi-person"></i>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="email"
                                        id='email'
                                        value={signupForm.values.email}
                                        onChange={signupForm.handleChange}
                                        className="peer  place py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                        placeholder="Enter Email"
                                        style={{ fontFamily: "initial" }}
                                    />
                                    {signupForm.touched.email &&
                                        <span className="text-danger">{signupForm.errors.email}</span>
                                    }
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        {/* <svg
                                            className="flex-shrink-0 size-4 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                                            <circle cx="16.5" cy="7.5" r=".5" />
                                        </svg> */}
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id='password'
                                        value={signupForm.values.password}
                                        onChange={signupForm.handleChange}
                                        className="peer place py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                        placeholder="Enter password"
                                        style={{ fontFamily: "initial" }}
                                    />
                                    {signupForm.touched.password &&
                                        <span className="text-danger">{signupForm.errors.password}</span>
                                    }
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        {/* <svg
                                            className="flex-shrink-0 size-4 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                                            <circle cx="16.5" cy="7.5" r=".5" />
                                        </svg> */}
                                        <i class="bi bi-key-fill"></i>
                                    </div>
                                </div>
                                <div className="relative">
                                    <input
                                        type="password"
                                        id='cPassword'
                                        value={signupForm.values.cPassword}
                                        onChange={signupForm.handleChange}
                                        className="peer place py-3 pe-0 ps-8 block w-full bg-transparent border-t-transparent border-b-2 border-x-transparent border-b-gray-200 text-sm focus:border-t-transparent focus:border-x-transparent focus:border-b-blue-500 focus:ring-0 disabled:opacity-50 disabled:pointer-events-none dark:border-b-gray-700 dark:text-gray-400 dark:focus:ring-gray-600 dark:focus:border-b-gray-600"
                                        placeholder="Enter Confirm password"
                                        style={{ fontFamily: "initial" }}
                                    />
                                    {signupForm.touched.cPassword &&
                                        <span className="text-danger">{signupForm.errors.cPassword}</span>
                                    }
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-2 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
                                        {/* <svg
                                            className="flex-shrink-0 size-4 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                                            <circle cx="16.5" cy="7.5" r=".5" />
                                        </svg> */}
                                        <i class="bi bi-key-fill"></i>
                                    </div>
                                </div>
                            </>
                            <div className='text-center mt-3' style={{ fontFamily: "initial" }}>
                                <button type='submit' className='btn btn-outline-warning px-4'>Signup</button>
                            </div>

                        </form>

                    </div>



                </div>
            </div>

        </div>
    )
}

export default Signup