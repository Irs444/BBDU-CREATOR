import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import toast from 'react-hot-toast';

const projectSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    department: Yup.string().required('Department is required'),
    year: Yup.string().required('Year is required'),
    course: Yup.string().required("course is required")

});


const AddProject = () => {

    const [selProject, setselProject] = useState('');

    const uploadeProject = async (e) => {
        const file = e.target.files[0];
        setselProject(file);
        const fd = new FormData();
        fd.append("myfile", file);
        fetch("http://localhost:5000/util/uploadfile", {
            method: "POST",
            body: fd,
        }).then((res) => {
            if (res.status === 200) {
                console.log("file uploaded");
                toast.success('File Uploaded!!');
            }
        });


    }

    // const uploadeVideos = async (e) => {
    //     const file = e.target.files[0];
    //     setselVideo(file);
    //     const fd = new FormData();
    //     fd.append("myfile", file);
    //     fetch("http://localhost:5000/util/uploadfile", {
    //         method: "POST",
    //         body: fd,
    //     }).then((res) => {
    //         if (res.status === 200) {
    //             console.log("file uploaded");
    //             toast.success('File Uploaded!!');
    //         }
    //     });


    // }

    const navigate = useNavigate();

    const addProjectForm = useFormik({
        initialValues: {
            title: "",
            description: "",
            course: "",
            year: "",
            image: "",
            department: ""
        },

        onSubmit: async (values, { resetForm }) => {
            values.image = selProject.name
            console.log(values);
            resetForm()
            const res = await fetch("http://localhost:5000/projects/add", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            console.log(res.status);

            if (res.status === 200) {
                enqueueSnackbar("Project added successfully", { variant: "success" });
            } else if (res.status === 400) {
                enqueueSnackbar("Something went wrong", { variant: "danger" });
            } else {
                enqueueSnackbar("Something went wrong", { variant: "danger" });
            }
        },
        validationSchema: projectSchema
    })
    return (
        <div>
            {/* <div className="flex min-h-full flex-col justify-center px-6 py-3 lg:px-8">
                <div className="card w-50 pb-4 shadow md:px-5">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">

                        <h2 style={{ fontFamily: "initial", color: 'teal' }} className=" fs-2 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Add Project
                        </h2>
                    </div>
                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-3" action="#" method="POST" onSubmit={addProjectForm.handleSubmit}>
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="title"
                                    className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Title
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="title"
                                        value={addProjectForm.values.title}
                                        onChange={addProjectForm.handleChange}
                                        name="title"
                                        type="title"
                                        autoComplete="title"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        addProjectForm.touched.title &&
                                        <span className="text-danger">{addProjectForm.errors.title}</span>
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label style={{ fontFamily: "initial" }}
                                        htmlFor="description"
                                        className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Description
                                    </label>
                                    <div className="text-sm">

                                    </div>
                                </div>
                                <div className="mt-2">
                                    <textarea
                                        id="description"
                                        value={addProjectForm.values.description}
                                        onChange={addProjectForm.handleChange}
                                        name="description"
                                        type="description"
                                        autoComplete="description"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        addProjectForm.touched.description &&
                                        <span className="text-danger">{addProjectForm.errors.description}</span>
                                    }
                                </div>

                            </div>
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="price"
                                    className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Language
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="language"
                                        value={addProjectForm.values.language}
                                        onChange={addProjectForm.handleChange}
                                        name="language"
                                        type="language"
                                        autoComplete="price"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        addProjectForm.touched.language &&
                                        <span className="text-danger">{addProjectForm.errors.language}</span>
                                    }
                                </div>
                            </div>
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="price"
                                    className=" fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Department
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="department"
                                        value={addProjectForm.values.department}
                                        onChange={addProjectForm.handleChange}
                                        name="department"
                                        type="department"
                                        autoComplete="price"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        addProjectForm.touched.department &&
                                        <span className="text-danger">{addProjectForm.errors.department}</span>
                                    }
                                </div>
                            </div>
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="category"
                                    className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Course
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="course"
                                        value={addProjectForm.values.course}
                                        onChange={addProjectForm.handleChange}
                                        name="course"
                                        type="course"
                                        autoComplete="course"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        addProjectForm.touched.course &&
                                        <span className="text-danger">{addProjectForm.errors.course}</span>
                                    }
                                </div>
                            </div>
                            <div>
                                <label style={{ fontFamily: "initial" }}
                                    htmlFor="category"
                                    className="fw-bold block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Year
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="year"
                                        value={addProjectForm.values.year}
                                        onChange={addProjectForm.handleChange}
                                        name="year"
                                        type="year"
                                        autoComplete="year"
                                        required=""
                                        className=" outline  outline-1 block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                    {
                                        addProjectForm.touched.year &&
                                        <span className="text-danger">{addProjectForm.errors.year}</span>
                                    }
                                </div>
                            </div>
                            <label className="block">
                                <label htmlFor='uploade-image' className="sr-only" style={{ fontFamily: "initial" }}>Choose profile photo</label>
                                <input onChange={uploadeProject} type="file" id='update-image' className="block w-full text-sm text-gray-500 
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
                            <label className="block">
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
                        </label>

                            <div>
                                <button style={{ fontFamily: "initial" }}
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Add Project
                                </button>
                            </div>
                        </form>

                    </div>
                </div>
            </div> */}
            <div className='bg-gray-300  flex justify-center' style={{ fontFamily: "initial" }}>
                <div className="w-full max-w-lg my-10">
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={addProjectForm.handleSubmit}>
                        <h2 className="mt-8 mb-3 text-center text-3xl font-bold leading-9 tracking-tight text-gray-900">
                            Add Projects
                        </h2>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                value={addProjectForm.values.title}
                                onChange={addProjectForm.handleChange}
                                placeholder="Enter title" />
                        </div>
                        {addProjectForm.touched.title && <span className="text-danger">{addProjectForm.errors.title}</span>}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea rows={4} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="description"
                                type="text"
                                value={addProjectForm.values.description}
                                onChange={addProjectForm.handleChange}
                                placeholder="Enter your description" />
                        </div>
                        {addProjectForm.touched.description && <span className="text-danger">{addProjectForm.errors.description}</span>}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="department">
                                Department
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    id="department"

                                    type="text"

                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-start ">

                                    <select
                                        id="department"
                                        value={addProjectForm.values.department}
                                        onChange={addProjectForm.handleChange}
                                        className="h-full w-full  rounded-md border-0 bg-transparent ms-2 py-0 pl-2 pr-80 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option>Web Development</option>
                                        <option>Data Science</option>
                                        <option>Data Analytics</option>
                                        <option>AI</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        {addProjectForm.touched.department && <span className="text-danger">{addProjectForm.errors.department}</span>}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="year">
                                Year
                            </label>
                            <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                    id="year"
                                    type='text'
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                                <div className="absolute inset-y-0 left-0 flex items-start ">

                                    <select
                                        id="year"
                                        value={addProjectForm.values.year}
                                        onChange={addProjectForm.handleChange}
                                        className="h-full w-full  rounded-md border-0 bg-transparent py-0 pl-2 ms-2 pr-96 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                                    >
                                        <option>2023-24</option>
                                        <option>2022-23</option>
                                        <option>2021-22</option>
                                        <option>2020-21</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                        {addProjectForm.touched.year && <span className="text-danger">{addProjectForm.errors.year}</span>}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="course">
                                Course
                            </label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="course"
                                type="text"
                                value={addProjectForm.values.course}
                                onChange={addProjectForm.handleChange}
                                placeholder="Enter the course" />
                        </div>
                        {addProjectForm.touched.course && <span className="text-danger">{addProjectForm.errors.course}</span>}
                        <div className="mb-4">
                            <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor="image">
                                Select Images
                            </label>
                            <input onChange={uploadeProject} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="image"
                                type="file"

                                placeholder="Enter the course" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit" className=" font-black w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add Project</button>

                        </div>

                    </form>

                </div>

            </div>

        </div>
    )
}

export default AddProject