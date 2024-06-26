import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const projectSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    // image: Yup.string().required('Image is required'),
    language: Yup.string().required('Language is required'),
    year: Yup.string().required('Year is required'),
    // course: Yup.string().required("course is required")

});

const SubmitProject = () => {

    const [project, setProject] = useState('');

    const uploadeProject = async (e) => {
        const file = e.target.files[0];
        setProject(file);
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

    const navigate = useNavigate();

    const addProjectForm = useFormik({
        initialValues: {
            title: "",
            description: "",
            language: "",
            course: "",
            year: "",
            image: "",
           
        },

        onSubmit: async (values, { resetForm }) => {
            values.image = project.name
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
                navigate('/user/project');
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
        <div className="flex min-h-full flex-col justify-center px-3 py-3 lg:px-8 ">
            <div className='d-flex justify-content-center'>
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
                                <input onChange={uploadeProject}  type="file" id='update-image' className="block w-full text-sm text-gray-500 
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
                                    type=""
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                   
                                >
                                    Submit
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

export default SubmitProject