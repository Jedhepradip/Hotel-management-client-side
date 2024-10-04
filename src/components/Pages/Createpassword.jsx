import React from 'react';
import { useNavigate, NavLink, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'; // Import axios
// import './CreatePassword.css'; // Import CSS for background animation

const CreatePassword = () => {
    let { Id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (data.Password == data.CPassword) {
            const formdata = new FormData()
            formdata.append("Password", data.Password)
            formdata.append("Cpassword", data.CPassword)
            try {
                // const response = await axios.post(`https://hotel-management-server-5drh.onrender.com/Createpassword/${Id}`, data);
                const response = await axios.post(`http://localhost:3000/Createpassword/${Id}`, formdata, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                // reset();
                toast.success(<div className='font-serif text-black'>{response.data.message}</div>);
                setTimeout(() => {
                    navigate("/Login");
                }, 800);
            } catch (error) {
                const errorMessage = error.response ? error.response.data.message : 'An error occurred';
                toast.error(<div className='font-serif text-black'>{errorMessage}</div>);
            }
        } else {
            toast.error("Passwords do not match");
        }
    };

    return (
        <>
            <div className="h-screen py-20 p-4 md:p-20 lg:p-10 bg-gray-50 z-50 fixed inset-0 flex items-center justify-center animated-background">
                <ToastContainer />
                <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                    <div className="bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto p-1">
                            <div className="py-5 px-10 ">
                                <h2 className="text-2xl text-gray-800 mb-3 font-serif">Create Password</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[21px] mb-2 font-serif" htmlFor="Password">
                                            Password
                                        </label>
                                        <input {...register("Password", {
                                            required: { value: true, message: "This Field Is Required " },
                                        })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-serif" type="password" placeholder="Password" />

                                        {errors.Password && <div className='block mb-2 font-bold text-center text-red-500'>{errors.Password.message}</div>}
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[21px] mb-2 font-serif" htmlFor="CPassword">
                                            Confirm Password
                                        </label>
                                        <input {...register("CPassword", {
                                            required: { value: true, message: "This Field Is Required " },
                                        })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-serif" type="password" placeholder="Confirm Password" />

                                        {errors.CPassword && <div className='block mb-2 font-bold text-center text-red-500'>{errors.CPassword.message}</div>}
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button type='submit' className="bg-black/85 mt-1 w-full border hover:bg-gray-800 text-white font-serif  py-2.5 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Submit
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <NavLink to="/Login">
                                            <button className="font-serif text-black hover:underline bg-white shadow shadow-gray-300 py-1.5 px-3 rounded-lg">
                                                Login
                                            </button>
                                        </NavLink>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreatePassword;
