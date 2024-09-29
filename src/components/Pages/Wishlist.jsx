import React, { useEffect, useState } from 'react'
import { FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Wishlist = () => {

  const [roomsId, setroomslike] = useState([])
  const [idtorefresh,setrefresh] = useState([])
  const CardInfo = useSelector(state => state.Cardif.Cardif)    

  const user = useSelector(state => state.UserData.UserData);

console.log("user :",user);

  useEffect(() => {
    if (CardInfo.length) {
      wishlist(CardInfo[0].text, user[0].text.user)
      // setrefresh(user[0].text.RoomstobookingUser.length)
    }
    else {
      let roomsdata = JSON.parse(sessionStorage.getItem("Roomsdata"))
      let userdata = JSON.parse(sessionStorage.getItem("Userdata"))
      // setrefresh(userdata.RoomstobookingUser.length)
      wishlist(roomsdata, userdata.user)
    }
  }, [])

  // useEffect(() => {
  
  // }, [idtorefresh])
  
  let wishlistarr = []

  const wishlist = (data, Userdata) => {
    // data.map((e) => {
    //   if (e.likes.length > 0) {
    //     if (e.likes[0].like == Userdata._id) {
    //       // if (e.likes[0].like) {
    //       // wishlistarr.push(e)
    //     }
    //   }
    // })

    data.map((e) => {
      if (e.likes.length > 0) {
        e.likes.map((val) => {
          if (val.like == Userdata._id) {
            wishlistarr.push(e)
          }
        })
      }
    });

    setroomslike(wishlistarr)
  }

console.log("room :",roomsId);

  return (
    <div className='bg-white'>
       <h1 className='mt-5 font-bold font-serif text-[40px] text-center'>Wishlist Rooms</h1>
      {roomsId.map((val, index) => (        
        <div key={index}
          className='flex mt-10 mb-5 justify-center w-full bg-white'>
          <div className='flex border border-black border-solid border-10 overflow-hidden  md:w-[65%]  rounded-[10px]  md:h-[100%] '>
            <div className='overflow-hidden md:w-[60%] md:h-[220px] hover:rounded-lg w-full h-full'>
              <NavLink to={`/RoomsAll/${val._id}`}>
                <img src={val.thumbnail} alt="" className='h-[100%] w-[100%] p-0 object-cover rounded-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
                />
              </NavLink>
            </div>
            <div className='flex-col md:w-full w-[100%] relative  cursor-default'>
              <h1 className='ml-5 py-1 font-bold font-serif text-[25px]'>{val.title}</h1>
              <p className='ml-5 text-[18px] py-1 font-thin'>{val.description}</p>
              <div className='flex'>
                <FaStar className='ml-5 text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStar className='text-orange-500' />
                <FaStarHalfAlt className='text-orange-500' />
              </div>
              <span className='mt-2 ml-5 flex text-gray-800 bg-white p-0 rounded font-bold'>
                <IoLocationOutline className='inline-block text-black mr-0 text-[22px]' />

                <span>{val.location}</span>
                <span className='ml-5 text-[20px]'><FaRegHeart/>
                <h1 className='text-[15px] ml-1'>{val.likes.length}</h1>
                </span>

              </span>
              <div className='ml-5'>
                <div className='inline-block text-gray-800 bg-white p-2 rounded '>
                  <span className='text-black text-[15px] font-bold'>
                    {val.discountPercentage}% Off
                  </span>
                </div>
                <div className='inline-block text-gray-800 bg-white p-2 rounded '>
                  <p className='text-black text-[20px] font-bold'>
                    ₹{val.discountPrice}
                  </p>
                </div>
                <div className='inline-block text-gray-800 bg-white p-2 rounded'>
                  <del className='text-black text-lg font-bold'>
                    ₹{val.price}
                  </del>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Wishlist



// import React, { useEffect, useState } from 'react';
// import { FaRegHeart, FaStar, FaStarHalfAlt } from 'react-icons/fa';
// import { IoLocationOutline } from 'react-icons/io5';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

// const Wishlist = () => {
//   const [roomsId, setRoomsId] = useState([]);

//   const Card = useSelector((state) => state.Cardif.Cardif);
//   const user = useSelector((state) => state.UserData.UserData);

//   useEffect(() => {
//     const roomsData = JSON.parse(sessionStorage.getItem('Roomsdata')) || [];
//     const userData = JSON.parse(sessionStorage.getItem('Userdata')) || {};

//     if (Card.length) {
//       wishlist(Card[0].text, user[0].text.user);
//     } else {
//       wishlist(roomsData, userData);
//     }
//   }, [Card, user]);

//   const wishlist = (data, userData) => {
//     const wishlistArr = data.filter((e) => e.likes.some((like) => like.like === userData._id));
//     setRoomsId(wishlistArr);
//   };

//   return (
//     <div className="bg-white">
//       {roomsId.map((val, index) => (
//         <div key={index} className="flex mt-10 mb-5 justify-center w-full bg-white">
//           <div className="flex border border-black border-solid border-10 overflow-hidden md:w-[65%] rounded-[10px] md:h-[100%]">
//             <div className="overflow-hidden md:w-[60%] md:h-[220px] hover:rounded-lg w-full h-full">
//               <NavLink to={`/RoomsAll/${val._id}`}>
//                 <img
//                   src={val.thumbnail}
//                   alt=""
//                   className="h-[100%] w-[100%] p-0 object-cover rounded-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110"
//                 />
//               </NavLink>
//             </div>
//             <div className="flex-col md:w-full w-[100%] relative cursor-default">
//               <h1 className="ml-5 py-1 font-bold font-serif text-[25px]">{val.title}</h1>
//               <p className="ml-5 text-[18px] py-1 font-thin">{val.description}</p>
//               <div className="flex">
//                 <FaStar className="ml-5 text-orange-500" />
//                 <FaStar className="text-orange-500" />
//                 <FaStar className="text-orange-500" />
//                 <FaStarHalfAlt className="text-orange-500" />
//               </div>
//               <span className="mt-2 ml-5 flex text-gray-800 bg-white p-0 rounded font-bold">
//                 <IoLocationOutline className="inline-block text-black mr-0 text-[22px]" />
//                 <span>{val.location}</span>
//                 <span className="ml-5 text-[20px]">
//                   <FaRegHeart />
//                   <h1 className="text-[15px] ml-1">{val.likes.length}</h1>
//                 </span>
//               </span>
//               <div className="ml-5">
//                 <div className="inline-block text-gray-800 bg-white p-2 rounded">
//                   <span className="text-black text-[15px] font-bold">{val.discountPercentage}% Off</span>
//                 </div>
//                 <div className="inline-block text-gray-800 bg-white p-2 rounded">
//                   <p className="text-black text-[20px] font-bold">₹{val.discountPrice}</p>
//                 </div>
//                 <div className="inline-block text-gray-800 bg-white p-2 rounded">
//                   <del className="text-black text-lg font-bold">₹{val.price}</del>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Wishlist;
