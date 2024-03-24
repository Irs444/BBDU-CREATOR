import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

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
        .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    contact: Yup.string().required('Required'),
    address: Yup.string().required('Required'),
    department: Yup.string().required('Required'),

});

const AdminSignup = () => {

    const [setProfile, setselProfile] = useState("");

    const uploadeProfile = async (e) => {
        const file = e.target.files[0];
        setselProfile(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("Profile uploaded");
                toast.success('Profile Uploaded!!');
            }
        });


    }

    const navigate = useNavigate();

    const signupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cPassword: '',
            contact: '',
            address: '',
            department: '',
            image: ""

        },
        onSubmit: async (values, { resetForm }) => {
            // setSubmitting(true);
            values.image = setProfile.name
            console.log(values);
            resetForm()

            const res = await fetch('http://localhost:5000/admin/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);
            // console.log(response.statusText);

            if (res.status === 200) {

                enqueueSnackbar("Admin Added Successfully", { variant: 'success' });
                navigate('/user/adminlogin');

            } else if (res.status === 401) {
                enqueueSnackbar('Email or Password is incorrect', { variant: 'error' });

            } else {
                enqueueSnackbar("Admin Not Added", { variant: 'error' });
            }

        },
        validationSchema: SignupSchema
    });

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-8">
                <div className="d-flex justify-content-center">
                    <div className="card w-50 pb-4 shadow md:px-5">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                            <h2 style={{ fontFamily: "initial", color: 'teal' }} className=" fs-2 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Admin Signup
                            </h2>
                        </div>
                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-3" action="#" method="POST" onSubmit={signupForm.handleSubmit}>
                                <div>
                                    <label style={{ fontFamily: "initial" }}
                                        htmlFor="name"
                                        className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Full Name
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name"
                                            value={signupForm.values.name}
                                            onChange={signupForm.handleChange}
                                            name="name"
                                            type="name"
                                            autoComplete="name"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.name &&
                                            <span className='text-danger'>{signupForm.errors.name}</span>
                                        }

                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label style={{ fontFamily: "initial" }}
                                            htmlFor="department"
                                            className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Department
                                        </label>
                                        <div className="text-sm">

                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="department"
                                            value={signupForm.values.department}
                                            onChange={signupForm.handleChange}
                                            name="department"
                                            type="department"
                                            autoComplete="department"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.department &&
                                            <span className='text-danger'>{signupForm.errors.department}</span>
                                        }
                                    </div>

                                </div>
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
                                            value={signupForm.values.email}
                                            onChange={signupForm.handleChange}
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.email &&
                                            <span className='text-danger'>{signupForm.errors.email}</span>
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
                                            value={signupForm.values.password}
                                            onChange={signupForm.handleChange}
                                            name="password"
                                            type="password"
                                            autoComplete="password"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.password &&
                                            <span className='text-danger'>{signupForm.errors.password}</span>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontFamily: "initial" }}
                                        htmlFor="cPassword"
                                        className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Reapeat Pasword
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="cPassword"
                                            value={signupForm.values.cPassword}
                                            onChange={signupForm.handleChange}
                                            name="cPassword"
                                            type="cPassword"
                                            autoComplete="cPassword"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.cPassword &&
                                            <span className='text-danger'>{signupForm.errors.cPassword}</span>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontFamily: "initial" }}
                                        htmlFor="contact"
                                        className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Contact
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="contact"
                                            value={signupForm.values.contact}
                                            onChange={signupForm.handleChange}
                                            name="contact"
                                            type="contact"
                                            autoComplete="contact"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.contact &&
                                            <span className='text-danger'>{signupForm.errors.contact}</span>
                                        }
                                    </div>
                                </div>
                                <div>
                                    <label style={{ fontFamily: "initial" }}
                                        htmlFor="address"
                                        className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="address"
                                            value={signupForm.values.address}
                                            onChange={signupForm.handleChange}
                                            name="address"
                                            type="address"
                                            autoComplete="address"
                                            required=""
                                            className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        {
                                            signupForm.touched.address &&
                                            <span className='text-danger'>{signupForm.errors.address}</span>
                                        }
                                    </div>
                                </div>
                                <label className="block">
                                    <label htmlFor='uploade-image' className="sr-only" style={{ fontFamily: "initial" }}>Choose profile photo</label>
                                    <input onChange={uploadeProfile} type="file" id='update-image' className="block w-full text-sm text-gray-500 
                                       file:me-4 file:py-2 file:px-4
                                       file:rounded-lg file:border-0
                                       file:text-sm file:font-semibold
                                       file:bg-blue-600 file:text-white
                                       hover:file:bg-blue-700
                                       file:disabled:opacity-50 file:disabled:pointer-events-none
                                       dark:file:bg-blue-500
                                       dark:hover:file:bg-blue-400
                                       "/>
                                </label>
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
                                        Signup
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

export default AdminSignup