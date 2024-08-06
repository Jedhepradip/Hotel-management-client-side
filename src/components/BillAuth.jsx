import React, { useEffect, useState } from 'react'
import { json, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { IoLocationOutline } from 'react-icons/io5'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { FaRegHeart } from 'react-icons/fa'
import Swal from 'sweetalert2'

function BillAuth() {
    const [card, setcardinfo] = useState([])
    const [message,setmessage] = useState([])
    const { id } = useParams()

    const cardinfo = useSelector(state => state.Cardif.Cardif)


    const notify = () => toast.success("Wow so easy!");


    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onsubmit = async (data) => {
        let token = localStorage.getItem("Token")
        try {
            const response = await fetch(`https://hotel-management-server-5drh.onrender.com/User/Rooms/Payments/${id}`, {
                // const response = await fetch(`http://localhost:3000/User/Rooms/Payments/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            })

            const responsedata = await response.json()

            if (!response.ok) {
                console.log(response.status);
            }
            if (response.ok) {
                 Swal.fire({
                    title: "Payment Successful...",
                    // text: "Payment successfully",
                    icon: "success"
                  });
                navigate("/")                
                setmessage(responsedata.Massage)
                reset()
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (cardinfo.length) {
            let card = cardinfo[0].text
            const cardfilter = card.filter(e => e._id == id)
            setcardinfo(cardfilter)
        } else {
            let data = sessionStorage.getItem("Roomsdata")
            let Card = JSON.parse(data)
            const cardfilter = Card.filter(e => e._id == id)
            setcardinfo(cardfilter)
        }
    }, [message])

    return (
        <>
            <div className='flex bg-white justify-around items-center '>           
                <div className='flex  items-center flex-wrap '>
                    {card.map((val, index) => (
                        <div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'
                        >
                            <div className='w-[100%] h-[270px] overflow-hidden'>
                                <NavLink to={`/RoomsAll/${val._id}`}>
                                    <img src={val.thumbnail} alt='Image' className='h-[100%] w-[100%] p-1 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
                                    />
                                </NavLink>
                            </div>
                            <div className='p-5'>
                                <a href='#'>
                                    <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans'>
                                        {val.title}
                                    </h5>
                                </a>
                                <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
                                    {val.description}
                                </p>
                                <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded font-bold'>
                                    <IoLocationOutline className='inline-block text-black mr-0 text-[25px]' />{' '}
                                    <span className='text-[19px]'>{val.location}</span>
                                </span>
                                {/* onClick={() => handellike(val._id)} */}
                                <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
                                    <FaRegHeart className='inline-block text-black mr-1 text-[24px]' />
                                    <span className='font-bold text-[18px] absolute mt-6 -ml-5'>{val.likes.length}</span>
                                    {console.log("Pradip :", val.likes.length)}
                                </span>
                                <br />
                                <a
                                    className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                                >
                                    Book Now
                                    <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'
                                    >
                                        <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'
                                        />
                                    </svg>
                                </a>
                                <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                                    <span className='text-black text-[15px] font-bold'>
                                        {val.discountPercentage}% Off
                                    </span>
                                </div>
                                <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                                    <p className='text-black text-[20px] font-bold'>
                                        ₹{val.discountPrice}
                                    </p>
                                </div>
                                <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                                    <del className='text-black text-lg font-bold'>₹{val.price}</del>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="max-w-sm bg-slate-200 font-serif rounded-lg overflow-hidden shadow-lg mx-auto mb-5">
                        <div className="p-6 py-[20px]">
                            {/* // py-[105px] mb-2 px-20 */}
                            {/* <h2 className="text-2xl font-bold text-gray-800 mb-2">Welcome Back!</h2>
                            <p className="text-gray-700 mb-6">Please sign in to your account</p> */}
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <div className="mb-4">
                                    <label className="block text-gray-700 mb-2" htmlFor="username">
                                        CARD NAMUNER
                                    </label>
                                    <input  {...register("CardNumber", {
                                        required: { value: true, message: "Thisn Filed Is the required" },
                                        minLength: { value: 12, message: "Min Length Is the 12" },
                                        maxLength: { value: 12, message: "Max Length Is the 12" },
                                    })}
                                        className=" shadow appearance-none  rounded border-b-1 w-full py-2 px-16 text-gray-700 " id="username" type="Number" placeholder="4436 8584 6645 9950" />
                                    {/* leading-tight focus:outline-none focus:shadow-outline */}
                                    {errors.CardNumber && <div className='block mb-2 font-bold text-center text-red-500'>{errors.CardNumber.message}</div>}
                                </div>

                                <div className='flex '>
                                    <div className='w-[45%] flex'>
                                        <div className="mb-6">
                                            <label className="block text-gray-700 mb-2" htmlFor="date">
                                                CARD EXPIRY
                                            </label>
                                            <input {...register("CARDEXPIRY", {
                                                required: { value: true, message: "This Filed Is THe required" }
                                            })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="date" type="date" placeholder="date" />
                                            {errors.CARDEXPIRY && <div className='block mb-2 font-bold text-center text-red-500'>{errors.CARDEXPIRY.message}</div>}
                                        </div>
                                    </div>
                                    <div className='w-[100%] flex'>
                                        <div className="mb-6 ml-7">
                                            <label className="block text-gray-700 mb-2" htmlFor="CVC">
                                                CARD CVC
                                            </label>
                                            <input {...register("CARDCVC", {
                                                required: { value: true, message: "This Filed Is the reqired" },
                                                minLength: { value: 3, message: "Min Length 3" },
                                                maxLength: { value: 3, message: "Max Length 3" }
                                            })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="CVC" type="number" placeholder="123" />
                                            {errors.CARDCVC && <div className='block mb-2 font-bold text-center text-red-500'>{errors.CARDCVC.message}</div>}
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-gray-700 mb-2" htmlFor="CVC">
                                        CARD HOLDER NAME
                                    </label>
                                    <input {...register("CARDHOLDERNAME", {
                                        required: { value: true, message: "This Filed Is the required" }
                                    })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="CVC" type="text" placeholder=" CARD HOLDER NAME" />
                                    {errors.CARDHOLDERNAME && <div className='block mb-2 font-bold text-center text-red-500'>{errors.CARDHOLDERNAME.message}</div>}
                                </div>

                                <div className="flex items-center justify-between w-full">
                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="submit">
                                        Pay Amount
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillAuth
