import { useFormik } from 'formik'
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import { Button, Input, Textarea, Typography } from "@material-tailwind/react";

const Contact = () => {

  const contactForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      resetForm()
      const res = await fetch("http://localhost:5000/contact/add", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json"
        }
      });
      console.log(res.status);
      if (res.status === 200) {
        enqueueSnackbar("Message sent successfully", { variant: "success" })
      } else {
        enqueueSnackbar("Message not sent", { variant: "warning" })
      }
    },


  });
  return (
    <div>
      <section className="px-8 py-8 lg:py-16" style={{ fontFamily: "initial" }}>
        <div className="container mx-auto text-center">
          <Typography
            variant="h5"
            color="blue-gray"
            className="mb-4 !text-base lg:!text-2xl"
          >
            Contact Us
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:!text-5xl"
          >
            We&apos;re Here to Help
          </Typography>
          <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
            Whether it&apos;s a question about our services, a request for
            technical assistance, or suggestions for improvement, our team is
            eager to hear from you.
          </Typography>
          <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-center">
            <img
              src="https://wallpapercave.com/wp/wp10007383.jpg"
              alt="map"
              className=" h-full lg:max-h-[510px]"
            />
            <form onSubmit={contactForm.handleSubmit}
              action="#"
              className="flex flex-col gap-4 lg:max-w-xl ms-5"
            >

              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="enter your name"
                  name="name"
                  value={contactForm.values.name}
                  onChange={contactForm.handleChange}
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              {contactForm.touched.name && <span className="text-danger">{contactForm.errors.name}</span>}
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Email
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="enter your email"
                  name="email"
                  value={contactForm.values.email}
                  onChange={contactForm.handleChange}
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              {contactForm.touched.email && <span className="text-danger">{contactForm.errors.email}</span>}
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Your Message
                </Typography>
                <Textarea
                  rows={6}
                  color="gray"
                  placeholder="message......"
                  name="message"
                  value={contactForm.values.message}
                  onChange={contactForm.handleChange}
                  className="focus:border-t-gray-900 rounded"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
                {contactForm.touched.message && <span className="text-danger">{contactForm.errors.message}</span>}
              </div>
              <Button type='submit' className="w-full" color="gray">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact