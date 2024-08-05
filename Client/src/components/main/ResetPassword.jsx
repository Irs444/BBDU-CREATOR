import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ResetPassword = () => {

    const emailRef = useRef(null);
    const otpRef = useRef(null);
    const [verifiedUser, setVerifiedUser] = useState(null);

    const [showForm, setShowForm] = useState(false);

    const navigate = useNavigate();

    const checkMailExists = async () => {
        const res = await fetch(`http://localhost:5000/user/getbyemail/${emailRef.current.value}`);
        // console.log(res.status);
        const data = await res.json();
        // console.log(data);
        setVerifiedUser(data);
        return res.status === 200;
    }

    const sendOTP = async () => {
        if (!await checkMailExists()) {
            enqueueSnackbar('Email not registered', { variant: 'error' });
            return;
        }
        const res = await fetch(`http://localhost:5000/util/sendotp`, {
            method: 'POST',
            body: JSON.stringify({ email: emailRef.current.value }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(res.status);
        if (res.status === 201) {
            enqueueSnackbar('OTP sent successfully', { variant: 'success' });
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const verifyOTP = async () => {
        const res = await fetch(`http://localhost:5000/util/verifyotp/${emailRef.current.value}/${otpRef.current.value}`);
        // console.log(res.status);
        if (res.status === 200) {
            setShowForm(true);
        } else {
            enqueueSnackbar('Invalid OTP', { variant: 'error' });
        }
    }

    const updatePassword = async (values) => {
        const res = await fetch(`http://localhost:5000/user/update/${verifiedUser._id}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(res.status);
        if (res.status === 200) {
            enqueueSnackbar('Password updated successfully', { variant: 'success' });
            navigate("/main/login")
        } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' });
        }
    }

    const resetForm = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        onSubmit: updatePassword
    });


    return (
        <div className='bg-gray-300 vh-100 flex justify-center' style={{ fontFamily: "initial" }}>
            <div className="w-full max-w-md my-10">
                <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
                    <h2 className="mt-10 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                        Reset your password
                    </h2>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="text"
                            ref={emailRef}
                            placeholder="Enter your email" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button onClick={sendOTP} className=" w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Send OTP
                        </button>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                            Enter OTP
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            ref={otpRef}
                            placeholder="Enter your OTP" />
                    </div>

                    <div className="flex items-center justify-between">
                        <button onClick={verifyOTP} className=" w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Verify OTP
                        </button>
                    </div>

                    {
                        showForm && (
                            <form onSubmit={resetForm.handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        value={resetForm.values.password}
                                        onChange={resetForm.handleChange}
                                        placeholder="Enter your new password" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="confirmPassword">
                                        Confirm Password
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                        id="confirmPassword"
                                        type="password"
                                        value={resetForm.values.confirmPassword}
                                        onChange={resetForm.handleChange}
                                        placeholder="Enter your email" />
                                </div>

                                <div className="flex items-center justify-between">
                                    <button className=" w-full bg-blue-500 hover:bg-blue-700 text-white text-lg font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        )
                    }


                </div>

            </div>

        </div>
    )
}

export default ResetPassword