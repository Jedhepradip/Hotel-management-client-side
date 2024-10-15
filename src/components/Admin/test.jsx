import { useEffect, useState } from 'react'
import { Fetchingadminuser } from '../../App/AdminUserSlice';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaChartBar, FaCog, FaHome, FaSignOutAlt, FaUser } from 'react-icons/fa'

const AdminUser = () => {
    const [userdata, Setuserdata] = useState([])
    const [AllUser, setAlluser] = useState([])
    const User = useSelector((state) => state?.Userdata.User)
    const cardifData = useSelector((state) => state?.cardData?.Cardif);
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
        if (AdminUser) {
            setAlluser(AdminUser)
        }
    }, [AdminUser, User])

    const handelLogOut = () => {
        localStorage.removeItem("Token")
        Navigate("/Login")
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
                            <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                                <a href="#" className="flex items-center">
                                    <FaHome className="mr-2" />
                                    <span>Home</span>
                                </a>
                            </li>
                            <NavLink to="/AllUserAdminShow">
                                <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                                    <a href="#" className="flex items-center">
                                        <FaUser className="mr-2" />
                                        <span>Users</span>
                                    </a>
                                </li>
                            </NavLink>
                            <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                                <a href="#" className="flex items-center">
                                    <FaChartBar className="mr-2" />
                                    <span>Reports</span>
                                </a>
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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Stats Cards */}
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Users</h3>
                                <p className="text-3xl font-bold text-blue-600">{AllUser?.length}</p>
                            </div>

                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Rooms</h3>
                                <p className="text-3xl font-bold text-blue-600">{cardifData?.length}</p>
                            </div>


                            {/* <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Earnings</h3>
                  <p className="text-3xl font-bold text-blue-600">$12,345</p>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Pending Reviews</h3>
                  <p className="text-3xl font-bold text-blue-600">15</p>
                </div> */}

                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default AdminUser
