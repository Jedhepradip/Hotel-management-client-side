import { useEffect, useState } from 'react';
import 'flowbite';
import About from "./About"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FaHome, FaUser, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import { IoIosSearch } from 'react-icons/io';

const Home = () => {
  const [userData, setuserdata] = useState()
  const [Search, setSearchShow] = useState()
  const dispatch = useDispatch()
  const User = useSelector((state) => state?.Userdata.User)
  const cardifData = useSelector((state) => state.cardData.Cardif);

  useEffect(() => {
    dispatch(FetchingUserData())
    dispatch(fetchCardData())
  }, [dispatch])

  useEffect(() => {
    if (User) {
      setuserdata(User)
    }
  }, [User])

  const handleSearch = (city) => {
    if (!city) return setSearchShow([])
    let filteredLocations = cardifData
      .filter(e => e.location.toUpperCase().includes(city.toUpperCase()))
    setSearchShow([...new Set(filteredLocations)]);
  }

  const handleLocation = (location) => {
    const filteredLocations = cardifData.filter(e => e.location === location);
    console.log(filteredLocations);
    setSearchShow([]);
  };

  return (
    <>
      {(userData?.user?.isAdmin == false || null || " ") &&
        <>
          <div className="w-full h-auto relative bg-white py-20 px-20">
            <h1 className='text-[30px] font-serif font-medium text-center'>Welcome To <span className='text-red-500'>Hotle Management</span></h1>
            <div className='px-[300px]'>
              <p className='text-center font-serif text-[19px] py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Mollitia dicta quidem, perspiciatis dolores, tempora neque
              </p>
              <li className="relative">
                <IoIosSearch className="absolute text-black w-8 h-8 ml-2" />
                <input
                  type="text"
                  placeholder="Search Location City"
                  className="pl-10 py-1 border border-gray-900 rounded-lg"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </li>
            </div>

          </div>

          {Search?.length > 0 && (
            <div className="bg-black shadow-lg rounded-lg p-4">
              {Search.map((val, index) => (
                <div key={index} className="py-1 cursor-pointer" onClick={() => handleLocation(val)}>
                  {val}
                </div>
              ))}
            </div>
          )}
          <About />
        </>
      }
      {userData?.user?.isAdmin == true &&
        <>
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
                    <li className="px-6 py-3 hover:bg-blue-700 transition-all">
                      <a href="#" className="flex items-center">
                        <FaUser className="mr-2" />
                        <span>Users</span>
                      </a>
                    </li>
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
                    <li className="px-6 py-3 mt-4 border-t border-blue-700 hover:bg-blue-700 transition-all">
                      <a href="#" className="flex items-center">
                        <FaSignOutAlt className="mr-2" />
                        <span>Logout</span>
                      </a>
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
                    <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                  </div>
                </header>

                {/* Dashboard Stats */}
                <main className="flex-grow p-6 bg-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Stats Cards */}
                    <div className="bg-white shadow-md rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Users</h3>
                      <p className="text-3xl font-bold text-blue-600">1,234</p>
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Total Bookings</h3>
                      <p className="text-3xl font-bold text-blue-600">567</p>
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
                </main>
              </div>
            </div>
          </div>
        </>
      }
    </>
  );
};

export default Home;

