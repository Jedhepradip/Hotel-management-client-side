import React, { useState, useEffect } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { json, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddtoRooms = () => {
    const [roomsId, setRoomsId] = useState([{}])
    const [RoomsID, Setrooms] = useState(null)
    const [show, setIsOpen] = useState(false)
    const [Totle, settotlePrice] = useState([])

    const Navigate = useNavigate()

    const handelshow = (RoomsId) => {
        console.log(RoomsID);
        Setrooms(RoomsId)
        setIsOpen(true)
    }

    const user = useSelector(state => state.UserData.UserData);    
    const CardInfo = useSelector(state => state.Cardif.Cardif)    

    useEffect(() => {
        if (user.length > 0) {
            let Roomsdata = user[0].text.RoomstobookingUser
            console.log("Roomsdata :",Roomsdata);
            let total = 0
            Roomsdata.map(e => {
                total += e.discountPrice
            })
            settotlePrice(total)
            setRoomsId(Roomsdata)
        }
        else {
            let userdata = sessionStorage.getItem("Userdata")
            let data = JSON.parse(userdata)
            setRoomsId(data.RoomstobookingUser)
        }
    }, [user,CardInfo])

    const handelRoomsId = async (removeroomsId) => {
        try {
            const response = await fetch(`http://localhost:3000/Rooms/Removeto/AddtoCard/${removeroomsId}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`
                }
            })
            if (!response.ok) {
                console.log(response.status);
            }
            if (response.ok) {
                let RemoveRooms = await response.json()
                toast.success(`Rooms Remove Successfull...`)
                setTimeout(() => {
                    Navigate("/")
                }, 800)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex relative justify-around items-center flex-wrap font-serif bg-white cursor-pointer md:w-full w-[100%] p-1'>
                <div>
                    <div>
                <ToastContainer/>
                        {roomsId.length ?
                            <>
                                <h1 className='mt-5 font-bold font-serif text-[40px] text-center'>Booking Rooms</h1>
                            </>
                            :
                            <>
                                <div>
                                    <h1 className='mt-5 font-bold font-serif text-[30px]'>Not Booking Rooms To Add The Rooms</h1>
                                    <NavLink to={"/"}>
                                        <p className='font-serif float-right font-bold text-blue-700 mb-1'>Click Here</p>
                                    </NavLink>
                                </div>
                            </>
                        }
                    </div>

                    {roomsId.length ?
                        <>
                            <div className='h-20 w-38 mt-4 rounded-lg  border border-black border-solid flex justify-center items-center'>
                                <div>
                                    <h1 className='text-center p-2 font-bold font-serif text-[20px]'>Amount</h1>
                                    <h1 className='font-serif py-1 px-1 text-[20px] font-bold'>Total : {Totle}</h1>
                                </div>
                            </div>
                        </>
                        :
                        null
                    }
                </div>

                {roomsId.map((val, index) => (

                    <div key={index}
                        className='flex mt-10 mb-5 justify-center w-full'
                        onClick={() => {
                            {
                                show ?
                                    setIsOpen(false)
                                    :
                                    null
                            }
                        }}
                    >
                        <div className='flex border border-black border-solid border-10 overflow-hidden  md:w-[65%]  rounded-[10px]  md:h-[100%] '>

                            <div className='overflow-hidden md:w-[60%] md:h-[204px] w-full h-full'>
                                <NavLink to={`/RoomsAll/${val._id}`}>
                                    <img src={val.thumbnail} alt="" className='h-[100%] w-[100%] p-0 object-cover rounded-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
                                    />
                                </NavLink>
                            </div>

                            <div className='flex-col md:w-full w-[100%] relative  cursor-default'>
                                <h1 className='float-right py-0 px-5 text-[19px] cursor-pointer mt-2'
                                    onClick={() => handelshow(val._id)}>
                                    <BsThreeDotsVertical onClick={() => handelshow(val._id)} />
                                </h1>

                                {val._id == RoomsID ?
                                    <>
                                        {show ?
                                            <>
                                                <div className='absolute bg-red-600 text-white border border-1 border-black md:ml-[380px] ml-[147px] md:mt-1 mt-9 flex justify-center items-center rounded-lg' onClick={() => handelRoomsId(val._id)}>
                                                    <h1 className='text-[20px] p-2 font-serif'>Remove</h1>
                                                </div>
                                            </>
                                            :
                                            null
                                        }
                                    </>
                                    :
                                    null
                                }

                                <h1 className='ml-5 py-1 font-bold font-serif text-[25px]'>{val.title}</h1>
                                <p className='ml-5 text-[18px] py-1 font-thin'>{val.description}</p>
                                <div className='flex'>
                                    <FaStar className='ml-5 text-orange-500' />
                                    <FaStar className='text-orange-500' />
                                    <FaStar className='text-orange-500' />
                                    <FaStarHalfAlt className='text-orange-500' />
                                </div>

                                <span className='mt-2 ml-5 inline-block text-gray-800 bg-white p-0 rounded font-bold'>
                                    <IoLocationOutline className='inline-block text-black mr-0 text-[22px]' />
                                    <span>{val.location}</span>
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
        </>
    )
}

export default AddtoRooms










// import React, { useState, useEffect } from 'react';
// import { BsThreeDotsVertical } from 'react-icons/bs';
// import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// import { IoLocationOutline } from 'react-icons/io5';
// import { useSelector } from 'react-redux';
// import { NavLink, useNavigate } from 'react-router-dom';

// const AddtoRooms = () => {
//   const [roomsId, setRoomsId] = useState([]);
//   const [RoomsID, setRooms] = useState(null);
//   const [show, setIsOpen] = useState(false);
//   const [total, setTotalPrice] = useState(0);

//   const navigate = useNavigate();

//   const user = useSelector((state) => state.UserData.UserData);
//   const CardInfo = useSelector((state) => state.Cardif.Cardif);

//   useEffect(() => {
//     if (user.length > 0) {
//       let Roomsdata = user[0].text.RoomstobookingUser;
//       let total = Roomsdata.reduce((acc, e) => acc + e.discountPrice, 0);
//       setTotalPrice(total);
//       setRoomsId(Roomsdata);
//     } else {
//       let userdata = JSON.parse(sessionStorage.getItem('Userdata'));
//       setRoomsId(userdata.RoomstobookingUser);
//     }
//   }, [user, CardInfo]);

//   const handleShow = (RoomsId) => {
//     setRooms(RoomsId);
//     setIsOpen(!show);
//   };

//   const handleRoomsId = async (removeRoomsId) => {
//     try {
//       const response = await fetch(`http://localhost:3000/Rooms/Removeto/AddtoCard/${removeRoomsId}`, {
//         method: 'PUT',
//         headers: {
//           authorization: `Bearer ${localStorage.getItem('Token')}`,
//         },
//       });
//       if (response.ok) {
//         navigate('/');
//       } else {
//         console.log(response.status);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="flex relative justify-around items-center flex-wrap font-serif bg-white cursor-pointer md:w-full w-[100%] p-1">
//       <div>
//         {roomsId.length ? (
//           <>
//             <h1 className="mt-5 font-bold font-serif text-[40px] text-center">Booking Rooms</h1>
//             <div className="h-20 w-38 mt-4 rounded-lg border border-black border-solid flex justify-center items-center">
//               <div>
//                 <h1 className="text-center p-2 font-bold font-serif text-[20px]">Amount</h1>
//                 <h1 className="font-serif py-1 px-1 text-[20px] font-bold">Total: {total}</h1>
//               </div>
//             </div>
//           </>
//         ) : (
//           <div>
//             <h1 className="mt-5 font-bold font-serif text-[30px]">No Booking Rooms. Add Rooms.</h1>
//             <NavLink to="/">
//               <p className="font-serif float-right font-bold text-blue-700 mb-1">Click Here</p>
//             </NavLink>
//           </div>
//         )}
//       </div>

//       {roomsId.map((val, index) => (
//         <div key={index} className="flex mt-10 mb-5 justify-center w-full" onClick={() => setIsOpen(false)}>
//           <div className="flex border border-black border-solid border-10 overflow-hidden md:w-[65%] rounded-[10px] md:h-[100%]">
//             <div className="overflow-hidden md:w-[60%] md:h-[204px] w-full h-full">
//               <NavLink to={`/RoomsAll/${val._id}`}>
//                 <img
//                   src={val.thumbnail}
//                   alt=""
//                   className="h-[100%] w-[100%] p-0 object-cover rounded-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110"
//                 />
//               </NavLink>
//             </div>
//             <div className="flex-col md:w-full w-[100%] relative cursor-default">
//               <h1 className="float-right py-0 px-5 text-[19px] cursor-pointer mt-2" onClick={() => handleShow(val._id)}>
//                 <BsThreeDotsVertical />
//               </h1>
//               {val._id === RoomsID && show && (
//                 <div
//                   className="absolute bg-red-600 text-white border border-1 border-black md:ml-[380px] ml-[147px] md:mt-1 mt-9 flex justify-center items-center rounded-lg"
//                   onClick={() => handleRoomsId(val._id)}
//                 >
//                   <h1 className="text-[20px] p-2">Remove</h1>
//                 </div>
//               )}
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

// export default AddtoRooms;
