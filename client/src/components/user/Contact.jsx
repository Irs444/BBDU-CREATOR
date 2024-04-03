import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Contact = () => {

  const contactForm = useFormik({
    initialValues:{
      name:'',
      email:'',
      message:''
    },
     onSubmit: async(values, {resetForm}) => {
      console.log(values);
      resetForm()
      const res = await fetch("http://localhost:5000/contact/add",{
       method: 'POST',
       body: JSON.stringify(values),
       headers: {
        "Content-Type": "application/json"
       }
      });
      console.log(res.status);
      if(res.status === 200){
        enqueueSnackbar("Message sent successfully", {variant:"success"})
      }else{
        enqueueSnackbar("Message not sent",{variant:"warning"})
      }
     },


  });
  return (
    <div>
     
          <div className="container">
            <div className="row">
              <div className="col-md-10 mt-5">
                <h1 className='text-center fs-1' style={{fontFamily:"initial"}}>Contact Us</h1>
                <div className='flex justify-center'>
                <p className='text-center w-75'style={{fontFamily:"initial"}}>This Website is made by Irshad Ansari under the guidance of Mubassir Sir and Areeba Mam. If You have any querry about the website please contact us. The following information are given below.</p>
                </div>
              </div>
            </div>
            <div className="row mx-4 " style={{marginTop:"5rem"}}>
              <div className="col-md-6 py-5  ">
                <div className='flex mb-3'>
                <div className='me-4'>
                <i className=" fa-3x bi bi-geo-alt"></i>
                </div>
                <div style={{fontFamily:"initial"}}>
                  <h1 className='fw-bold fs-5 py-2' >Address</h1>
                  <p >Raja RamKumar Plaza, Hazratganj Lucknow</p>
                </div>
                </div>
                <div className='flex mb-3'>
                <div className='me-4'>
                <i className=" fa-3x bi bi-telephone"></i>
                </div>
                <div style={{fontFamily:"initial"}}>
                  <h1 className='fw-bold fs-5 py-2' style={{fontFamily:"initial"}}>Contact</h1>
                  <p >7497940723</p>
                </div>
                </div>
                <div className='flex'>
                <div className='me-4'>
                <i className=" fa-3x bi bi-envelope"></i>
                </div>
                <div style={{fontFamily:"initial"}}>
                  <h1 className='fw-bold fs-5 py-2' style={{fontFamily:"initial"}}>Email</h1>
                  <p >irs786had@gmail.com</p>
                </div>
                </div>
              </div>
              <div className="col-md-6" style={{fontFamily:"initial"}}>
               <div className="card w-75 p-3 rounded-0 shadow fw-bold">
                <h1 className='fs-3 ' style={{fontFamily:"initial"}}>Send Message</h1>
                <form action="" className='py-3 ' onSubmit={contactForm.handleSubmit}>
                  <div className='mb-2'>
                    <label htmlFor="" className="form-label">Full Name</label>
                    <input type="text"
                    id='name'
                    value={contactForm.values.name}
                    onChange={contactForm.handleChange}
                     className="form-control rounded" />
                  </div>
                  <div className='mb-2'>
                    <label htmlFor="" className="form-label">Email</label>
                    <input type="text"
                    id='email'
                    value={contactForm.values.email}
                    onChange={contactForm.handleChange}
                     className="form-control rounded" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="" className="form-label">Message</label>
                    <textarea name="" id="message" value={contactForm.values.message} onChange={contactForm.handleChange} cols="5" rows="5" className='form-control border border-dark'></textarea>
                  </div>
                  <div>
                  <button type="submit" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Send</button>
                  </div>
                </form>
               </div>
              </div>
            </div>
            
          </div>

    </div>
  )
}

export default Contact