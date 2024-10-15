import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FetchingUserData } from '../../App/UserSlice'
import { FaFacebook, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  const [userData, setuserdata] = useState()
  const dispatch = useDispatch()
  const User = useSelector((state) => state?.Userdata.User)

  useEffect(() => {
    dispatch(FetchingUserData())
  }, [dispatch])

  useEffect(() => {
    if (User) {
      setuserdata(User)
    }
  }, [User])

  return (
    <>
      {(userData?.user?.isAdmin == "false" || userData?.length == 0) ?
        <>
          <div className='bg-gray-600 text-white py-5 px-2'>
            <div className='flex flex-wrap justify-around items-center mb-5  cursor-pointer'>
              <ul className='w-full md:w-auto mb-4 md:mb-0 md:mt-0 mt-5'>
                <p className='text-2xl mb-3 font-serif uppercase'>Support</p>
                <li className='font-serif py-1'>Coronavirus (COVID 19)</li>
                <li className='font-serif py-1'>Manage Your Trips</li>
                <li className='font-serif py-1'>Contact Customer service</li>
                <li className='font-serif py-1'>Safety resource center</li>
              </ul>

              <ul className='w-full md:w-auto mb-4 md:mb-0 md:mt-0 mt-5'>
                <p className='text-2xl mb-3 font-serif uppercase'>Discover</p>
                <li className='font-serif py-1'>Genius loyalty Programme</li>
                <li className='font-serif py-1'>Seasonal and holiday deals</li>
                <li className='font-serif py-1'>Travel articles</li>
                <li className='font-serif py-1'>Traveller Review Awards</li>
              </ul>

              {/* <ul className='w-full md:w-auto mb-4 md:mb-0'>
            <p className='font-bold text-2xl mb-3'>Terms and settings</p>
            <li className='py-1 hover:font-bold'>Privacy & Cookies</li>
            <li className='py-1 hover:font-bold'>Terms and conditions</li>
            <li className='py-1 hover:font-bold'>Grievance officer</li>
            <li className='py-1 hover:font-bold'>Modern Slavery Statement</li>
          </ul> */}

              <ul className='w-full md:w-auto mb-4 md:mb-0 md:mt-0 mt-5'>
                <p className='text-2xl mb-3 font-serif uppercase'>Partners</p>
                <li className='font-serif py-1'>Extranet login</li>
                <li className='font-serif py-1'>Partner help</li>
                <li className='font-serif py-1'>List Your Property</li>
                <li className='font-serif py-1'>Become an affiliate</li>
              </ul>

              <ul className='w-full md:w-auto md:mt-0 mt-5'>
                <p className='text-2xl mb-3 font-serif uppercase'>About</p>
                <li className='font-serif py-1'>About Booking</li>
                <li className='font-serif py-1'>How we work</li>
                <li className='font-serif py-1'>Sustainability</li>
                <li className='font-serif py-1'>Press Center</li>
              </ul>

              <ul className='w-full md:w-auto md:mt-0 mt-5'>
                <p className='text-2xl mb-3 font-serif uppercase'>Subscribe</p>
                <li className='font-serif py-1'>Email : pradipjedhe69@gmail.com</li>
                <li className='font-serif py-1'>Contact : 91+ 8459844605</li>
                <li className='font-serif py-1'>Address : Bhavinmgaon , Tal . Shevgaon</li>
                <li className='font-serif py-0'>
                  <div className='flex justify-around items-center'>
                    <a href="https://in.linkedin.com/">
                      <FaLinkedinIn className='text-3xl bg-white h-9 mt-4 w-9 p-1 rounded-[50%] text-black' />
                    </a>
                    <a href="https://www.instagram.com/">
                      <FaInstagram className='text-3xl bg-white h-9 mt-4 w-9 p-1 rounded-[50%] text-black' />
                    </a>

                    <a href="https://www.google.co.in/">
                      <FaGoogle className='text-3xl bg-white h-9 mt-4 w-9 p-1 rounded-[50%] text-black' />
                    </a>

                    <a href="https://m.facebook.com/">
                      <FaFacebook className='text-3xl bg-white h-9 mt-4 w-9 p-1 rounded-[50%] text-black' />
                    </a>
                  </div>
                </li>
              </ul>

            </div>
          </div>
        </>
        :
        <h1>{null}</h1>
      }
    </>
  )
}

export default Footer
