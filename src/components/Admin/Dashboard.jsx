import { useEffect, useState } from 'react'
import { Fetchingadminuser } from '../../App/AdminUserSlice';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
// import { BsThreeDotsVertical } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { MdAddBox } from "react-icons/md";
import { FaChartBar, FaHome, FaRegHeart, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Dashboard = () => {
    const [userdata, Setuserdata] = useState([])
    const [Home, setHome] = useState(true)
    const [UserPage, setUser] = useState(false)
    const [Roomd, setRooms] = useState(false)
    const [Product, setProduct] = useState(false)
    const User = useSelector((state) => state?.Userdata.User)
    const AdminUser = useSelector((state) => state?.Alluserdata?.AllUser);
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(Fetchingadminuser())
        dispatch(FetchingUserData())
        dispatch(fetchCardData())
    }, [dispatch])

    useEffect(() => {
        if (User) {
            Setuserdata(User)
        }
    }, [AdminUser, User])

    const handelLogOut = () => {
        localStorage.removeItem("Token")
        Navigate("/Login")
    }

    const ShowThehotmePage = (componentsName) => {
        if (componentsName == "Home") {
            setHome(true)
            setRooms(false)
            setUser(false)
            setProduct(false)
        }
    }

    const ShowTheUserPage = (componentsName) => {
        if (componentsName == "Users") {
            setUser(true)
            setHome(false)
            setRooms(false)
            setProduct(false)
        }
    }
    const ShowTheRoomsPage = (componentsName) => {
        if (componentsName == "Rooms") {
            setRooms(true)
            setHome(false)
            setUser(false)
            setProduct(false)
        }
    }

    const ShowProductFormPage = (componentsName) => {
        if (componentsName == "ProductForm") {
            setProduct(true)
            setRooms(false)
            setHome(false)
            setUser(false)
        }
    }

    return (
        <div>
            <div className="flex min-h-screen bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-blue-900 text-white shadow-lg">
                    <div className="flex items-center justify-center h-20">
                        <h1 className="text-2xl font-bold text-gray-100">Admin Dashboard</h1>
                    </div>

                    <nav className="mt-10 cursor-pointer">
                        <ul>
                            <li className="px-6 py-3 hover:bg-blue-700 transition-all" onClick={() => ShowThehotmePage("Home")}>
                                <a href="#" className="flex items-center">
                                    <FaHome className="mr-2" />
                                    <span>Home</span>
                                </a>
                            </li>

                            <li onClick={() => ShowTheUserPage("Users")}>
                                <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                                    <a href="#" className="flex items-center">
                                        <FaUser className="mr-2" />
                                        <span>Users</span>
                                    </a>
                                </li>
                            </li>

                            <li className="px-6 py-3 hover:bg-blue-700 transition-all" onClick={() => ShowTheRoomsPage("Rooms")}>
                                <span className="flex items-center">
                                    <FaChartBar className="mr-2" />
                                    <span>Room</span>
                                </span>
                            </li>
                            <li className="px-6 py-3 hover:bg-blue-700 transition-all" onClick={() => ShowProductFormPage("ProductForm")}>
                                <a href="#" className="flex items-center">
                                    <MdAddBox className="mr-2" />
                                    <span>Add Rooms</span>
                                </a>
                            </li>
                            <li className="px-6 py-3 mt-4 border-t border-blue-700 hover:bg-blue-700 transition-all" onClick={() => handelLogOut()}>
                                <span className="flex items-center">
                                    <FaSignOutAlt className="mr-2" />
                                    <span>Logout</span>
                                </span>
                            </li>
                        </ul>
                    </nav>
                </aside>

                {/* Main Content */}

                <div className="flex flex-col flex-grow">
                    {/* Topbar */}
                    <header className="flex items-center justify-between h-20 px-6 bg-white shadow-md">
                        <h2 className="text-2xl text-gray-800">Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <p className="text-black text-[20px] font-serif">{userdata?.user?.name}</p>
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                <img src={`http://localhost:3000/${userdata?.user?.ProfileImg}`} alt="" className='object-cover' />
                            </div>
                        </div>
                    </header>
                    {/* Dashboard Stats */}
                    <main className="flex-grow bg-white p-10 overflow-auto max-h-[calc(100vh-80px)]"> {/* Adjust height based on your header */}
                        {Home && <HomePage />}
                        {UserPage && <AllUser />}
                        {Roomd && <AllRoomd />}
                        {Product && <ProductForm />}
                    </main>
                </div>
            </div>
        </div>
    )
}

