import React, { useEffect, useState } from 'react';
import 'flowbite';
import About from "./About"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FaHome, FaUser, FaCog, FaChartBar, FaSignOutAlt } from 'react-icons/fa';
import { FetchingUserData } from '../../App/UserSlice';

const Home = () => {
  const [userData, setuserdata] = useState()
  const dispatch = useDispatch()
  const User = useSelector((state) => state?.Userdata.User)

  useEffect(() => {
    dispatch(FetchingUserData())
  }, [dispatch])

  useEffect(() => {
    if (User) {
      setuserdata(User)
    }
  }, [User])

  return (
    <>
      {userData?.user?.isAdmin ?
        <>
          <div className="w-full h-auto relative bg-white">
            {/* <div id="default-carousel" className="relative w-full" data-carousel="slide"> */}
            <div className="relative h-56 overflow-hidden md:h-96">
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="https://images.unsplash.com/photo-1680012590952-df33ea34a855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHZpbGxhfGVufDB8fDB8fHww" alt="Slide 1" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                  <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                  <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                  <p className='px-5'>Book entire houses, villaas, cabins and more</p>
                </div>

              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="https://media.istockphoto.com/id/805011628/photo/armchair-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=weYI_kyxFnc7n_gJDOwBZ_3bOmVD6gEuLwjxi-fT0yI=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 2" />

                <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                  <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                  <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                  <p className='px-5'>Book entire houses, villaas, cabins and more</p>
                </div>

              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="https://media.istockphoto.com/id/528487340/photo/beach-living-on-sea-view.jpg?s=612x612&w=0&k=20&c=-txUQWbvHNG6jOAPQrduesK9foBw8hQid6f3Y2GnwYo=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 3" />

                <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                  <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                  <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                  <p className='px-5'>Book entire houses, villaas, cabins and more</p>
                </div>

              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="https://media.istockphoto.com/id/657740026/photo/modern-living-room-with-nature-view-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=RopfrIj0G95mgiCX1iwyLEBmsY2AvdeqGcygd2t3-BE=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 4" />

                <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                  <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                  <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                  <p className='px-5'>Book entire houses, villaas, cabins and more</p>
                </div>

              </div>
              <div className=" duration-700 ease-in-out" data-carousel-item>
                <img src="https://media.istockphoto.com/id/1366628059/photo/picture-frame-in-living-room-interior-mock-up-in-gray-tones-with-tropical-palm-tree-leaves-3d.webp?b=1&s=170667a&w=0&k=20&c=Jo_GEingzAZurGHJKW-VyfoH9xXgJafr0YNnKWleOrM=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 5" />

                <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                  <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                  <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                  <p className='px-5'>Book entire houses, villaas, cabins and more</p>
                </div>

              </div>
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>
          <About />
        </>
        :
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

