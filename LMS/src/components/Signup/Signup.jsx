import React from 'react'
import style from './Signup.module.css'
import { Link } from 'react-router-dom'
import { Formik, useFormik } from 'formik'
import * as yup from "yup"


export default function Signup() {
  
  function handleRegister(values){
    console.log(values);
  }

  let validationSchema = yup.object().shape({
    name : yup.string().required("name is required").min(3,"min length is 3 letters"),
    email : yup.string().email("not valid email").matches(/(gmail|yahoo)(\.com)$/,"gmail not valid ").required("email is required"),
    password : yup.string().required("password is required").min(6,"pass min length is 6"),
    rePassword : yup
    .string()
    .oneOf([yup.ref("password")] , "not matched with password")
    .required("rePassword is required"),
    phone : yup.string().matches(/^01[0125][0-9]{8}$/ ,"phone not valid").required("phone is required")
  })

  let formik=useFormik({
    initialValues :{
      name : "" , 
      email : "" , 
      password : "" ,
      rePassword : "",
      phone : "",
    },
    validationSchema : validationSchema,
    onSubmit :handleRegister,
  })


  return (
    <div className=''>
  <h2 className='font-bold text-3xl text-center mt-20 mb-4 text-emerald-500'>Register Now <i className="text-emerald-500 fa-regular fa-circle-user ml-2"></i></h2>
      <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto md:w-1/2 w-full">
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="text" 
      name="name" 
      value={formik.values.name}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="name" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" 
      placeholder=" " 
       />
      <label htmlFor="name" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>
      {formik.errors.name && formik.touched.name ? <div className="p-2  my-1 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
       <span className="font-medium">{formik.errors.name}</span> 
     </div> : null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="email" 
      name="email" 
      value={formik.values.email}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="email" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" 
      placeholder=" " 
       />
      <label htmlFor="email" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Email</label>
      {formik.errors.email && formik.touched.email ? <div className="p-2  my-1 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
       <span className="font-medium">{formik.errors.email}</span> 
     </div> : null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="tel" 
      name="phone" 
      value={formik.values.phone}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="phone" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" 
      placeholder=" " 
       />
      <label htmlFor="phone" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Phone</label>
      {formik.errors.phone && formik.touched.phone ? <div className="p-2  my-1 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
       <span className="font-medium">{formik.errors.phone}</span> 
     </div> : null}
  </div>
  <div className="relative z-0 w-full mb-5 group">
      <input 
      type="password" 
      name="password" 
      value={formik.values.password}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="password" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" 
      placeholder=" " 
       />
      <label htmlFor="password" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Password</label>
      {formik.errors.password && formik.touched.password ? <div className="p-2  my-1 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
       <span className="font-medium">{formik.errors.password}</span> 
     </div> : null}
  </div>
  <div className="relative z-0 w-full mb-5  group">
      <input 
      type="password" 
      name="rePassword" 
      value={formik.values.rePassword}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      id="rePassword" 
      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-emerald-600 peer" 
      placeholder=" " 
       />
      <label htmlFor="rePassword" className="peer-focus:font-medium absolute left-0 text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-emerald-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">reEnter Your Password</label>
      {formik.errors.rePassword && formik.touched.rePassword ? <div className="p-2  my-1 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
       <span className="font-medium">{formik.errors.rePassword}</span> 
     </div> : null}
  </div>

  
  <div className='flex justify-between items-center gap-3 '>
  <button type="submit" className=" text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm  sm:w-auto px-10 py-2.5 text-center flex">
    Register
  </button>
    <Link to={"/signin"}  className='hover:text-blue-400'> do you have an account? <span> Login Now</span></Link>
  </div>
</form>
    </div>
  )
}