const HomePage = () => {

    const [Payment, setPayment] = useState()
    const [calculatePayment, setcalculatePayment] = useState()
    const Navigate = useNavigate()
    const cardifData = useSelector((state) => state?.cardData?.Cardif);
    const AllUser = useSelector((state) => state?.Alluserdata?.AllUser);

    useEffect(() => {
        const PaymentData = async () => {
            const Token = localStorage.getItem("Token")
            if (!Token) {
                return Navigate("Login")
            }
            try {
                // https://hotel-management-server-1-n9cs.onrender.com
                const response = axios.get("https://hotel-management-server-1-n9cs.onrender.com/Payment/AllGet/Admin", {
                    // const response = axios.get("http://localhost:3000/Payment/AllGet/Admin", {
                    headers: {
                        authorization: `Bearer ${Token}`
                    }
                })
                if ((await response).status == 200) {
                    console.log("(await response).data :", (await response).data);
                    setPayment((await response).data)
                }
            } catch (error) {
                console.log(error);
                toast.error(<div>{error?.response?.data?.message}</div>)
            }
        }
        PaymentData()
    }, [Navigate])

    useEffect(() => {
        if (Payment) {
            const totalPayment = Payment?.reduce((acc, payment) => acc + Number(payment.amount), 0);
            setcalculatePayment(totalPayment)
        }
    }, [Payment])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600">{AllUser?.length}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Rooms</h3>
                <p className="text-3xl font-bold text-blue-600">{
                    // eslint-disable-next-line no-undef
                    cardifData?.length}</p>
            </div>


            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Earnings</h3>
                <p className="text-3xl font-bold text-blue-600">₹{calculatePayment}</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Payment List</h3>
                <p className="text-3xl font-bold text-blue-600">{Payment?.length}</p>
            </div>
        </div>
    )
}

const AllUser = () => {
    const [userId, setUserId] = useState(null); // Store selected user ID
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const Navigate = useNavigate()
    const Alluser = useSelector((state) => state?.Alluserdata?.AllUser);

    // Toggle dropdown for each user
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    // Handle Edit user
    const handleEdit = (id) => {
        setUserId(id);
        setIsModalOpen(true); // Open the modal
        setDropdownOpen(null); // Close dropdown
    };

    // Handle Close Modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    const handledelete = async (id) => {
        const Token = localStorage.getItem("Token");
        if (!Token) {
            return Navigate("/Login");
        }

        try {
            // https://hotel-management-server-1-n9cs.onrender.com
            const response = await axios.delete(`https://hotel-management-server-1-n9cs.onrender.com/Admin/Delete/User/${id}`, {
                // const response = await axios.delete(`http://localhost:3000/Admin/Delete/User/${id}`, {
                headers: {
                    authorization: `Bearer ${Token}`
                }
            });

            if (response.status == 200) {
                toast.success(<div className='text-black font-serif'>{response?.data?.message}</div>);
                setTimeout(() => {
                }, 2000);
            } else {
                toast.error(<div className='font-serif text-red-500'>{response?.data?.message || "Failed to delete profile."}</div>);
            }
        } catch (error) {
            console.error("Error:", error);
            // Show error message from the server response or a fallback message
            toast.error(<div className='text-red-500 font-serif'>{error.response?.data?.message || "An error occurred while deleting the profile."}</div>);
        }
    };


    return (
        <>
            <div className="mx-auto h-full relative">
                <ToastContainer />
                <h2 className="text-2xl font-bold mb-4">User List</h2>
                <div className="relative h-full overflow-x-auto">
                    <table className="min-w-full bg-white border-collapse">
                        <thead>
                            <tr>
                                <th className="text-left py-2 px-4 border-b-2">Profile Image</th>
                                <th className="text-left py-2 px-4 border-b-2">Name</th>
                                <th className="text-left py-2 px-4 border-b-2">Email</th>
                                <th className="text-left py-2 px-4 border-b-2">Contact</th>
                                <th className="text-left py-2 px-4 border-b-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="relative">
                            {Alluser?.map((user, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                                    <NavLink to={"/ProfilePage"}>
                                        <td className="py-2 px-4 border-b">
                                            <img
                                                src={`http://localhost:3000/${user?.ProfileImg}`}
                                                alt={user?.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        </td>
                                    </NavLink>
                                    <td className="py-2 px-4 border-b">
                                        {user?.name || 'N/A'}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {user?.email || 'N/A'}
                                    </td>
                                    <td className="py-2 px-4 border-b">
                                        {user?.mobile || 'N/A'}
                                    </td>
                                    <td className="py-2 px-2 border-b text-center text-[20px] relative">
                                        <BsThreeDots
                                            className="text-gray-600 hover:text-gray-800 cursor-pointer"
                                            onClick={() => toggleDropdown(index)} // Toggle dropdown
                                        />
                                        {dropdownOpen === index && (
                                            <div className="absolute top-[45px] right-0 w-36 bg-white shadow-lg rounded-lg z-50">
                                                <div className="text-left">
                                                    <div
                                                        className="px-4 py-2 rounded-lg hover:bg-black hover:text-white text-black font-serif cursor-pointer transition-colors duration-200"
                                                        onClick={() => handleEdit(user._id)}
                                                    >
                                                        Edit
                                                    </div>
                                                    <div
                                                        className="px-4 py-2 rounded-lg hover:bg-black hover:text-white text-red-500 transition-colors duration-200 font-serif cursor-pointer"
                                                        onClick={() => handledelete(user._id)}
                                                    >
                                                        Delete
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Modal for Editing User */}
                {isModalOpen && (
                    <EditUserFrom
                        userId={userId}
                        handleCloseModal={handleCloseModal}
                    />
                )}
            </div>
        </>
    );
};

// eslint-disable-next-line react/prop-types
const EditUserFrom = ({ userId, handleCloseModal }) => {
    const [userInfo, setUserinfo] = useState()
    const [file, setFile] = useState(null);
    const Alluser = useSelector((state) => state?.Alluserdata?.AllUser);
    const { register, handleSubmit } = useForm({});

    useEffect(() => {
        const user = Alluser.filter((e) => e._id == userId)
        setUserinfo(user[0])
    }, [Alluser, userId])

    const onSubmit = async (formData) => {
        const data = new FormData();
        data.append("ProfileImg", file);
        data.append("name", formData.name);
        data.append("email", formData.email);
        data.append("mobile", formData.mobile);

        try {
            const response = await axios.put(`https://hotel-management-server-1-n9cs.onrender.com/Eidit/User/Profile/${userId}`, data, {
                // const response = await axios.put(`http://localhost:3000/Eidit/User/Profile/${userId}`, data, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`
                },
            });

            // Handle success response
            if (response.status === 200) {
                toast.success(<div className='text-black font-serif'>Profile Update Successful...</div>);
                setTimeout(() => {
                    handleCloseModal();
                }, 2000);
            } else {
                toast.error(<div className='font-serif text-red-500'>{response.data.message || "Failed to update profile."}</div>);
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error(<div className='text-res-500 font-serif'>{error.response.data.message}</div>);
        }
    };


    return (
        <>
            <div id="timeline-modal" className="z-50 absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 mb-10">
                <ToastContainer />
                <div className="bg-white">
                    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
                        <RxCross2
                            onClick={handleCloseModal}
                            className="float-right text-2xl ml-5 text-red-500 font-extrabold"
                        />
                        <div className="py-5 px-10">
                            <h2 className="text-[30px] font-serif font-medium text-gray-800 text-center mb-5">Edit Profile</h2>

                            {/* encType='multipart/form-data' */}
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
                                    <label className="block text-gray-700 text-[18px] mb-1 font-serif" htmlFor="name">
                                        Username
                                    </label>
                                    <input
                                        {...register("name")}
                                        className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline font-serif"
                                        id="name"
                                        defaultValue={userInfo?.name}
                                        type="text"
                                        name="name"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label className="block text-gray-700 text-[18px] mb-1 font-serif" htmlFor="mobile">
                                        Phone
                                    </label>
                                    <input
                                        {...register("mobile")}
                                        className="shadow appearance-none border rounded w-full font-serif py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="mobile"
                                        defaultValue={userInfo?.mobile}
                                        type="number"
                                    />
                                </div>

                                <div className="mb-1">
                                    <label className="block text-gray-700 text-[18px] mb-1 font-serif" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        {...register("email")}
                                        className="shadow appearance-none border rounded w-full font-serif py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="email"
                                        defaultValue={userInfo?.email}
                                        type="email"
                                    />
                                </div>

                                <div className="flex items-center justify-between font-serif">
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
        </>
    );
};

const AllRoomd = () => {
    const [CardId, setUserId] = useState(null); // Store selected user ID
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const cardifData = useSelector((state) => state?.cardData?.Cardif);
    const dispatch = useDispatch()

    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    const handelCardEdit = (id) => {
        setUserId(id);
        setIsModalOpen(true); // Open the modal
        setDropdownOpen(null); // Close dropdown
    };

    // Handle Close Modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handelCardDelete = async (id) => {
        try {
            const response = axios.delete(`https://hotel-management-server-1-n9cs.onrender.com/Rooms/Delete/Admin/${id}`, {
                // const response = axios.delete(`http://localhost:3000/Rooms/Delete/Admin/${id}`, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`
                }
            })

            if (!(await response).status == 200) {
                toast.error(<div className='font-serif text-red-500'>{(await response)?.data?.message}</div>)
            }
            toast.success(<div className='font-serif text-black'>{(await response)?.data?.message}</div>)
        } catch (error) {
            console.error("Error:", error);
            toast.error(<div className='text-res-500 font-serif'>{error?.response?.data?.message}</div>);
        }
    }

    useEffect(() => {
        dispatch(fetchCardData())
    }, [dispatch, handelCardDelete])

    return (
        <div className='md:col-span-9 col-span-12 relative bg-white shadow-gray-300 rounded-lg'>
            <div className='grid grid-cols-12'>
                <ToastContainer />
                <div className='col-span-12 grid md:grid-cols-2 gap-4 cursor-pointer'>
                    {cardifData?.length ?
                        <>
                            {cardifData?.map((val, index) => (
                                <>
                                    <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto my-2">
                                        {/* Image */}
                                        <div className="p-5">
                                            <BsThreeDotsVertical className='float-right top-2 right-2 text-[23px] text-black hover:text-gray-900 cursor-pointer transition duration-300' onClick={() => toggleDropdown(index)} />

                                            <div className='flex justify-end fixed'>
                                                {dropdownOpen === index && (
                                                    <div className=" w-[110px] bg-white shadow-lg rounded-lg z-50">
                                                        <div className="text-left">
                                                            <div
                                                                className="px-4 py-1.5 rounded-lg hover:bg-black hover:text-white text-[20px] text-black font-serif cursor-pointer transition-colors duration-200"
                                                                onClick={() => handelCardEdit(val._id)}
                                                            >
                                                                Edit
                                                            </div>
                                                            <div
                                                                className="px-4 py-1.5 text-[20px] rounded-lg hover:bg-black hover:text-white text-red-500 transition-colors duration-200 font-serif cursor-pointer"
                                                                onClick={() => handelCardDelete(val._id)}
                                                            >
                                                                Delete
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        <NavLink to={`/RoomsAll/${val._id}`}>
                                            <img
                                                className="w-full h-48 object-cover"
                                                src={val?.thumbnail}
                                                alt="Product Image"
                                            />
                                        </NavLink>

                                        {/* Card Content */}
                                        <div className="p-4">
                                            {/* Title */}
                                            <h2 className="text-2xl font-medium font-serif text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-700">
                                                {val.title}
                                            </h2>

                                            {/* Price Section */}
                                            <div className="flex items-center justify-between font-serif">
                                                <div className="text-xl font-semibold text-gray-900">${val.discountPrice}</div>
                                                <div className="text-green-600 text-sm font-bold">
                                                    % {val.discountPercentage} Off
                                                </div>
                                                <div className=" text-gray-500 line-through">${val.price}</div>
                                            </div>

                                            {/* Description */}
                                            <p className="mt-2 text-strat text-gray-600 font-medium font-serif">
                                                {val.description}
                                            </p>

                                            {/* Icon and Location */}
                                            <div className="flex items-center justify-between mt-4">
                                                <span className="flex items-center">
                                                    <FaRegHeart
                                                        className="text-[22px] text-gray-900 hover:text-red-500 cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                                    // onClick={() => handellike(val._id)}
                                                    />
                                                    <h1 className="ml-2 font-serif text-[20px]">{val?.likes?.length}</h1>
                                                </span>
                                                <span className="flex items-center text-gray-600 font-serif">
                                                    <IoLocationOutline className="text-[22px]" />
                                                    {val.location}
                                                </span>
                                            </div>

                                            {/* Add to Cart and Buy Now Buttons */}
                                            {/* <div className="flex items-center justify-between mt-4">
                                                
                                                <button
                                                    className="bg-blue-500 text-white font-serif font-medium rounded-lg py-1"
                                                >
                                                    <span className="px-4 py-2">Add to Cart</span>
                                                </button>

                                                <button
                                                    className="rounded-lg relative py-1 bg-orange-500 text-white font-serif font-medium overflow-hidden"
                                                >
                                                    <span className="px-4 py-2">Buy Now</span>
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </>
                            ))}
                        </>
                        :
                        <>
                            <h1 className='mt-32 text-[30px] font-serif font-medium text-blue-500 relative inline-block hover:underline'>
                                Rooms Not Found...
                            </h1>
                        </>
                    }
                </div >
            </div>
            {isModalOpen && (
                <CardEditToAdmin
                    CardId={CardId}
                    handleCloseModal={handleCloseModal}
                />
            )}
        </div>
    )
}

// eslint-disable-next-line react/prop-types
const CardEditToAdmin = ({ CardId, handleCloseModal }) => {
    const [CardData, setCardData] = useState()
    const { register, handleSubmit } = useForm();
    const [Thumbnail, setThumbnail] = useState()
    const [selectedImages, setSelectedImages] = useState([]);
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const cardifData = useSelector((state) => state?.cardData?.Cardif);

    useEffect(() => {
        dispatch(fetchCardData())
    }, [dispatch])

    useEffect(() => {
        if (cardifData) {
            const Card = cardifData.filter((e) => e._id === CardId)
            setCardData(Card[0])
        }
    }, [CardId, cardifData, setCardData])

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onSubmit = async (data) => {
        const Token = localStorage.getItem("Token");

        // Redirect to login if token is missing
        if (!Token) {
            return Navigate("/Login"); // Ensure Navigate is correctly imported from 'react-router-dom'
        }

        const formdata = new FormData();
        // Append data fields to formdata
        formdata.append("title", data.title);
        formdata.append("description", data.description);
        formdata.append("price", data.price);
        formdata.append("DiscountPercentage", data.DiscountPercentage);
        formdata.append("DiscountPrice", data.DiscountPrice);
        formdata.append("location", data.location);
        formdata.append("country", data.country);

        // Check if Thumbnail exists before appending
        if (Thumbnail) {
            formdata.append("thumbnail", Thumbnail);
        }

        // Append images if available
        if (data.images && data.images.length > 0) {
            Array.from(data.images).forEach((file) => {
                formdata.append('images', file);
            });
        }

        try {
            const response = await axios.put(`https://hotel-management-server-1-n9cs.onrender.com/Admin/Edit/Rooms/${CardId}`, formdata, {
                // const response = await axios.put(`http://localhost:3000/Admin/Edit/Rooms/${CardId}`, formdata, {
                headers: {
                    Authorization: `Bearer ${Token}`,
                },
            });

            if (response.status === 200) {
                toast.success(<div className='font-serif text-black'>Product updated successfully!</div>);
                setTimeout(() => {
                    handleCloseModal()
                }, 2000);
            }
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Failed to update product.";
            toast.error(`Error: ${errorMessage}`);
        }
    };


    return (
        <>
            <div className="w-full absolute mx-auto p-6 top-0 right-0 h-full z-50  bg-gray-100 rounded shadow-md">
                <ToastContainer />
                <div onClick={handleCloseModal} className='float-right cursor-pointer text-[23px] font-bold font-serif'>
                    X
                </div>
                <h1 className="text-xl font-bold mb-4">Edit Product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <table className="table-auto w-full font-serif">
                        {/* First Row */}
                        <tr>
                            <td className="p-2 w-[45%]">
                                <label className="block text-[18px] mb-2">Title</label>
                                <input
                                    type="text"
                                    {...register('title')}
                                    defaultValue={CardData?.title}
                                    name='title'
                                    className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                                />
                            </td>
                            <td className="p-2">
                                <label className="block text-[18px] mb-2">Description</label>
                                <textarea
                                    {...register('description')}
                                    defaultValue={CardData?.description}
                                    name='description'
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </td>
                        </tr>

                        {/* Second Row */}
                        <tr>
                            <td className="p-2">
                                <label className="block text-[18px] mb-2">Price</label>
                                <input
                                    type="number"
                                    {...register('price')}
                                    defaultValue={CardData?.price}
                                    name='price'
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </td>
                            <td className="p-2">
                                <label className="block text-[18px] mb-2">Discount Percentage</label>
                                <input
                                    type="number"
                                    {...register('DiscountPercentage')}
                                    name='DiscountPercentage'
                                    defaultValue={CardData?.discountPercentage}
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </td>
                        </tr>

                        {/* Third Row */}
                        <tr>
                            <td className="p-2">
                                <label className="block text-[18px] mb-2">Discount Price</label>
                                <input
                                    type="number"
                                    {...register('DiscountPrice')}
                                    defaultValue={CardData?.discountPrice}
                                    name='DiscountPrice'
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </td>
                            <td className="p-2">
                                <label className="block text-[18px] mb-2">Location</label>
                                <input
                                    type="text"
                                    {...register('location')}
                                    defaultValue={CardData?.location}
                                    name='location'
                                    className="w-full px-3 py-2 border rounded border-black"
                                />
                            </td>
                        </tr>

                        {/* Fourth Row */}
                        <tr>
                            <td className="p-2">
                                <label className="block text-[18px] mb-2">Country</label>
                                <input
                                    type="text"
                                    {...register('country')}
                                    defaultValue={CardData?.country}
                                    name='country'
                                    className="w-full px-3 py-2 border rounded"
                                />
                            </td>

                            <td className="">
                                <label className="block text-[18px] mb-2">Thumbnail</label>
                                <input
                                    type="file"
                                    {...register('thumbnail')}
                                    placeholder="Enter thumbnail URL"
                                    name='thumbnail'
                                    className="w-full px-3 border rounded"
                                    onChange={(e) => setThumbnail(e.target.files[0])}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td colSpan="2">
                                <label className="block text-[18px] mb-2">Images</label>
                                <input
                                    type="file"
                                    {...register('images')}
                                    multiple
                                    name='images'
                                    onChange={handleImageChange}
                                    className="w-full px-3 border rounded "
                                />

                                {/* Image Preview */}
                                {selectedImages.length > 0 && (
                                    <div className="mt-4 grid grid-cols-3 gap-4">
                                        {selectedImages.map((image, index) => (
                                            <div key={index} className="relative">
                                                <img
                                                    src={URL.createObjectURL(image)}
                                                    alt={`preview-${index}`}
                                                    className="h-32 w-32 object-cover rounded"
                                                />
                                                <button
                                                    type="button"
                                                    className="absolute top-0 right-34 text-white bg-red-500 rounded-full px-2 py-1 text-xs"
                                                    onClick={() => {
                                                        setSelectedImages(selectedImages.filter((_, i) => i !== index));
                                                    }}
                                                >
                                                    X
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </td>
                        </tr>

                        {/* Submit Button */}
                        <tr className=''>
                            <td className="p-2" colSpan="2">
                                <button
                                    type="submit"
                                    className="w-full bg-blue-500 text-2xl text-white py-1.5 px-4 rounded hover:bg-blue-600 transition duration-300"
                                >
                                    Submit
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    )
}

const ProductForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [Thumbnail, setThumbnail] = useState()
    const [selectedImages, setSelectedImages] = useState([]);
    const dispatch = useDispatch()

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const onSubmit = async (data) => {
        const formdata = new FormData()
        formdata.append("title", data.title)
        formdata.append("description", data.description)
        formdata.append("price", data.price)
        formdata.append("DiscountPercentage", data.DiscountPercentage)
        formdata.append("DiscountPrice", data.DiscountPrice)
        formdata.append("location", data.location)
        formdata.append("thumbnail", Thumbnail)
        formdata.append("country", data.country)

        Array.from(data.images).forEach((file) => {
            formdata.append('images', file);
        });

        try {
            const response = await axios.post('https://hotel-management-server-1-n9cs.onrender.com/rooms/data/owner', formdata);
            // const response = await axios.post('http://localhost:3000/rooms/data/owner', formdata);
            if (response.status === 200) {
                toast.success(<div className='font-serif text-black'>Product created successfully!</div>);
                reset(); // Reset the form after successful submission
            }
        } catch (error) {
            toast.error(`Error: ${error.response?.data?.message || "Failed to create product."}`);
        }
    };

    useEffect(() => {
        dispatch(fetchCardData())
    }, [dispatch, onSubmit])

    return (
        // max-w-4xl
        <div className="w-full mx-auto p-6 bg-white rounded shadow-md">
            <ToastContainer />
            <h1 className="text-xl font-bold mb-4">Create Product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <table className="table-auto w-full font-serif">
                    {/* First Row */}
                    <tr>
                        <td className="p-2 w-[45%]">
                            <label className="block text-[18px] mb-2">Title</label>
                            <input
                                type="text"
                                {...register('title', { required: 'Title is required' })}
                                placeholder="Enter product title"
                                name='title'
                                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring"
                            />
                            {errors.title && <span className="text-red-500 text-sm">{errors.title.message}</span>}
                        </td>
                        <td className="p-2">
                            <label className="block text-[18px] mb-2">Description</label>
                            <textarea
                                {...register('description', { required: 'Description is required' })}
                                placeholder="Enter product description"
                                name='description'
                                className="w-full px-3 py-2 border rounded"
                            />
                            {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
                        </td>
                    </tr>

                    {/* Second Row */}
                    <tr>
                        <td className="p-2">
                            <label className="block text-[18px] mb-2">Price</label>
                            <input
                                type="number"
                                {...register('price', { required: 'Price is required' })}
                                placeholder="Enter price"
                                name='price'
                                className="w-full px-3 py-2 border rounded"
                            />
                            {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                        </td>
                        <td className="p-2">
                            <label className="block text-[18px] mb-2">Discount Percentage</label>
                            <input
                                type="number"
                                {...register('DiscountPercentage', { required: 'Discount Percentage is required' })}
                                name='DiscountPercentage'
                                placeholder="Enter discount percentage"
                                className="w-full px-3 py-2 border rounded"
                            />
                            {errors.DiscountPercentage && <span className="text-red-500 text-sm">{errors.DiscountPercentage.message}</span>}
                        </td>
                    </tr>

                    {/* Third Row */}
                    <tr>
                        <td className="p-2">
                            <label className="block text-[18px] mb-2">Discount Price</label>
                            <input
                                type="number"
                                {...register('DiscountPrice', { required: 'Discount Price is required' })}
                                placeholder="Enter discount price"
                                name='DiscountPrice'
                                className="w-full px-3 py-2 border rounded"
                            />
                            {errors.DiscountPrice && <span className="text-red-500 text-sm">{errors.DiscountPrice.message}</span>}
                        </td>
                        <td className="p-2">
                            <label className="block text-[18px] mb-2">Location</label>
                            <input
                                type="text"
                                {...register('location', { required: 'Location is required' })}
                                placeholder="Enter location"
                                name='location'
                                className="w-full px-3 py-2 border rounded border-black"
                            />
                            {errors.location && <span className="text-red-500 text-sm">{errors.location.message}</span>}
                        </td>
                    </tr>

                    {/* Fourth Row */}
                    <tr>
                        <td className="p-2">
                            <label className="block text-[18px] mb-2">Country</label>
                            <input
                                type="text"
                                {...register('country', { required: 'Country is required' })}
                                placeholder="Enter country"
                                name='country'
                                className="w-full px-3 py-2 border rounded"
                            />
                            {errors.country && <span className="text-red-500 text-sm">{errors.country.message}</span>}
                        </td>

                        <td className="">
                            <label className="block text-[18px] mb-2">Thumbnail</label>
                            <input
                                type="file"
                                {...register('thumbnail', { required: 'Thumbnail is required' })}
                                placeholder="Enter thumbnail URL"
                                name='thumbnail'
                                className="w-full px-3 border rounded"
                                onChange={(e) => setThumbnail(e.target.files[0])}
                            />
                            {errors.thumbnail && <span className="text-red-500 text-sm">{errors.thumbnail.message}</span>}
                        </td>
                    </tr>

                    <tr>
                        <td colSpan="2">
                            <label className="block text-[18px] mb-2">Images</label>
                            <input
                                type="file"
                                {...register('images', { required: 'Images are required' })}
                                multiple
                                name='images'
                                onChange={handleImageChange}
                                className="w-full px-3 border rounded "
                            />
                            {errors.images && <span className="text-red-500 text-sm">{errors.images.message}</span>}

                            {/* Image Preview */}
                            {selectedImages.length > 0 && (
                                <div className="mt-4 grid grid-cols-3 gap-4">
                                    {selectedImages.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={URL.createObjectURL(image)}
                                                alt={`preview-${index}`}
                                                className="h-32 w-32 object-cover rounded"
                                            />
                                            <button
                                                type="button"
                                                className="absolute top-0 right-34 text-white bg-red-500 rounded-full px-2 py-1 text-xs"
                                                onClick={() => {
                                                    setSelectedImages(selectedImages.filter((_, i) => i !== index));
                                                }}
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </td>
                    </tr>

                    {/* Submit Button */}
                    <tr className=''>
                        <td className="p-2" colSpan="2">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-2xl text-white py-1.5 px-4 rounded hover:bg-blue-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
};


export default Dashboard
