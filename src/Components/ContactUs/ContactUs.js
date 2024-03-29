import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { signUpSchema } from "../../Schema";
import http from "../../Service/http";

const initialValues = {
  full_name: "",
  email: "",
  message: "",
}

const ContactUs = () => {
  const handleSubmit = (values, action) => {
    try {
      const response = http({
        url: '.contact_us',
        method: 'POST',
        data: values
      })
      if (response) {
        console.log('success', response)
        action.resetForm();
      }
    } catch (error) {
      console.error('error in api', error)
    }
  }

  return (
    <>
      <div className="h-full w-full mx-auto max-w-[1800px]">
        <div className="md:pb-20 mt-20 bg-[#FAFAFA] md:px-0 px-7">
          <div className="md:pt-32 pt-5 items-center md:text-center">
            <p className=" md:text-4xl text-3xl font-thin md:tracking-widest">
              HAVE QUESTIONS?
            </p>
            <p className="border-bgblue w-11 md:mx-[48.3%] border-t-[3px] mt-2"></p>
            <p className="pt-5 tracking-[2px] md:text-[14px] text-[17px]">
              We have answers. Feel free to leave a message, and we will get back
              to you as soon as possible.
            </p>
          </div>
          <div className="lg:px-[32%] md:px-[23%] mt-20">
            <Formik
              initialValues={initialValues}
              validationSchema={signUpSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                {/* NAME */}
                <div className="relative z-0 w-full mb-6 group">
                  <Field
                    type="text"
                    autoComplete="off"
                    name="full_name"
                    id="full_name"
                    className="block py-2.5 px-0 w-full text-sm
              text-gray-400 bg-transparent border-0 border-b border-gray-300 appearance-none
              dark:border-gray-600 dark:focus:border-bgblue focus:outline-none focus:ring-0 focus:border-bgblue
                peer" placeholder=" " />
                  <ErrorMessage name="full_name" component="p" className="text-red-500 text-sm" />
                  <label
                    htmlFor="full_name"
                    className="peer-focus:font-medium absolute text-gray-400 tracking-widest  font-normal text-[15px]
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgblue
              peer-focus:dark:text-bgblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6">NAME</label>
                </div>
                {/* Email */}
                <div className="relative z-0 w-full mb-6 group">
                  <Field
                    type="email"
                    autoComplete="off"
                    name="email"
                    id="email"
                    className="block py-2.5 px-0 w-full text-sm
              text-gray-400 bg-transparent border-0 border-b border-gray-300 appearance-none 
              dark:border-gray-600 dark:focus:border-bgblue focus:outline-none focus:ring-0 focus:border-bgblue
                peer" placeholder=" " />
                  <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />
                  <label
                    htmlFor="email"
                    className="peer-focus:font-medium absolute  text-gray-400 
                duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgblue
              peer-focus:dark:text-bgblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                peer-focus:scale-75 peer-focus:-translate-y-6">
                    EMAIL
                  </label>
                </div>
                {/* MESSAGE */}
                <div className="relative z-0 w-full mb-6 group">
                  <Field
                    as="textarea"
                    name="message"
                    id="message"
                    cols="30"
                    rows="4"
                    className="block py-2.5 px-0 w-full text-sm
              text-gray-400 bg-transparent border-0 border-b border-gray-300 appearance-none 
              dark:border-gray-600 dark:focus:border-bgblue focus:outline-none focus:ring-0 focus:border-bgblue
                peer"></Field>
                  <ErrorMessage name="message" component="p" className="text-red-500 text-sm" />
                  <label
                    htmlFor="message"
                    className="peer-focus:font-medium absolute text-gray-400 dark:text-gray-400 text-[20px] peer-focus:text-sm
                duration-300 transform translate-y-16 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-bgblue
               peer-focus:dark:text-bgblue peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-10 
                peer-focus:scale-75 peer-focus:-translate-y-6 peer-placeholder-shown:top-20"
                  >
                    MESSAGE
                  </label>
                </div>
                <div className="md:text-center">
                  <button
                    className="md:w-24  w-[147px] md:h-10 h-12 md:text-[11px] text-[20px] md:mt-16 font-bold md:font-extrabold border-[2px]
              border-bgblue bg-bgblue hover:bg-white duration-700 text-white hover:text-bgblue tracking-[2px]"
                  >
                    SEND
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;