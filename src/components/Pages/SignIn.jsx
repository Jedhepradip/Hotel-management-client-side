import React, { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import firebase from '../Firebase/FirebaseData';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const SignIn = () => {
  const [file, setFile] = useState(null);
  const [otpshow, setOtpshow] = useState(false);
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");
  const recaptchaRef = useRef(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();


  // const handleSendOtp = () => {
  //   const data = {
  //     Img: file,
  //     Name: watch("Name"),
  //     Password: watch("Password"),
  //     Phone: phoneNumber
  //   };

  //   if (data.Img && data.Name.length >= 5 && data.Password.length >= 6 && data.Phone.length >= 10) {
  //     const fullPhoneNumber = `+91${phoneNumber}`;
  //     if (!fullPhoneNumber.match(/^\+\d{1,15}$/)) {
  //       console.error("Invalid phone number format. Please include the country code.");
  //       return;
  //     }

  //     if (recaptchaRef.current) {
  //       recaptchaRef.current.innerHTML = "<div id='recaptcha-container'></div>";
  //     }

  //     const verifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
  //       size: "invisible"
  //     });

  //     firebase.auth().signInWithPhoneNumber(fullPhoneNumber, verifier).then((confirmResult) => {
  //       setVerificationId(confirmResult.verificationId);
  //       setOtpshow(true);
  //     }).catch((err) => {
  //       console.error("Error during OTP sending:", err);
  //     });
  //   }
  // };

  // const handleOtpVerification = async () => {
  //   try {
  //     const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, otp);
  //     await firebase.auth().signInWithCredential(credential);
  //     console.log("OTP verified successfully");
  //     handleSubmitForm(); // Submit form after OTP verification
  //   } catch (error) {
  //     console.error("Error verifying OTP:", error);
  //   }
  // };

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("Img", file);
      formData.append("Name", watch("Name"));
      formData.append("Password", watch("Password"));
      formData.append("Phone", phoneNumber);

      const response = await fetch("https://hotel-management-server-5drh.onrender.com/User/Registration", {
      // const response = await fetch("http://localhost:3000/User/Registration", {
        method: "POST",
        body: formData
      });

      const responsedata = await response.json();

      if (!response.ok) {        
        toast.error(`${responsedata.Message}`,{
        })
        navigate("/SignIn");
      } else {
        let token = responsedata.token
        localStorage.setItem("Token", token)
        toast.success("Registration Successfully...")
        setTimeout(() => {
          navigate("/")
        }, 600)
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!")
    }
  };


  return (
    <div id="timeline-modal" className="z-50 fixed inset-0 flex items-center justify-center bg-gray-300 bg-opacity-50 p-5 mb-7">
      <ToastContainer />
      <div ref={recaptchaRef}></div>
      <div className="bg-white">
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto p-1">
          <div className="py-5 px-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome Back!</h2>
            <form
              // onSubmit={handleSubmit(handleSendOtp)}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="mb-1">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Img">
                  Upload Profile Picture
                </label>
                <input
                  {...register("Img", { required: "This Field Is Required" })}
                  type="file"
                  id="Img"
                  className="shadow appearance-none border rounded w-full py-1 px-10 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                {errors.Img && <div className='block mb-2 font-bold text-center text-red-500'>{errors.Img.message}</div>}
              </div>

              <div className="mb-1">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <input {...register("Name", {
                  required: { value: true, message: "This Field Is Required" },
                  minLength: { value: 5, message: "Min Length Is 5" },
                  maxLength: { value: 35, message: "Max Length Is 35" },
                })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                {errors.Name && <div className='block mb-2 font-bold text-center text-red-500'>
                  {errors.Name.message}</div>}
              </div>

              <div className="mb-1">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="Phone">
                  Phone
                </label>
                <input {...register("Phone", {
                  required: { value: true, message: "This Field Is Required" },
                  minLength: { value: 10, message: "Min Length Is 10" },
                  maxLength: { value: 10, message: "Max Length Is 10" }
                })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" placeholder="Phone"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)} />
                {errors.Phone && <div className='block mb-2 font-bold text-center text-red-500'>{errors.Phone.message}</div>}
              </div>

              <div className="mb-1">
                <label className="block mb-2 font-bold text-gray-600">Password</label>
                <input {...register("Password", {
                  required: { value: true, message: "This Field Is Required" },
                  minLength: { value: 6, message: "Min Length Is 6" },
                  maxLength: { value: 8, message: "Max Length Is 8" }
                })} type="password" id="password" placeholder="Password" className="border border-gray-300 shadow p-3 w-full rounded mb-1" />
                {errors.Password && <div className='block mb-2 font-bold text-center text-red-500'>{errors.Password.message}</div>}
              </div>

              <NavLink to="/Login">
                <span className='text-blue-500 font-bold text-[15px] p-2 cursor-pointer'>Already have an account</span>
              </NavLink>

              <div className="flex items-center justify-between">
                <button type='submit' className="bg-blue-500 mt-1 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline">
                  Send OTP
                </button>
              </div>

              {otpshow &&
                <>
                  <div className="mb-1 mt-1">
                    <label className="block mb-2 font-bold text-gray-600">OTP</label>
                    <input {...register("ten", {
                      required: { value: true, message: "This Field Is Required" },
                      minLength: { value: 6, message: "Min Length Is 6" },
                      maxLength: { value: 6, message: "Max Length Is 6" }
                    })}
                      onChange={(v) => setOtp(v.target.value)}
                      type="text" id="ten" placeholder="OTP" className="border border-gray-300 shadow p-3 w-full rounded mb-1" />
                    {errors.ten && <div className='block mb-2 font-bold text-center text-red-500'>{errors.ten.message}</div>}
                  </div>
                  <button className="bg-blue-500 mt-1 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline" onClick={handleOtpVerification}>
                    Verify OTP
                  </button>
                </>
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
