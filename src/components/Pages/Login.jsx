import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Login = () => {
    const Navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const formdata = new FormData();
        formdata.append("email", data.email);
        formdata.append("password", data.password);

        try {
            const response = await axios.post("http://localhost:3000/User/Login", formdata, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const UserLogin = response.data;
            console.log(UserLogin);

            if (response.status !== 200) {
                toast.error(`${UserLogin.Message}`);
            } else {
                localStorage.setItem("Token", UserLogin.token);
                reset();
                toast.success(<div className='font-serif text-black'>{UserLogin.message}</div>);
                setTimeout(() => {
                    Navigate("/");
                }, 1500);
            }
        } catch (error) {
            console.error("Error during login:", error);            
            if (error.response) {
                console.error("Server Response:", error.response.data);
                toast.error(<div className='font-serif text-black'>{error.response.data.message || "Something went wrong!"}</div>);
            } else {
                toast.error("Something went wrong! Please try again.");
            }
        }
    };


    return (
        <>
            <div className="h-screen py-20 p-4 md:p-20 lg:p-10 bg-gradient-to-r from-purple-400 to-red-500 z-50 fixed inset-0 flex items-center justify-center">
                <ToastContainer />
                <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-xl mx-auto transition-transform transform hover:scale-105 duration-300 ease-in-out">
                    <div className="bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto p-1">
                            <div className="py-8 px-10">
                                <h2 className="text-3xl font-extrabold text-gray-800 mb-5 text-center">
                                    Welcome Back!
                                </h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1">
                                        <label className="block text-lg font-serif text-gray-700">Email</label>
                                        <input
                                            {...register("email", {
                                                required: { value: true, message: "Email is required" },
                                                pattern: {
                                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                                    message: "Invalid email address",
                                                },
                                            })}
                                            type="email"
                                            name="email"
                                            placeholder="PradipJedhe@gmail.com"
                                            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-400 focus:border-transparent outline-none transition-shadow duration-200 ease-in-out"
                                        />
                                        {errors.email && (
                                            <div className="text-red-500 text-lg font-serif mt-1 text-center">
                                                {errors.email.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-lg font-serif text-gray-700 mb-1">Password</label>
                                        <input
                                            {...register("password", {
                                                required: { value: true, message: "Password is required" },
                                            })}
                                            type="password"
                                            placeholder="@$!%*?&#^"
                                            name="password"
                                            className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:ring-4 focus:ring-purple-400 focus:border-transparent outline-none transition-shadow duration-200 ease-in-out"
                                        />
                                        {errors.password && (
                                            <div className="text-red-500 text-lg font-serif mt-1 text-center">
                                                {errors.password.message}
                                            </div>
                                        )}
                                    </div>

                                    <div className="flex items-center justify-between mb-6 mt-3">
                                    {/* bg-gradient-to-r from-purple-500 to-red-400 hover:from-purple-600 hover:to-red-600 */}
                                        <button type="submit" className="w-full bg-black text-white font-medium py-2.5 font-serif  px-4 rounded-lg shadow-lg transition-colors duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500">
                                            Login
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <NavLink to="/SignIn">
                                        {/* bg-gradient-to-r from-green-400 to-blue-400 hover:from-green-500 hover:to-blue-500 */}
                                            <button className="bg-black font-serif text-white py-2 px-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500" type="button">
                                                Sign In
                                            </button>
                                        </NavLink>
                                        <NavLink to="/ForgotPassword" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-700 transition-colors duration-200 ease-in-out">
                                            Forgot Password?
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
