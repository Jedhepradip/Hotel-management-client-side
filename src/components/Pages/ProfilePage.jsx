import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const [file, setFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [BookingId, setBookingId] = useState([])
    const dispatch = useDispatch()

    const navigate = useNavigate();
    const User = useSelector((state) => state?.Userdata.User)
    const cardifData = useSelector((state) => state?.cardData?.Cardif);

    console.log(cardifData);
    console.log(User);


    useEffect(() => {
        dispatch(fetchCardData());
        dispatch(FetchingUserData())
    }, [dispatch]);

    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (User) {
            setUserInfo(User?.user);
            let Rooms = User?.Orders?.Rooms
            setBookingId(Rooms)
        }
    }, [User]);

    console.log(userInfo);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Updata User Profile 
    const onSubmit = async (formData) => {
        const data = new FormData();
        data.append("Img", file);
        data.append("Name", formData.Name);
        data.append("Phone", formData.Phone);
        data.append("Password", formData.Password);
        console.log("FormData:", formData);
        console.log("File:", file);

        try {
            // const response = await fetch("https://hotel-management-server-5drh.onrender.com/Eidit/User/Profile", {
            const response = await fetch("http://localhost:3000/Eidit/User/Profile", {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
                body: data,
            });

            if (!response.ok) {
                let responseData = await response.json()
                toast.error(`${responseData.Message}`)
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (response.ok) {
                await response.json();
                reset();
                toggleModal();
                toast.success(`Profile Update Successfull..`)
                setTimeout(() => {
                    navigate("/")
                }, 800)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handelLogOut = async () => {
        localStorage.removeItem("Token")
        navigate("/SignIn")
    }
    
    return (
        <div className="relative bg-slate-200 dark:bg-gray-800 flex flex-wrap items-center justify-center font-serif">
            <ToastContainer />
            {!isModalOpen && <div className="min-h-screen p-8">
                <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img
                            src={`http://localhost:3000/${userInfo?.ProfileImg}`}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-2 border-black"
                        />
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800">{userInfo.name}</h2>
                            {/* <p className="text-gray-600">email</p> */}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-700">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-700">Name</h4>
                                <p className="text-gray-600">{userInfo.name}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-700">Email</h4>
                                <p className="text-gray-600">{userInfo.email}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-700">Phone</h4>
                                <p className="text-gray-600">91+ {userInfo.mobile}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-semibold text-gray-700">Address</h4>
                                <p className="text-gray-600">123 Street Name, City, Country</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-700">Booking History</h3>
                        <div className="mt-4">
                            {BookingId?.map((val, index) => (
                                <div key={index} className="bg-gray-50 p-4 rounded-lg shadow-md mb-4">
                                    <h4 className="font-semibold text-gray-700">Booking Rooms Id :{val.roomsid}</h4>
                                    <p className="text-gray-600">Owenr Name : {val.CARDHOLDERNAME}</p>
                                    <p className="text-gray-600">Card Number : {val.CardNumber}</p>
                                    <p className="text-gray-600">Card CVC : {val.CARDCVC}</p>
                                    <p className="text-gray-600">Check-Out: {val.CARDEXPIRY}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-700">Account Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-serif">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md" onClick={toggleModal}>
                                Update
                            </button>
                            <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-md" onClick={() => handelLogOut()}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            }

            {isModalOpen && (
                <div
                    id="timeline-modal"
                    className="h-screen z-50 fixed inset-0 flex items-center justify-center bg-opacity-50"
                >
                    <div className="bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto p-1">
                            <RxCross2
                                onClick={toggleModal}
                                className="float-right text-2xl ml-5 text-red-500 font-extrabold"
                            />
                            <div className="py-5 px-10">
                                <h2 className="text-2xl font-bold text-gray-800 mb-3">Welcome to Edit Profile</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="Img">
                                            Upload Profile Picture
                                        </label>
                                        <input
                                            {...register("Img")}
                                            type="file"
                                            id="Img"
                                            name="Img"
                                            className="shadow appearance-none border rounded w-full py-1 px-10 text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
                                            Username
                                        </label>
                                        <input
                                            {...register("Name")}
                                            className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="username"
                                            defaultValue={userInfo.Name}
                                            type="text"
                                            name="Name"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 font-bold mb-2" htmlFor="Phone">
                                            Phone
                                        </label>
                                        <input
                                            {...register("Phone")}
                                            className="shadow appearance-none border rounded w-full py-3 px-10 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="Phone"
                                            defaultValue={userInfo.Phone}
                                            type="number"
                                            placeholder="Phone"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block mb-2 font-bold text-gray-600">Create New Password</label>
                                        <input
                                            {...register("Password")}
                                            type="password"
                                            id="password"
                                            placeholder="Password"
                                            name="Password"
                                            className="border border-gray-300 shadow p-3 w-full rounded mb-1"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button
                                            type="submit"
                                            className="bg-blue-500 mt-1 w-full border hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Update Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
