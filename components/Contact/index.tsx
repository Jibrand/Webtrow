// pages/contact.js
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from 'react-hot-toast';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  date: Yup.date().required('Date is required'),
  time: Yup.string().required('Time is required'),
  timezone: Yup.string().required('Time zone is required'),
  comments: Yup.string(),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      timezone: '',
      comments: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        console.log(values);
        const response = await fetch('https://webtrow.vercel.app/api', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
          alert('Request successfully recorded.')
          formik.resetForm();
        } else {
          toast.error(data.message || 'Failed to record the request.');
        }
      } catch (error) {
        console.error(error);
        alert('An unexpected error occurred.');
      }
    },
  });

  return (
    <>
      <Toaster />
      {/* <!-- ===== Contact Start ===== --> */}
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-2.5 pt-4 lg:px-6 lg:pt-6 xl:px-10 xl:pt-10">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black xl:p-15 rounded-lg"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                🚀Schedule Your Free Consultation
              </h2>

              <form onSubmit={formik.handleSubmit}>
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Full name"
                    className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${
                      formik.touched.name && formik.errors.name ? 'border-red-500' : ''
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <div>
                    <p className="text-red-500 text-xs">{formik.errors.name}</p>
                    </div>
                  )}

                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Email address"
                    className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${
                      formik.touched.email && formik.errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-xs">{formik.errors.email}</p>
                  )}
                </div>

                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="text"
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Phone number"
                    className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${
                      formik.touched.phone && formik.errors.phone ? 'border-red-500' : ''
                    }`}
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-xs">{formik.errors.phone}</p>
                  )}

                  <input
                    type="date"
                    name="date"
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Preferred Date"
                    className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${
                      formik.touched.date && formik.errors.date ? 'border-red-500' : ''
                    }`}
                  />
                  {formik.touched.date && formik.errors.date && (
                    <p className="text-red-500 text-xs">{formik.errors.date}</p>
                  )}
                </div>

                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <input
                    type="time"
                    name="time"
                    value={formik.values.time}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Preferred Time"
                    className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${
                      formik.touched.time && formik.errors.time ? 'border-red-500' : ''
                    }`}
                  />
                  {formik.touched.time && formik.errors.time && (
                    <p className="text-red-500 text-xs">{formik.errors.time}</p>
                  )}

                  <select
                    name="timezone"
                    value={formik.values.timezone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className={`w-full border-b border-stroke bg-transparent pb-3.5 focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white lg:w-1/2 ${
                      formik.touched.timezone && formik.errors.timezone ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Select Time Zone</option>
                    <option value="PST">Pacific Standard Time (PST)</option>
                    <option value="MST">Mountain Standard Time (MST)</option>
                    <option value="CST">Central Standard Time (CST)</option>
                    <option value="EST">Eastern Standard Time (EST)</option>
                    <option value="AKST">Alaska Standard Time (AKST)</option>
                    <option value="HST">Hawaii-Aleutian Standard Time (HST)</option>
                    <option value="PDT">Pacific Daylight Time (PDT)</option>
                    <option value="MDT">Mountain Daylight Time (MDT)</option>
                    <option value="CDT">Central Daylight Time (CDT)</option>
                    <option value="EDT">Eastern Daylight Time (EDT)</option>
                  </select>
                  {formik.touched.timezone && formik.errors.timezone && (
                    <p className="text-red-500 text-xs">{formik.errors.timezone}</p>
                  )}
                </div>

                <div className="mb-11.5 flex">
                  <textarea
                    name="comments"
                    value={formik.values.comments}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Additional Comments or Requests"
                    rows={4}
                    className="w-full border-b border-stroke bg-transparent focus:border-waterloo focus:placeholder:text-black focus-visible:outline-none dark:border-strokedark dark:focus:border-manatee dark:focus:placeholder:text-white"
                  ></textarea>
                </div>

                <div className="flex justify-center items-center h-full">
                  <button
                    aria-label="Schedule Free Consultation"
                    type="submit"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 rounded-full shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-700"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 rounded-full opacity-20 blur-md"></span>
                    <span className="relative z-10">Schedule Free Consultation</span>
                    <svg
                      className="relative z-10 ml-2 fill-current text-white"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 12l-8 8-1.41-1.41L13.17 12 6.59 5.41 8 4l8 8z" />
                    </svg>
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
        <Toaster/>
      </section>
      {/* <!-- ===== Contact End ===== --> */}
    </>
  );
};

export default Contact;
