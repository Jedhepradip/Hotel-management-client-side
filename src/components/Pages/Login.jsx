import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Swal from 'sweetalert2'
const Login = () => {

    // const notify = () =>  toast.success("Login Successfully...");

    const Naviget = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        console.log("login user", data);
        try {
            const response = await fetch("https://hotel-management-server-5drh.onrender.com/User/Login", {
            // const response = await fetch("http://localhost:3000/User/Login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })
            const UserLogin = await response.json()
            if (!response.ok) {
                toast.error(`${UserLogin.Message}`)
            }
            if (response.ok) {                               
                let token = UserLogin.token
                localStorage.setItem("Token", token)
                reset()
                toast.success(" Login Successfully...")
                setTimeout(() => {
                    Naviget("/")
                },800)
                
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!")
        }
    }

    return (
        <>
            <div className="h-screen py-20 p-4 md:p-20 lg:p-10 bg-gray-200  z-50 fixed inset-0 flex items-center justify-center">
                <ToastContainer />
                <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                    <div className=" bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto p-1">
                            <div className="py-5 px-10 ">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome Back!</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="Phone">
                                            Phone
                                        </label>
                                        <input {...register("Phone", {
                                            required: { value: true, message: "This Field Is Required " },
                                            minLength: { value: 10, message: "Min Length Is 10" },
                                            maxLength: { value: 10, message: "Max Length Is 10" }
                                        })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Phone" />
                                        {errors.Phone && <div className='block mb-2 font-bold  text-center text-red-500'>{errors.Phone.message}</div>}
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="Password">
                                            Password
                                        </label>
                                        <input {...register("Password", {
                                            required: { value: true, message: "This Filed Is Required" },
                                        })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
                                        {errors.Password && <div className='block mb-2 font-bold text-center text-red-500'>
                                            {errors.Password.message}</div>}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button type='submit' className="bg-blue-500 mt-1 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Login
                                        </button>
                                    </div>

                                    <div class="flex items-center justify-between mt-3">
                                        <NavLink to="/SignIn">
                                            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                Sign In
                                            </button></NavLink>
                                        <NavLink to="/ForgotPassword" class="inline-block align-baseline font-bold text-sm text-blue-500 font-serif">
                                            Forgot Password?
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login
