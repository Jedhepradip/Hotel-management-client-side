import { useEffect, useState } from 'react'
import { Fetchingadminuser } from '../../App/AdminUserSlice';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsThreeDots } from "react-icons/bs";
import { FaChartBar, FaCog, FaHeart, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa'
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

    const ShowThehotmePage = () => {
        setHome(!Home)
        setUser(false)
    }
    const ShowTheUserPage = () => {
        setUser(!UserPage)
        setHome(false)
    }
    const ShowTheRoomsPage = () => {
        setRooms(!Roomd)
        setHome(false)
        setUser(false)
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
                            <li className="px-6 py-3 hover:bg-blue-700 transition-all" onClick={() => ShowThehotmePage()}>
                                <a href="#" className="flex items-center">
                                    <FaHome className="mr-2" />
                                    <span>Home</span>
                                </a>
                            </li>

                            <li onClick={() => ShowTheUserPage()}>
                                <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                                    <a href="#" className="flex items-center">
                                        <FaUser className="mr-2" />
                                        <span>Users</span>
                                    </a>
                                </li>
                            </li>

                            <li className="px-6 py-3 hover:bg-blue-700 transition-all" onClick={() => ShowTheRoomsPage()}>
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
                    <main className="flex-grow p-6 bg-gray-100">
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

    const AdminUser = useSelector((state) => state?.Alluserdata?.AllUser);

    return (
        <div className="mx-auto">
            <h2 className="text-2xl font-bold mb-4">User List</h2>

            {/* Table structure */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                    <thead>
                        <tr>
                            <th className="text-left py-2 px-4 border-b-2">Profile Image</th>
                            <th className="text-left py-2 px-4 border-b-2">Name</th>
                            <th className="text-left py-2 px-4 border-b-2">Email</th>
                            <th className="text-left py-2 px-4 border-b-2">Contact</th>
                            <th className="text-left py-2 px-4 border-b-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AdminUser?.map((user, index) => (
                            <tr key={index}>
                                {/* Profile Image */}
                                <td className="py-2 px-4 border-b">
                                    <img
                                        src={`http://localhost:3000/${user?.ProfileImg}`} // Fallback to a placeholder if no image
                                        alt={user?.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </td>

                                {/* Name */}
                                <td className="py-2 px-4 border-b">
                                    {user?.name || 'N/A'}
                                </td>

                                {/* Email */}
                                <td className="py-2 px-4 border-b">
                                    {user?.email || 'N/A'}
                                </td>

                                {/* Contact */}
                                <td className="py-2 px-4 border-b">
                                    {user?.mobile || 'N/A'}
                                </td>

                                {/* Three-dot Icon for additional actions */}
                                <td className="py-2 px-7 border-b text-center text-[20px]">
                                    <BsThreeDots className="text-gray-600 hover:text-gray-800 cursor-pointer" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

const AllRoomd = () => {

    const cardifData = useSelector((state) => state?.cardData?.Cardif);
    console.log(cardifData);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Rooms List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardifData?.map((room, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden relative">
                        {/* Room Image */}
                        <img
                            src={`${room?.thumbnail}`} // Fallback image if none provided
                            alt={room?.title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Room Details */}
                        <div className="p-4">
                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2">{room?.title}</h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-4">{room?.description || 'No description available.'}</p>

                            {/* Likes and Actions */}
                            <div className="flex items-center justify-between">
                                {/* Likes */}
                                <div className="flex items-center">
                                    <FaHeart className="text-red-500 mr-1" />
                                    <span>{room?.likes || 0} Likes</span>
                                </div>
                            </div>
                        </div>

                        {/* Optional: Add actions or icons in the top-right corner */}
                        <div className="absolute top-4 right-4 cursor-pointer">
                            {/* Could be for editing or deleting */}
                            <FaHeart className="text-gray-600 hover:text-red-500" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard
