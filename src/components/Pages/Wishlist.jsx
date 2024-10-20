import { useEffect, useState } from 'react'
import { FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FetchingUserData } from '../../App/UserSlice'
import { fetchCardData } from '../../App/CardSlice'

const Wishlist = () => {
  const [CardlikesShow, setLikesUser] = useState()
  const dispatch = useDispatch()
  const cardifData = useSelector((state) => state?.cardData?.Cardif);
  const User = useSelector((state) => state?.Userdata.User)

  useEffect(() => {
    dispatch(FetchingUserData())
    dispatch(fetchCardData())
  }, [dispatch, User?.user?.rooms?.length])

  useEffect(() => {
    if (User?.user?.Rooms) {
      const likeRooms = cardifData?.filter((room) =>
        User?.user?.Rooms?.includes(room._id)
      );
      setLikesUser(likeRooms)
    }
  }, [User, cardifData]);

  return (
    <div className='bg-gradient-to-b from-blue-50 via-white to-blue-100 animate-bgAnimation min-h-screen'>
      <h1 className='mt-5 font-bold font-serif text-[40px] text-center text-gray-900'>Wishlist Rooms</h1>
      <div className='flex flex-wrap justify-center gap-10 p-5'>
        {CardlikesShow?.map((val, index) => (
          <div
            key={index}
            className='flex flex-col border border-gray-300 shadow-lg rounded-[10px] hover:shadow-2xl transition-shadow duration-300 ease-in-out overflow-hidden w-full md:w-[30%]'
          >
            <NavLink to={`/RoomsAll/${val?._id}`} className='overflow-hidden w-full h-[220px]'>
              <img
                src={val?.thumbnail}
                alt=""
                className='h-[100%] w-[100%] object-cover transition-transform ease-in-out duration-300 hover:scale-110'
              />
            </NavLink>
            <div className='p-4'>
              <h1 className='font-bold font-serif text-[25px] text-gray-800'>{val?.title}</h1>
              <p className='text-[18px] py-1 font-light text-gray-700'>{val?.description}</p>
              <div className='flex items-center py-2'>
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStar className='text-yellow-500' />
                <FaStarHalfAlt className='text-yellow-500' />
              </div>
              <div className='flex items-center mt-2'>
                <IoLocationOutline className='text-gray-800 text-[22px] mr-1' />
                <span className='text-gray-700'>{val?.location}</span>
                <div className='flex ml-5 items-center'>
                  <FaRegHeart className='text-red-500 text-[22px]' />
                  <span className='ml-2 text-[16px]'>{val?.likes?.length}</span>
                </div>
              </div>
              <div className='mt-4'>
                <div className='inline-block bg-green-100 text-green-800 px-3 py-1 rounded-md font-bold text-[15px]'>
                  {val?.discountPercentage}% Off
                </div>
                <div className='inline-block ml-4 bg-blue-100 text-blue-800 px-3 py-1 rounded-md font-bold text-[20px]'>
                  ₹{val?.discountPrice}
                </div>
                <div className='inline-block ml-4 text-gray-500 line-through font-bold text-lg'>
                  ₹{val?.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Wishlist