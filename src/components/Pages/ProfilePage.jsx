import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import axios from 'axios';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const [file, setFile] = useState(null);
    const [Payment, setPayment] = useState()
    const [PayRooms, setPayRooms] = useState()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const User = useSelector((state) => state?.Userdata.User)
    const Card = useSelector((state) => state?.cardData?.Cardif);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        if (User) {
            setUserInfo(User?.user);
        }
    }, [User]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Updata User Profile 
    const onSubmit = async (formData) => {
        const data = new FormData();
        data.append("ProfileImg", file)
        data.append("name", formData.name)
        data.append("email", formData.email)
        data.append("mobile", formData.mobile)

        try {

            const response = await fetch(`https://hotel-management-server-1-n9cs.onrender.com/Eidit/User/Profile/${User?.user?._id}`, {
                // const response = await fetch(`http://localhost:3000/Eidit/User/Profile/${User?.user?._id}`, {
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
                    // navigate("/")
                    setIsModalOpen(false)
                }, 2000)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handelLogOut = async () => {
        localStorage.removeItem("Token")
        navigate("/SignIn")
    }

    useEffect(() => {
        dispatch(fetchCardData());
        dispatch(FetchingUserData())
    }, [dispatch, isModalOpen]);

    useEffect(() => {
        const PaymentData = async () => {
            const Token = localStorage.getItem("Token")
            if (!Token) {
                return navigate("Login")
            }
            try {
                const response = axios.get("https://hotel-management-server-1-n9cs.onrender.com/Payment/AllGet/Admin", {
                    // const response = axios.get("http://localhost:3000/Payment/AllGet/Admin", {
                    headers: {
                        authorization: `Bearer ${Token}`
                    }
                })
                if ((await response).status == 200) {
                    setPayment((await response).data)
                }
            } catch (error) {
                console.log(error);
                toast.error(<div>{error?.response?.data?.message}</div>)
            }
        }
        PaymentData()
    }, [navigate])

    useEffect(() => {
        console.log(Payment);
        const PaymentRooms = Payment?.filter((e) => e.userId === userInfo?._id);
        const roomIds = PaymentRooms?.map(room => room.RoomsId) || [];
        const FindTheRooms = Card.filter((e) => roomIds.includes(e._id));
        setPayRooms(FindTheRooms)
    }, [Card, Payment, userInfo]);

    return (
        <div className="relative bg-white dark:bg-gray-800 flex flex-wrap items-center justify-center font-serif">
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
                            <h2 className="text-2xl font-serif text-gray-800">{userInfo?.name}</h2>
                            <p className="text-gray-600">{userInfo?.email}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-serif text-gray-700">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Name</h4>
                                <p className="text-gray-600">{userInfo?.name}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Email</h4>
                                <p className="text-gray-600">{userInfo?.email}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Phone</h4>
                                <p className="text-gray-600">91+ {userInfo?.mobile}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Address</h4>
                                <p className="text-gray-600">123 Street Name, City, Country</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-700">Account Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-serif">
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md" onClick={toggleModal}>
                                Update
                            </button>
                            <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md" onClick={() => handelLogOut()}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-7 px-3">
                    <h1 className="text-[28px]">Your Pay Rooms Details</h1>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                        {PayRooms?.map((val, index) => (
                            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto">

                                <NavLink to={`/RoomsAll/${val._id}`}>
                                    <img className="w-full h-48 object-cover" src={val?.thumbnail} alt={val.title} />
                                </NavLink>


                                <div className="p-4">

                                    <h3 className="text-lg font-semibold text-gray-800">{val?.title}</h3>


                                    <p className="text-gray-600 text-sm mt-2">{val?.description}</p>


                                    <div className="flex justify-between items-center mt-4">
                                        <div>

                                            <span className="text-lg font-bold text-purple-600">${val?.discountPrice}</span>


                                            <span className="text-sm text-gray-500 line-through ml-2">${val?.price}</span>
                                        </div>


                                        <span className="text-sm text-green-500 bg-green-100 px-2 py-1 rounded-full">
                                            {val?.discountPercentage}% off
                                        </span>
                                    </div>


                                    <div className="flex justify-between items-center mt-4">

                                        <div className="flex items-center">
                                            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                            <span className="ml-2 text-gray-700 text-[20px]">{val?.likes?.length} Likes</span>
                                        </div>


                                        <span className="text-sm font-bold text-green-600">Payment Successful</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            }

            {isModalOpen && (
                <div
                    id="timeline-modal"
                    className="
                    z-50 fixed inset-0 flex items-center justify-center bg-opacity-50 mb-10"
                >
                    <div className="bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
                            <RxCross2
                                onClick={toggleModal}
                                className="float-right text-2xl ml-5 text-red-500 font-extrabold"
                            />
                            <div className="py-5 px-10">
                                <h2 className="text-[30px] font-serif font-medium text-gray-800 text-center mb-5">Edit Profile</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-2 " htmlFor="ProfileImg">
                                            Upload Profile Picture
                                        </label>
                                        <input
                                            {...register("ProfileImg")}
                                            type="file"
                                            id="ProfileImg"
                                            name="ProfileImg"
                                            className="shadow appearance-none border rounded w-full  text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-1" htmlFor="name">
                                            Username
                                        </label>
                                        <input
                                            {...register("name")}
                                            className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            defaultValue={userInfo?.name}
                                            type="text"
                                            name="name"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-1" htmlFor="mobile">
                                            Phone
                                        </label>
                                        <input
                                            {...register("mobile")}
                                            className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="mobile"
                                            defaultValue={userInfo?.mobile}
                                            type="number"
                                            placeholder="mobile"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-1" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            className="shadow appearance-none border rounded w-full py-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="email"
                                            defaultValue={userInfo?.email}
                                            type="email"
                                            placeholder="email"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button
                                            type="submit"
                                            className="bg-blue-700 mt-1 w-full border hover:bg-blue-700 text-white text-[20px] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
