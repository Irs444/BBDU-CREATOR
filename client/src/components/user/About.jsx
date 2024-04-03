import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import * as Yup from "yup"

const feedbackSchema = Yup.object().shape({
  name:Yup.string().required(),
  email:Yup.string().email().required(),
  feedback:Yup.string().required()
});

const About = () => {

  const feedback = useFormik({
    initialValues: {
      name: '',
      email: '',
      feedback: ''
    },
    onSubmit : async(values, {resetForm}) => {
      console.log(values);
      resetForm()
   const res = await fetch("http://localhost:5000/feedback/add",{
          method:"POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type" : "application/json"
          }
        })
        if(res.status === 200) {
          enqueueSnackbar("Feedback sent successfully", {variant:"success"})
        }else{
          enqueueSnackbar("Feedback not sent", {variant:"warning" })
        }
    },
    validationSchema: feedbackSchema
  })
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 my-3">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2022/01/about-us-page-examples-1-61fd8f9784626-sej.jpg" alt="" />
          </div>
          <div className="col-md-6 my-3">
            <h1 className='text-center fs-1 fw-bold ' style={{fontFamily:'initial'}}>About Us</h1>
            <p style={{fontFamily:'initial'}}>BBDU Creator would be a website dedicated to showcasing and recognizing the best projects developed by students in the Computer Science (CS) department at Babu Banarasi Das University (BBDU). It would serve as a central platform for students to share their achievements, gain recognition for their work, and inspire others.</p>
            <h1 className='fw-bold my-2'>Features:</h1>
            <ul>
              <li><span className='fw-bold'>1. Project Submission:</span> Students can submit their CS projects to the website. This could involve a description of the project, its functionalities, screenshots, or even a link to a live demo.</li>
              <li><span className='fw-bold'>2. Project Gallery:</span> All submitted projects would be displayed in a well-organized gallery. This would allow visitors to browse through various projects and learn about the innovative work being done by BBDU CS students.</li>
              <li><span className='fw-bold'>3. Faculty/Industry Reviews:</span> Faculty members and industry professionals could be invited to review submitted projects and provide valuable feedback. This would not only be beneficial for the students but also showcase the quality of projects coming out of BBDU's CS program.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row ">
          <div className="col ">
            <h1 className='text-center fs-1 fw-bold my-3' style={{fontFamily:'initial'}}>Feedback Form</h1>
            <div className='d-flex justify-content-center'>
              <div className="card w-75 p-4 d-flex justify-content-center shadow">
            <form action="" className='' onSubmit={feedback.handleSubmit}>
              <div className="mb-2">
              <label htmlFor="" className="form-label fw-bold" style={{fontFamily:"initial"}}>Name</label>
              <input type="text" 
              id='name' value={feedback.values.name} onChange={feedback.handleChange} className="form-control rounded" />
              {
                feedback.touched.name &&
                <span className="text-danger">{feedback.errors.name}</span>
              }
              </div>
              <div className="mb-2">
              <label htmlFor="" className="form-label fw-bold" style={{fontFamily:"initial"}}>Email</label>
              <input type="email" id='email' value={feedback.values.email} onChange={feedback.handleChange} className="form-control rounded" />
              {
                feedback.touched.email &&
                <span className="text-danger">{feedback.errors.email}</span>
              }
              </div>
              <div className="mb-2">
                <label htmlFor="" className="form-label fw-bold" style={{fontFamily:"initial"}}>Feedback</label>
                <textarea name="" id="feedback" value={feedback.values.feedback} onChange={feedback.handleChange} cols="10" rows="10" className='form-control outline outline-1'></textarea>
                {
                feedback.touched.feedback &&
                <span className="text-danger">{feedback.errors.feedback}</span>
              }
              </div>
              <div className='text-center my-3'>
                <button type='submit' className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' style={{fontFamily:"initial"}}>Send Feedback</button>
              </div>
            </form>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About