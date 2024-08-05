import React from 'react'
// import "./Signup.css"
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
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
                navigate('/main/login');

            } else if (res.status === 401) {
                enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });

            } else {
                enqueueSnackbar("User Not Added", { variant: 'error' });
            }

        },
        validationSchema: SignupSchema
    });
    return (
        <div className='bg-gray-300 vh-100 flex justify-center' style={{ fontFamily: "initial" }}>
            <div className="w-full max-w-md my-10">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={signupForm.handleSubmit}>
                    <h2 className="mt-10 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign up to your account
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="name">
                            Username
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            value={signupForm.values.name}
                            onChange={signupForm.handleChange}
                            placeholder="Enter username" />
                    </div>
                    {signupForm.touched.name && <span className="text-danger">{signupForm.errors.name}</span>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            value={signupForm.values.email}
                            onChange={signupForm.handleChange}
                            placeholder="Enter your email" />
                    </div>
                    {signupForm.touched.email && <span className="text-danger">{signupForm.errors.email}</span>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            value={signupForm.values.password}
                            onChange={signupForm.handleChange}
                            placeholder="Enter your password" />
                    </div>
                    {signupForm.touched.password && <span className="text-danger">{signupForm.errors.password}</span>}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="cPassword">
                            Confirm Password
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="cPassword"
                            type="password"
                            value={signupForm.values.cPassword}
                            onChange={signupForm.handleChange}
                            placeholder="Confirm your password" />
                    </div>
                    {signupForm.touched.cPassword && <span className="text-danger">{signupForm.errors.cPassword}</span>}

                    <div className="flex items-center justify-between">
                        <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign up
                        </button>
                    </div>
                    <div className='text-center mt-1'>
                        <span>Already a member ?</span>
                        <Link to={"/main/login"} className='text-blue-500 ms-2 font-bold'>Login</Link>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default Signup