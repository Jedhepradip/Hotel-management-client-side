import axios from 'axios';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgetPassword = () => {
    const [email, setEmail] = useState();
    const [OTP, setOTP] = useState();
    const [showOtp, setShowOtp] = useState(false);
    const [loadingOTP, setLoadingOTP] = useState(false);
    const [verifyotp, setOtpVerify] = useState(false);
    const [userInfo, setUserInfo] = useState();
    const navigate = useNavigate();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        setLoadingOTP(true);
        if (!email) {
            toast.error("Please enter your email.");
            setLoadingOTP(false);
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/ForgetPassword", { email });
            const userResponse = response.data;
            if (response.status === 200) {
                toast.success(<div className='font-serif text-[15px] text-black'>{userResponse.message}</div>);
                setUserInfo(userResponse);
                setShowOtp(true);
            }
        } catch (error) {
            setLoadingOTP(false);
            const errorMessage = error.response?.data?.message || "Unexpected error occurred.";
            toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>);
        } finally {
            setLoadingOTP(false);
        }
    };

    console.log(userInfo);

    const handleSubmitOtp = async (e) => {
        e.preventDefault();
        setOtpVerify(true);

        if (!OTP) {
            toast.error(<div className='font-serif text-[15px] text-black'>{"Please enter the OTP."}</div>);
            setOtpVerify(false);
            return;
        }

        if (userInfo?.otp == OTP) {
            toast.success(<div className='font-serif text-[15px] text-black'>{"OTP Verified successfully"}</div>);
            setTimeout(() => {
                navigate(`/Createpassword/${userInfo?.EmailCheck?._id}`);
            }, 2000);
        } else {
            toast.error(<div className='font-serif text-[15px] text-black'>{"Invalid OTP. Please try again."}</div>);
            setOtpVerify(false);
        }
    };

    return (
        // <div className='grid grid-cols-1 place-items-center p-5 bg-white'>
        //     <ToastContainer />
        //     <div className='px-5 py-5 shadow-lg shadow-gray-300 rounded-lg w-80'>
        //         <h1 className='text-center font-medium font-serif text-[30px]'>Forget Password</h1>

        //         <form onSubmit={handleSendOtp}>
        //             <div className='space-y-1 font-serif'>
        //                 <div>
        //                     <label className='block text-lg text-gray-700 font-medium'>Email</label>
        //                     <input
        //                         type="email"
        //                         name='email'
        //                         placeholder='PradipJedhe@gmail.com'
        //                         value={email}
        //                         onChange={(e) => setEmail(e.target.value)}
        //                         className='w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none focus:border-transparent mb-2'
        //                         required
        //                     />
        //                 </div>
        //                 <div className="flex justify-center mt-4">
        //                     <button
        //                         type='submit'
        //                         className={`text-white w-full bg-gray-800 flex justify-center items-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-[20px] px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-serif ${loadingOTP ? 'cursor-not-allowed' : ''}`}
        //                         disabled={loadingOTP}
        //                     >
        //                         {loadingOTP ? (
        //                             <svg
        //                                 className="animate-spin h-5 w-5 mr-2 text-white rounded-full"
        //                                 viewBox="0 0 24 24"
        //                                 fill="none"
        //                                 xmlns="http://www.w3.org/2000/svg"
        //                             >
        //                                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        //                                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        //                             </svg>
        //                         ) : null}
        //                         <span>{loadingOTP ? 'Loading...' : 'Send OTP'}</span>
        //                     </button>
        //                 </div>
        //             </div>
        //         </form>

        //         {showOtp && (
        //             <form onSubmit={handleSubmitOtp}>
        //                 <div className='space-y-1 font-serif'>
        //                     <div>
        //                         <label className='block text-lg font-medium text-gray-700 mt-4'>OTP</label>
        //                         <input
        //                             type="text"
        //                             name='OTP'
        //                             placeholder='Enter OTP'
        //                             value={OTP}
        //                             onChange={(e) => setOTP(e.target.value)}
        //                             className='w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-150 ease-in-out hover:border-black focus:bg-gray-50 bg-gray-100 placeholder-gray-400 text-black shadow-sm hover:shadow-lg mb-2'
        //                             required
        //                         />
        //                     </div>
        //                     <div className="flex justify-center mt-4">
        //                         <button
        //                             type='submit'
        //                             className={`text-white w-full bg-gray-800 flex justify-center items-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-[20px] px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-serif ${verifyotp ? 'cursor-not-allowed' : ''}`}
        //                             disabled={verifyotp}
        //                         >
        //                             {verifyotp ? (
        //                                 <svg
        //                                     className="animate-spin h-5 w-5 mr-2 text-white rounded-full"
        //                                     viewBox="0 0 24 24"
        //                                     fill="none"
        //                                     xmlns="http://www.w3.org/2000/svg"
        //                                 >
        //                                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        //                                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
        //                                 </svg>
        //                             ) : null}
        //                             <span>{verifyotp ? 'Loading...' : 'Verify OTP'}</span>
        //                         </button>
        //                     </div>
        //                 </div>
        //             </form>
        //         )}


        //         <div className="flex mt-2 bg-white">
        //             <NavLink to="/Login" className='font-medium font-serif text-blue-700 text-lg hover:text-gray-900'>Back to Login</NavLink>
        //         </div>
        //     </div>
        // </div>

        <div className='grid h-screen grid-cols-1 place-items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradient-x'>
            <ToastContainer />
            <div className='relative px-5 py-5 shadow-lg shadow-gray-300 rounded-lg w-80 mb-32 text-black bg-white'>
                <h1 className='text-center font-medium font-serif text-[30px] '>Forget Password</h1>

                <form onSubmit={handleSendOtp}>
                    <div className='space-y-1 font-serif'>
                        <div>
                            <label className='block text-lg  font-medium'>Email</label>
                            <input
                                type="email"
                                name='email'
                                placeholder='PradipJedhe@gmail.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className='w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-white outline-none focus:border-transparent mb-2'
                                required
                            />
                        </div>
                        <div className="flex justify-center mt-4">
                            <button
                                type='submit'
                                className={`text-white w-full bg-gray-800 flex justify-center items-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-[20px] px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-serif ${loadingOTP ? 'cursor-not-allowed' : ''}`}
                                disabled={loadingOTP}
                            >
                                {loadingOTP ? (
                                    <svg
                                        className="animate-spin h-5 w-5 mr-2 text-white rounded-full"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                    </svg>
                                ) : null}
                                <span>{loadingOTP ? 'Loading...' : 'Send OTP'}</span>
                            </button>
                        </div>
                    </div>
                </form>

                {showOtp && (
                    <form onSubmit={handleSubmitOtp}>
                        <div className='space-y-1 font-serif'>
                            <div>
                                <label className='block text-lg font-medium mt-4'>OTP</label>
                                <input
                                    type="text"
                                    name='OTP'
                                    placeholder='Enter OTP'
                                    value={OTP}
                                    onChange={(e) => setOTP(e.target.value)}
                                    className='w-full px-4 py-2.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-white focus:border-transparent outline-none transition duration-150 ease-in-out hover:border-white focus:bg-gray-50 bg-gray-100 placeholder-gray-400 text-black shadow-sm hover:shadow-lg mb-2'
                                    required
                                />
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    type='submit'
                                    className={`text-white w-full bg-gray-800 flex justify-center items-center hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-md text-[20px] px-5 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 font-serif ${verifyotp ? 'cursor-not-allowed' : ''}`}
                                    disabled={verifyotp}
                                >
                                    {verifyotp ? (
                                        <svg
                                            className="animate-spin h-5 w-5 mr-2 text-white rounded-full"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                                        </svg>
                                    ) : null}
                                    <span>{verifyotp ? 'Loading...' : 'Verify OTP'}</span>
                                </button>
                            </div>
                        </div>
                    </form>
                )}

                <div className="flex mt-2 bg-transparent">
                    <NavLink to="/Login" className='font-medium font-serif  text-lg hover:text-gray-900'>Back to <span className='text-blue-700 hover:underline'>Login</span></NavLink>
                </div>
            </div>
        </div>


    );
};

export default ForgetPassword;
