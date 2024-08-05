import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Createpassword = () => {

    let { Id } = useParams();
    const Navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    console.log("id ", Id);

    const onSubmit = async (data) => {
        // if (data.Password === data.CPassword) {
            console.log(data);
            try {
                const response = await fetch(`https://hotel-management-server-5drh.onrender.com/Createpassword/${Id}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    const errorData = await response.json();
                    toast.error(`${errorData.Message}`)
                } else {
                    let responsedata = await response.json()
                    reset();
                    toast.success(`${responsedata.Message}`)
                    setTimeout(() => {
                        Navigate("/Login");
                    }, 800)

                }
            } catch (error) {
                console.log(error);
            }
        // } 
        // else {
        //     console.log("Passwords Do Not Match");
        // }
    };
    return (
        <>
            <div className="h-screen py-20 p-4 md:p-20 lg:p-10 bg-gray-200  z-50 fixed inset-0 flex items-center justify-center">
                <ToastContainer />
                <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto">
                    <div className=" bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto p-1">
                            <div className="py-5 px-10 ">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">Create Password</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="Password">
                                            Create New Password
                                        </label>
                                        <input {...register("Password", {
                                            required: { value: true, message: "This Field Is Required " },
                                        })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Password" placeholder="Password" />
                                        {errors.Password && <div className='block mb-2 font-bold  text-center text-red-500'>{errors.Password.message}</div>}
                                    </div>


                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="CPassword">
                                            Confrom Password
                                        </label>
                                        <input {...register("CPassword", {
                                            required: { value: true, message: "This Field Is Required " },
                                        })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Password" placeholder="CPassword" />
                                        {errors.CPassword && <div className='block mb-2 font-bold  text-center text-red-500'>{errors.CPassword.message}</div>}
                                    </div>


                                    <div className="flex items-center justify-between">
                                        <button type='submit' className="bg-blue-500 mt-1 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                                            Submit
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-between mt-3">
                                        <NavLink to="/Login">
                                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                                Sign In
                                            </button></NavLink>
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

export default Createpassword
