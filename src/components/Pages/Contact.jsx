import React from 'react'
import { useForm } from 'react-hook-form'
import { FaHome, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
const Contact = () => {

  const Navigate = useNavigate()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onsubmit = async (data) => {
    try {
      const response = await fetch("https://hotel-management-server-5drh.onrender.com/User/Contact", {
        // const response = await fetch("http://localhost:3000/User/Contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      })
      await response.json()
      if (!response.ok) {
        Navigate("/Contact")
      }
      if (response.ok) {
        reset()
        Navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h1 className='font-serif font-bold text-5xl text-center py-5 px-5 w-full'>
        Contact <span className='font-semibold text-red-600 underline'>US</span>
      </h1>
      <div className='font-sans py-5 px-10 flex justify-around items-center w-full h-full flex-wrap'>
        <div className='bg-white py-8 px-10 rounded-lg md:w-[33%]  md:ml-28 w-full mb-4 md:mb-0'>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className='mb-2'>
              <label htmlFor="Name" className='block text-gray-700 font-serif mb-2 text-[19px]'>Name</label>
              <input {...register("Name", {
                required: { value: true, message: "This filed Is Required" },
                minLength: { value: 5, message: "MinLength is 5" },
                maxLength: { value: 20, message: "Max Length Is 20" },
              })} type='text' placeholder='Name' id='Name' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.Name && <div className='block mb-2 font-bold text-center text-red-500'>
                {errors.Name.message}</div>}
            </div>

            <div className='mb-2'>
              <label htmlFor="Phone" className='block text-gray-700 font-serif mb-2 text-[19px]'>Phone</label>
              <input {...register("Phone", {
                required: { value: true, message: "This filed Is Required" },
                minLength: { value: 10, message: "MinLength is 10" },
                maxLength: { value: 10, message: "MaxLength Is 10" },
              })} type='number' placeholder='Phone' id='Number' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.Phone && <div className='block mb-2 font-bold text-center text-red-500'>
                {errors.Phone.message}</div>}
            </div>

            <div className='mb-2'>
              <label htmlFor="Name" className='block text-gray-700 font-serif mb-2 text-[19px]'>Subject</label>
              <input {...register("Subject", {
                required: { value: true, message: "This filed Is Required" },
                minLength: { value: 5, message: "MinLength is 5" },
                maxLength: { value: 20, message: "Max Length Is 20" },
              })} type='text' placeholder='Subject' id='Subject' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.Subject && <div className='block mb-2 font-bold text-center text-red-500'>
                {errors.Subject.message}</div>}
            </div>

            <div className='mb-2'>
              <label htmlFor="Name" className='block text-gray-700 font-serif mb-2 text-[19px]'>Message</label>
              <textarea {...register("Message", {
                required: { value: true, message: "This filed Is Required" },
                minLength: { value: 30, message: "Min Length is 30" },
              })} type='text' placeholder='Message' id='Message' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
              {errors.Message && <div className='block mb-2 font-bold text-center text-red-500'>
                {errors.Message.message}</div>}
            </div>
            <button className='btn mt-1 bg-black py-2.5 px-5 w-full rounded-lg font-serif text-[20px] text-white'>Submit</button>
          </form>
        </div>

        <div className='bg-white px-10 rounded-lg md:w-[50%] w-full mb-4 md:mb-0 py-5'>
          <h1 className='font-bold font-serif text-[43px] text-black py-5'>Contact To Mi</h1>
          <div className=' h-full  '>
            <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore nostrum totam, vel perspiciatis nihil! Dolores expedita repellat obcaecati inventore possimus recusandae sequi pariatur a fuga unde? Animi, error impedit?</p>
            <div className='flex mt-5'>
              <FaHome className='text-5xl mt-2 bg-slate-200  rounded-full py-1 px-2 flex' />
              <div>
                {/* flex flex-col */}
                <span className='ml-2 font-bold font-serif text-blue-700 '>Address</span><br />
                <p className='ml-2 font-serif'>Bhavinimgaon, Tal . Shevgaon, District . A.Nager</p>
              </div>
            </div>

            <div className='flex mt-5'>
              <FaPhoneAlt className='text-5xl mt-2 bg-slate-200  rounded-full py-1 px-2 flex' />
              <div>
                {/* flex flex-col */}
                <span className='ml-2 font-bold font-serif text-blue-700 '>Phone</span><br />
                <p className='ml-2 font-serif'>91+ 8459844605</p>
              </div>
            </div>

            <div className='flex mt-5'>
              <MdEmail className='text-5xl mt-2 bg-slate-200  rounded-full py-1 px-2 flex' />
              <div>
                {/* flex flex-col */}
                <span className='ml-2 font-bold font-serif text-blue-700 '>Email</span><br />
                <p className='ml-2 font-serif'>pradipjedhe69@gmail.com</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact
