import React, { useState, useEffect } from 'react';
import { IoLocationOutline } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { json, NavLink } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CardInformation, UserInfromation } from '../CardSlice/CardDate';
import SignIn from './SignIn';

const Card = () => {
    const [cardlocation, setcardlocation] = useState([])
    const [Updatestate, setupdate] = useState(false)
    const navaviget = useNavigate()
    const Dispatch = useDispatch()
    let { id } = useParams();

    const CardInfo = useSelector(state => state.Cardif.Cardif)
    const user = useSelector(state => state.UserData.UserData);

    useEffect(() => {
        if (CardInfo.length) {
            let card = CardInfo[0].text
            let filtrcardlocation = card.filter(e => e._id == id)
            let relativelocation = filtrcardlocation[0].location
            let categoriesfilterArray = card.filter(val => val.location == relativelocation)
            setcardlocation(categoriesfilterArray)
        } else {
            let data = sessionStorage.getItem("Roomsdata")
            let card = JSON.parse(data)
            let filtrcardlocation = card.filter(e => e._id == id)
            let relativelocation = filtrcardlocation[0].location
            let categoriesfilterArray = card.filter(val => val.location == relativelocation)
            setcardlocation(categoriesfilterArray)
        }
    }, [CardInfo])

    let token = localStorage.getItem("Token")

    const handeltocheecktoken = (Roomsid) => {
        if (!token) {
            navaviget("/SignIn")
        } else {
            navaviget(`/BillAuth/${Roomsid}`)
        }
    }

    const handelliketocheck = () => {
        if (!token) {
            navaviget('/SignIn')
        }
    }

    const handellike = async (RoomsId) => {
        try {
            const response = await fetch(`https://hotel-management-server-5drh.onrender.com/Rooms/User/Like/${RoomsId}`, {
                // const response = await fetch(`https://localhost:3000/Rooms/User/Like/${RoomsId}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${token}`,
                }
            })
            const likeData = await response.json()
            if (!response.ok) {
                console.log(response.status);
            }
            if (response.ok) {
                window.location.reload()
            }
        } catch (error) {
            console.log(error);
        }
    }

    console.log(cardlocation);

    return (
        <div>
            <h1 className='text-center text-[50px] font-serif'>OUR HOTLES</h1>
            <div className='flex justify-around items-center flex-wrap font-serif'>
                {cardlocation.map((val, index) => (
                    <div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5 overflow-hidden'>
                        <div className='w-[100%] h-[270px] overflow-hidden'>
                            <NavLink to={`/RoomsAll/${val._id}`}>
                                <img src={val.thumbnail} alt='Image' className='h-[100%] w-[100%] p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
                                />
                            </NavLink>
                        </div>
                        <div className='p-5'>
                            <a href='#'>
                                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif'>
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

                            <span onClick={() =>
                                handelliketocheck()}
                                className=' relative mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
                                <FaRegHeart className='inline-block text-black mr-1 text-[24px]'
                                    onClick={() => handellike(val._id)} />
                                <span className='font-bold text-[18px] absolute mt-6 -ml-5'>
                                    {val.likes?.length || 0}
                                </span>
                            </span>

                            <br />

                            {val.Booked ?
                                <>
                                    <a
                                        className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 '
                                    >
                                        Rooms Booked
                                        {/* <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'
                                        >
                                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'
                                            />
                                        </svg> */}
                                    </a>
                                </>
                                :
                                <>
                                    <div onClick={() => handeltocheecktoken(val._id)} className='cursor-pointer'>

                                        <a
                                            className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
                                        >
                                            Book Now
                                            <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'
                                            >
                                                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'
                                                />
                                            </svg>
                                        </a>
                                    </div>
                                </>
                            }

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
        </div>
    );
};
export default Card;
