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
    const [file, setFile] = useState(null);
    const Alluser = useSelector((state) => state?.Alluserdata?.AllUser);
    const [dropdownOpen, setDropdownOpen] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [userInfo, setUserInfo] = useState(null); // Store the selected user info
    const { register, handleSubmit } = useForm();

    // Toggle dropdown for each user
    const toggleDropdown = (index) => {
        setDropdownOpen(dropdownOpen === index ? null : index);
    };

    // Handle Edit user
    const handleEdit = (id) => {
        const FilterUser = Alluser.find((e) => e._id === id);
        setUserInfo(FilterUser); // Set the selected user info
        setIsModalOpen(true); // Open the modal
        setDropdownOpen(11)
    };

    // Handle Close Modal
    const handleCloseModal = () => {
        setIsModalOpen(false); // Close modal
        setUserInfo(null); // Clear the user info
    };

    const onSubmit = (data) => {
        // Handle form submission logic here
        console.log('Updated Data:', data);
    };

    return (
        <div className="mx-auto h-full relative">
            {/* Table structure */}
            {!isModalOpen && (
                <>
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
                                        <td className="py-2 px-4 border-b">
                                            <img
                                                src={`http://localhost:3000/${user?.ProfileImg}`}
                                                alt={user?.name}
                                                className="w-12 h-12 rounded-full object-cover"
                                            />
                                        </td>
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
                </>
            )}

            {/* Modal for Editing User */}
            {isModalOpen && userInfo && (
                <div className="fixed inset-0 bg-gray-300 p-5 flex items-center justify-center bg-opacity-50 z-50 mb-10">
                    <div className="bg-white rounded-lg shadow-lg max-w-sm mx-auto p-3">
                        <div className="flex justify-end p-1">
                            <RxCross2
                                className="text-2xl text-red-500 cursor-pointer"
                                onClick={handleCloseModal}
                            />
                        </div>
                        <div className="p-3">
                            {/* <h2 className="text-2xl font-semibold text-center mb-5">Edit Profile</h2> */}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-lg mb-2 font-serif" htmlFor="ProfileImg">
                                        Upload Profile Picture
                                    </label>
                                    <input
                                        {...register("ProfileImg")}
                                        type="file"
                                        className="w-full border rounded-lg font-serif"
                                        onChange={(e) => setFile(e.target.files[0])}
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-lg mb-2 font-serif" htmlFor="name">
                                        Username
                                    </label>
                                    <input
                                        {...register("name")}
                                        defaultValue={userInfo?.name}
                                        className="w-full border rounded-lg p-2 font-serif"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-lg mb-2 font-serif" htmlFor="mobile">
                                        Phone
                                    </label>
                                    <input
                                        {...register("mobile")}
                                        defaultValue={userInfo?.mobile}
                                        className="w-full border rounded-lg p-2 font-serif"
                                        type="number"
                                        placeholder="Mobile"
                                    />
                                </div>
                                <div className="mb-2">
                                    <label className="block text-gray-700 text-lg mb-2 font-serif" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        {...register("email")}
                                        defaultValue={userInfo?.email}
                                        className="w-full border rounded-lg p-2 font-serif"
                                        type="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="flex justify-center font-serif">
                                    <button
                                        type="submit"
                                        className="bg-blue-700 w-full py-2 text-white rounded-lg font-serif"
                                    >
                                        Update Profile
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
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
