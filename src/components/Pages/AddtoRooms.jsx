import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';

const AddtoRooms = () => {
    const [roomsId, SetAddToCardRooms] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const Navigate = useNavigate();
    const dispatch = useDispatch();

    const user = useSelector((state) => state?.Userdata?.User);
    const CardInfo = useSelector((state) => state?.cardData?.Cardif);

    useEffect(() => {
        if (user?.user) {
            const AddToCard = CardInfo?.filter((room) =>
                user?.user?.AddToCardRooms.includes(room._id)
            );
            SetAddToCardRooms(AddToCard);

            const total = AddToCard?.reduce((acc, room) => acc + room.discountPrice, 0);
            setTotalPrice(total);
        }
    }, [user, CardInfo]);

    useEffect(() => {
        dispatch(FetchingUserData());
        dispatch(fetchCardData());
    }, [dispatch]);

    const handelRoomsId = async (removeroomsId) => {
        try {
            const response = await fetch(`http://localhost:3000/Rooms/Removeto/AddtoCard/${removeroomsId}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`
                }
            });
            if (!response.ok) {
                console.log(response.status);
            }
            if (response.ok) {
                await response.json();
                toast.success(`Room Removed Successfully...`);
                setTimeout(() => {
                    Navigate("/");
                }, 800);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <ToastContainer />
            <h1 className='text-5xl font-extrabold text-center mt-5 text-gray-800'>Booking Rooms</h1>
            <div className='mt-6 flex justify-between items-center bg-gray-50 p-6 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold text-gray-700'>Total Price: <span className='text-green-600'>₹{totalPrice}</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-xl">
                {roomsId.map((room) => (
                    <div
                        key={room.id}
                        className="bg-white border-2 border-gray-300 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
                    >
                        <img
                            src={room.thumbnail}
                            alt={room.title}
                            className="w-full h-56 object-cover rounded-t-xl transition-opacity duration-500 hover:opacity-90"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl  mb-3 text-indigo-700 hover:text-indigo-900 transition-colors duration-300 font-serif font-medium">
                                {room.title}
                            </h2>
                            <p className="text-gray-600 mb-4 font-serif font-medium">{room.description}</p>
                            <div className="flex justify-between items-center">
                                <div>
                                    <span className="text-xl font-bold text-red-600">
                                        ${room.discountPrice}
                                    </span>
                                    <span className="text-sm text-gray-400 line-through ml-2">
                                        ${room.price}
                                    </span>
                                </div>
                                <span className="bg-green-100 text-green-600 text-sm font-semibold px-2 py-1 rounded-full">
                                    {room.discountPercentage}% off
                                </span>
                            </div>
                            <p className="mt-3 text-sm text-gray-500 flex items-center">
                                <svg className="w-4 h-4 mr-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12z" />
                                </svg>
                                {room.location}
                            </p>
                            <div className="flex justify-between items-center mt-5">
                                <span className="flex items-center text-yellow-500">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.943a1 1 0 00.95.69h4.15c.97 0 1.371 1.24.588 1.81l-3.364 2.448a1 1 0 00-.364 1.118l1.286 3.943c.3.922-.755 1.688-1.539 1.118l-3.364-2.448a1 1 0 00-1.175 0l-3.364 2.448c-.783.57-1.838-.196-1.538-1.118l1.286-3.943a1 1 0 00-.364-1.118L2.784 9.37c-.783-.57-.382-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.943z" />
                                    </svg>
                                    <span className="ml-1">{1} Likes</span>
                                </span>
                                <button className="bg-red-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-red-600 hover:shadow-xl transition duration-300 font-serif" onClick={() => handelRoomsId(room._id)}>
                                    Remove from Cart
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default AddtoRooms;
