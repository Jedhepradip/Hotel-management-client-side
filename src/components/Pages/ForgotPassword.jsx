import React, { useState, useRef } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import firebase from '../Firebase/FirebaseData'
import { json, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {

  const [phoneNumber, setPhoneNumber] = useState("")
  // const [otpshow, setotpshow] = useState(false)
  // const [verificationId, setVerificationId] = useState("");
  // const [otp, setOtp] = useState("");
  // const recaptchaRef = useRef(null);

  const Navigate = useNavigate()

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  // const handleSendOtp = () => {

  //   if (phoneNumber.length >= 10 && phoneNumber.length <= 10) {

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
  //       setotpshow(!otpshow)
  //     }).catch((err) => {
  //       console.error(err);
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


  const onsubmit = async (data) => {

    try {

      console.log("phoneNumber :", phoneNumber);
      const response = await fetch(`https://hotel-management-server-5drh.onrender.com/User/ForgotPassword/${phoneNumber}`, {
        // const response = await fetch(`http://localhost:3000/User/ForgotPassword/${phoneNumber}`, {
        method: "POST",

        body: JSON.stringify(phoneNumber)
      });
      const responsedata = await response.json();
      if (!response.ok) {
        toast.error(`${responsedata.Message}`)
        Navigate("/ForgotPassword");
      }

      if (response.ok) {
        Navigate(`/Createpassword/${responsedata}`)
        reset();
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=' h-screen bg-gray-400  z-50 fixed inset-0 flex items-center justify-center'>
        <div className='px-10 py-10 max-w-sm bg-white rounded-lg overflow-hidden shadow-lg mx-auto'>
          <h2 className="text-2xl font-bold text-gray-800 mb-3 ">Forgot Password</h2>
          {/* <div ref={recaptchaRef}></div> */}
          <ToastContainer />
          <form onSubmit={handleSubmit(onsubmit)}>
            {/* <div >
              <label htmlFor="Phone" className='block text-gray-700 font-bold mb-2'>Phone</label>
              <input {...register("Phone", {
                required: { value: true, message: "This filed Is Required..." },
                minLength: { value: 10, message: "Minlength Is 10" },
                maxLength: { value: 10, message: "MaxLength Is 10" },
              })} type="text" placeholder='Phone' className='shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outlines' value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
              {errors.Phone && <div className='block mb-2 font-bold  text-center text-red-500'>{errors.Phone.message}</div>}
            </div> */}

            <div className="mb-1">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="Phone">
                Phone
              </label>
              <input {...register("Phone", {
                required: { value: true, message: "This Field Is Required " },
                minLength: { value: 10, message: "Min Length Is 10" },
                maxLength: { value: 10, message: "Max Length Is 10" }
              })} className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="Number" placeholder="Phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)} />
              {errors.Phone && <div className='block mb-2 font-bold  text-center text-red-500'>{errors.Phone.message}</div>}
            </div>

            <button type='submit' className="bg-blue-500 mt-3 mb-2 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
            // onClick={() => handleSubmitForm()}
            // onClick={handleSendOtp}
            >
              Submit
            </button>

            {/* {otpshow &&
              <>

                <div className="mb-1 mt-1">
                  <label className="block mb-2 font-bold text-gray-600">OTP</label>
                  <input {...register("ten", {
                    required: { value: true, message: "This Field Is Required" },
                    minLength: { value: 6, message: "Min Length Is 4" },
                    maxLength: { value: 6, message: "Max Length Is 4" }
                  })}
                    onChange={(v) => setOtp(v.target.value)}
                    type="ten" id="ten" placeholder="OTP." className="border border-gray-300 shadow p-3 w-full rounded mb-" />
                  {errors.ten && <div className='block mb-2 font-bold  text-center text-red-500'>{errors.ten.message}</div>}
                </div>
                <button className="bg-blue-500 mt-1 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                  onClick={handleOtpVerification}
                >
                  Verify OTP
                </button>
                <div />
              </>
            } */}

          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword
