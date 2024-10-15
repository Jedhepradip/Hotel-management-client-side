import { useEffect, useState } from 'react'
import { Fetchingadminuser } from '../../App/AdminUserSlice';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { FaChartBar, FaCog, FaHome, FaRegHeart, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5';
import { RxCross2 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
    const [userdata, Setuserdata] = useState([])
    const [Home, setHome] = useState(true)
    const [UserPage, setUser] = useState(false)
    const [Roomd, setRooms] = useState(false)
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
        }
    }
    const ShowTheUserPage = (componentsName) => {
        if (componentsName == "Users") {
            setUser(true)
            setHome(false)
            setRooms(false)
        }
    }
    const ShowTheRoomsPage = (componentsName) => {
        if (componentsName == "Rooms") {
            setRooms(true)
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

                    <nav className="mt-10">
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
                                    <span>Roomd</span>
                                </span>
                            </li>
                            <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                                <a href="#" className="flex items-center">
                                    <FaCog className="mr-2" />
                                    <span>Settings</span>
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
                        <h2 className="text-2xl font-semibold text-gray-800">Dashboard</h2>
                        <div className="flex items-center space-x-4">
                            <p className="text-gray-700">Admin User</p>
                            <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                                <img src={`http://localhost:3000/${userdata?.user?.ProfileImg}`} alt="" className='object-cover' />
                            </div>
                        </div>
                    </header>
                    {/* Dashboard Stats */}
                    <main className="flex-grow bg-white p-10">
                        {Home && <>
                            <HomePage />
                        </>}
                        {UserPage && <>
                            <AllUser />
                        </>}
                        {Roomd && <>
                            <AllRoomd />
                        </>}
                    </main>
                </div>
            </div>
        </div>
    )
}

const HomePage = () => {
    const cardifData = useSelector((state) => state?.cardData?.Cardif);
    const AllUser = useSelector((state) => state?.Alluserdata?.AllUser);

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
                <p className="text-3xl font-bold text-blue-600">$12,345</p>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pending Reviews</h3>
                <p className="text-3xl font-bold text-blue-600">15</p>
            </div>
        </div>
    )
}

const AllUser = () => {
    const [userId, setUserId] = useState(null); // Store selected user ID
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    return (
        <>
            <div className="mx-auto h-full relative">
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
                                                        onClick={() => console.log('Delete User', user?.name)}
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

    console.log(file);

    const onSubmit = async (formData) => {
        const data = new FormData();
        data.append("ProfileImg", file)
        data.append("name", formData.name)
        data.append("email", formData.email)
        data.append("mobile", formData.mobile)

        try {
            // const response = await fetch("https://hotel-management-server-5drh.onrender.com/Eidit/User/Profile", {
            const response = await fetch(`http://localhost:3000/Eidit/User/Profile/${userId}`, {
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
                toast.success(`Profile Update Successfull..`)
                setTimeout(() => {
                    // navigate("/")
                    handleCloseModal()
                }, 2000)
            }
        } catch (error) {
            console.error("Error:", error);
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
    const cardifData = useSelector((state) => state?.cardData?.Cardif);
    console.log(cardifData);

    return (
        <div className='md:col-span-9 col-span-12 bg-white shadow-gray-300 rounded-lg'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 grid md:grid-cols-2 gap-4 cursor-pointer'>
                    {cardifData?.length ?
                        <>
                            {cardifData?.map((val, index) => (
                                <>
                                    <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto my-2">
                                        {/* Image */}
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
        </div>
    )
}

export default Dashboard
