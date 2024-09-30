import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const SignIn = () => {
  const [file, setFile] = useState();
  const [OTPShow, setOtpShow] = useState(false);
  const [loadingOTP, setLoadingOTP] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userOTP, setUserOTP] = useState("");
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const sendOtpForEmail = async () => {
    setLoadingOTP(true);
    const formData = new FormData();
    formData.append("email", userEmail);

    if (!userEmail) {
      toast.error("Email is required.");
      setLoadingOTP(false);
      return;
    }

    try {
      const response = await axios.post(`http://localhost:8000/UserSendOtp`, formData);
      const { otp, message } = response.data;
      toast.success(<div className='font-serif text-[15px] text-black'>{message}</div>);
      setUserOTP(otp);
      setOtpShow(true);
    } catch (error) {
      handleAxiosError(error);
    }
  };

  const onSubmit = async (data) => {
    setVerifyOtp(true);

    if (userOTP !== data.OTP) {
      toast.error("OTP doesn't match, please try again.");
      setVerifyOtp(false);
      return;
    }

    if (!file) {
      toast.error('Please select a logo file');
      setVerifyOtp(false);
      return;
    }

    const formData = new FormData();
    formData.append("ProfileImg", file);
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile.toString());
    formData.append("password", data.password);
    formData.append("role", data.role);

    try {
      const response = await axios.post(`http://localhost:8000/User/Registration`, formData);
      const { message, token } = response.data;
      toast.success(<div className='font-serif text-[15px] text-black'>{message}</div>);

      localStorage.setItem("Token", token);
      setTimeout(() => {
        navigate("/");
        setVerifyOtp(false);
        reset(); // Reset the form
      }, 1600);
    } catch (error) {
      handleAxiosError(error);
      setVerifyOtp(false);
    }
  };

  const handleAxiosError = (error) => {
    if (error.response) {
      const errorMessage = error.response.data.message;
      toast.error(<div className='font-serif text-[15px] text-black'>{errorMessage}</div>);
    } else {
      toast.error("Network issue or server not responding.");
      console.log("Error: Network issue or server not responding", error);
    }
  };

  return (
    <>
      <ToastContainer />
      {/* <div className='grid grid-cols-1 place-items-center py-10 px-5 bg-gray-50 rounded-lg shadow-xl'>
        <div className='bg-white px-8 py-6 shadow-md shadow-gray-400 rounded-lg w-full max-w-lg'>
          <h1 className='text-center font-bold font-serif text-[32px] text-gray-800 mb-5'>Sign In</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
         
            <div>
              <label className='block text-lg font-serif text-gray-700 mb-2'>Profile</label>
              <input
                {...register("ProfileImg", {
                  required: { value: true, message: "File is required" },
                })}
                type="file"
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent transition duration-200'
                onChange={(e) => setFile(e.target.files[0])}
              />
              {errors.ProfileImg && <div className="text-red-500 text-sm font-serif mt-1">{errors.ProfileImg.message}</div>}
            </div>

          
            <div>
              <label className="block text-lg font-serif text-gray-700 mb-2">Full Name</label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: { value: 4, message: "Min length is 4" },
                  maxLength: { value: 30, message: "Max length is 30" },
                })}
                type="text"
                placeholder="Pradip Jedhe"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200"
              />
              {errors.name && <div className="text-red-500 text-sm font-serif mt-1">{errors.name.message}</div>}
            </div>

           
            <div>
              <label className="block text-lg font-serif text-gray-700 mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="text"
                value={userEmail}
                placeholder="PradipJedhe@gmail.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200"
                onChange={(e) => setUserEmail(e.target.value)}
              />
              {errors.email && <div className="text-red-500 text-sm font-serif mt-1">{errors.email.message}</div>}
            </div>

           
            <div>
              <label className='block text-lg font-serif text-gray-700 mb-2'>Phone</label>
              <input
                {...register("mobile", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{10}$/,
                    message: "Phone number must be exactly 10 digits",
                  },
                })}
                type="text"
                placeholder='8459844605'
                className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200'
              />
              {errors.mobile && <div className="text-red-500 text-sm font-serif mt-1">{errors.mobile.message}</div>}
            </div>

           
            <div>
              <label className='block text-lg font-serif text-gray-700 mb-2'>Password</label>
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
                    message: "Invalid password format",
                  },
                })}
                type="password"
                placeholder='@$!%*?&#^'
                className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black outline-none transition duration-200 focus:border-transparent ${!errors.password ? 'border-black' : ''}`}
              />
              {errors.password && (
                <div className="text-red-500 text-sm font-serif mt-3 p-3 bg-gray-50 rounded-lg border border-gray-300">
                  <p className='font-semibold mb-1'>Your password must contain:</p>
                  <ul className="list-disc ml-5">
                    <li>At least one uppercase letter</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one number</li>
                    <li>At least one special character</li>
                    <li>Minimum length of 8 characters</li>
                  </ul>
                </div>
              )}
            </div>

            {OTPShow && (
              <div>
                <label className='block text-lg font-serif text-gray-700 mb-2'>OTP</label>
                <input
                  {...register("OTP", {
                    required: "OTP is required",
                    pattern: {
                      value: /^\d{4,6}$/,
                      message: "OTP must be 4-6 digits",
                    },
                  })}
                  type="text"
                  placeholder='Enter OTP'
                  className='w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-black focus:border-transparent outline-none transition duration-200'
                />
                {errors.OTP && <div className="text-red-500 text-sm font-serif mt-1">{errors.OTP.message}</div>}
              </div>
            )}

            {!OTPShow && (
              <div className='flex justify-center mt-4'>
                <button
                  type="button"
                  onClick={sendOtpForEmail}
                  disabled={loadingOTP}
                  className={`px-5 py-2 font-serif text-[18px] text-white rounded-md focus:outline-none transition duration-300 ease-in-out ${loadingOTP ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-white hover:text-black hover:border-black border-2 border-black'}`}
                >
                  {loadingOTP ? 'Sending...' : 'Send OTP'}
                </button>
              </div>
            )}

            <div className='flex justify-center mt-6'>
              <button
                type="submit"
                disabled={verifyOtp}
                className={`px-5 py-2 font-serif text-[18px] text-white rounded-md focus:outline-none transition duration-300 ease-in-out ${verifyOtp ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-white hover:text-black hover:border-black border-2 border-black'}`}
              >
                {verifyOtp ? 'Registering...' : 'Register'}
              </button>
            </div>
          </form>

          <div className='flex justify-center mt-4'>
            <NavLink to="/Login" className='underline underline-offset-4 text-black hover:text-gray-600 transition duration-200'>
              Already registered? Log in
            </NavLink>
          </div>
        </div>
      </div> */}




      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <ToastContainer />
        <div className='bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-lg'>
          <div className='p-8'>
            <h1 className='text-center text-3xl font-extrabold text-gray-800 mb-8 font-serif'>
              Sign In
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
              {/* Profile Input */}
              <div>
                <label className='block text-lg font-medium text-gray-700 mb-1'>
                  Profile Image
                </label>
                <input
                  {...register("ProfileImg", {
                    required: { value: true, message: "File is required" },
                  })}
                  type="file"
                  className='w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black transition duration-150 ease-in-out'
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {errors.ProfileImg && (
                  <p className='mt-1 text-sm text-red-600 font-medium'>
                    {errors.ProfileImg.message}
                  </p>
                )}
              </div>

              {/* Full Name Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required",
                    minLength: { value: 4, message: "Min length is 4" },
                    maxLength: { value: 30, message: "Max length is 30" },
                  })}
                  type="text"
                  placeholder="Pradip Jedhe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black transition duration-150 ease-in-out"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 font-medium">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  type="text"
                  value={userEmail}
                  placeholder="PradipJedhe@gmail.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black transition duration-150 ease-in-out"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 font-medium">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  {...register("mobile", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                  type="text"
                  placeholder="8459844605"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black transition duration-150 ease-in-out"
                />
                {errors.mobile && (
                  <p className="mt-1 text-sm text-red-600 font-medium">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              {/* Password Input */}
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/,
                      message: "Invalid password format",
                    },
                  })}
                  type="password"
                  placeholder="@$!%*?&#^"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black transition duration-150 ease-in-out"
                />
                {errors.password && (
                  <div className="mt-2 p-4 bg-gray-50 border border-gray-200 rounded-md">
                    <p className="font-medium text-gray-700">Password requirements:</p>
                    <ul className="mt-2 text-sm text-gray-600 list-disc pl-5 space-y-1">
                      <li>At least one uppercase letter</li>
                      <li>At least one lowercase letter</li>
                      <li>At least one number</li>
                      <li>At least one special character</li>
                      <li>Minimum length of 8 characters</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* OTP Verification */}
              {OTPShow && (
                <div>
                  <label className="block text-lg font-medium text-gray-700 mb-1">
                    OTP
                  </label>
                  <input
                    {...register("OTP", {
                      required: "OTP is required",
                      pattern: {
                        value: /^\d{4,6}$/,
                        message: "OTP must be 4-6 digits",
                      },
                    })}
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-black focus:border-black transition duration-150 ease-in-out"
                  />
                  {errors.OTP && (
                    <p className="mt-1 text-sm text-red-600 font-medium">
                      {errors.OTP.message}
                    </p>
                  )}
                </div>
              )}

              {/* Send OTP Button */}
              {!OTPShow && (
                <div className="text-center mt-4">
                  <button
                    type="button"
                    onClick={sendOtpForEmail}
                    disabled={loadingOTP}
                    className={`px-6 py-3 font-medium text-white rounded-md focus:outline-none transition duration-300 ease-in-out ${loadingOTP ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-white hover:text-black hover:border-black border-2 border-black'}`}
                  >
                    {loadingOTP ? 'Sending...' : 'Send OTP'}
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <div className="text-center mt-6">
                <button
                  type="submit"
                  disabled={verifyOtp}
                  className={`px-6 py-3 font-medium text-white rounded-md focus:outline-none transition duration-300 ease-in-out ${verifyOtp ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-white hover:text-black hover:border-black border-2 border-black'}`}
                >
                  {verifyOtp ? 'Registering...' : 'Register'}
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <NavLink to="/Login" className="text-sm text-black underline hover:text-gray-600">
                Already registered? Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
