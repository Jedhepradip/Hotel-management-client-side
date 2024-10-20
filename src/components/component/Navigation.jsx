import { useEffect, useState } from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FetchingUserData } from '../../App/UserSlice';
import "./SigIn.css";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserdata] = useState()
  const Dispatch = useDispatch();
  let token = localStorage.getItem("Token");

  const User = useSelector((state) => state?.Userdata.User)
  useSelector((state) => state?.cardData?.Cardif);

  useEffect(() => {
    Dispatch(FetchingUserData())
  }, [Dispatch])

  useEffect(() => {
    if (User) {
      setUserdata(User)
    }
  }, [User])

  

  return (
    <>
      {(userData?.user?.isAdmin == "false" || userData?.length == 0 || (!localStorage.getItem("Token"))) ?
        <>
          <nav className="bg-white border-gray-200 fixed w-full z-50 font-serif text-[18px] px-5">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto">
              <a className="flex items-center space-x-3">
                <h1 className='font-bold font-sans text-[25px] md:ml-[50px] ml-2'>Stay<span className='text-red-500'>Master</span></h1>
              </a>
              <button
                type="button"
                className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col md:flex-row md:space-x-8 py-3 bg-transparent border-gray-100 md:border-0">
                  <div className="md:flex gap-10">
                    <li>
                      <NavLink to={"/"}>
                        <a href="#" className="block py-2 px-3 rounded md:bg-transparent text-black md:p-0 dark:text-white md:dark:text-blue-500 md:py-1 md:px-0" aria-current="page">Home</a></NavLink>
                    </li>
                    <li>
                      <NavLink to={"/About"}>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:py-1 md:px-0">About</a></NavLink>
                    </li>
                    <li>
                      <NavLink to={"/Card"}>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:py-1 md:px-0">Card</a></NavLink>
                    </li>
                    <li>
                      <NavLink to={"/Contact"}>
                        <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:py-1 md:px-0">Contact</a></NavLink>
                    </li>
                  </div>

                  {token ? (
                    <>
                      <li className="relative">
                        <NavLink to="/Wishlist" className="flex items-center space-x-1">
                          <FaRegHeart className="text-[30px] text-gray-700 hover:text-red-600 transition-colors duration-300" />
                          <div className="absolute -top-2 -right-3 flex items-center justify-center h-6 w-6 bg-red-600 text-white text-sm rounded-full">
                            {userData?.user?.Rooms?.length}
                          </div>
                        </NavLink>
                      </li>

                      <li className="relative">
                        <NavLink to="/AddtoRooms">
                          <FaShoppingCart className="text-[30px] text-gray-700 hover:text-red-600 transition-colors duration-300" />
                          {/* Conditionally render the badge only if there are rooms */}
                          {userData?.user?.Rooms?.length > 0 && (
                            <div className="absolute -top-2 -right-3 flex items-center justify-center h-6 w-6 bg-red-600 text-white text-sm rounded-full">
                              {userData?.user?.AddToCardRooms?.length}
                            </div>
                          )}

                          <div className="absolute -top-2 -right-3 flex items-center justify-center h-6 w-6 bg-red-600 text-white text-sm rounded-full">
                            {userData?.user?.AddToCardRooms?.length}
                          </div>

                        </NavLink>
                      </li>

                      <li>
                        <NavLink to="/ProfilePage">
                          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                            <img src={`http://localhost:3000/${userData?.user?.ProfileImg}`} alt="Profile" className="h-full w-full rounded-full object-cover" />
                          </div>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <NavLink to={"/Login"}>
                          <a href="#" className="py-2 px-3 md:mt-0 mt-1 text-gray-900 md:w-full w-20 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:py-1 md:px-4 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent shadow shadow-gray-300 flex justify-center items-center">Login</a></NavLink>
                      </li>
                      <li>
                        <NavLink to={'/SignIn'}>
                          <a href="#" className="py-2 px-2 md:mt-0 mt-2 md:w-full w-20 rounded md:hover:bg-purple-600 md:hover:bg-transparent md:border-0 md:hover:text-black md:dark:hover:bg-transparent bg-purple-800 text-white md:py-1 md:px-4 flex justify-center items-center hover:shadow shadow-gray-300 hover:text-black">SignIn</a></NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className="absolute top-0 right-0 mt-12 w-96">
            </div>
          </nav>
        </>
        :
      <>
        <h1>{null}</h1>
      </>
      }

    </>
  );
};

export default NavigationBar;
