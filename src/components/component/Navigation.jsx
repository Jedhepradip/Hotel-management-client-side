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
          <nav className=" md:border-gray-500 w-full fixed z-50 font-serif text-[18px] px-5 md:pb-0 pb-4 md:shadow md:shadow-gray-600 bg-white ">
            <div className="max-w-screen-xl flex items-center justify-between mx-auto relative">
              {/* Logo */}
              <div className='md:pb-0 pb-10'>
                <a className="flex items-center space-x-3 absolute top-2 ring-0">
                  <h1 className="font-bold font-sans text-[25px] md:ml-[50px] ml-2">
                    Stay<span className="text-red-500">Master</span>
                  </h1>
                </a>
              </div>

              {/* Menu Button for Mobile */}
              <button
                type="button"
                className="inline-flex items-center bg-gray-600 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-900 absolute top-1 right-1"
                aria-expanded={isMenuOpen ? 'true' : 'false'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5 text-white" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>

              {/* Navigation Links */}
              <div className={`w-[50%] flex justify-start items-center md:bg-white md:p-0 py-1 md:px-0 px-2 bg-gray-200 rounded-lg md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`}>
                <ul className="flex flex-col md:flex-row md:space-x-8 py-3 bg-transparent border-gray-100 md:border-0">
                  <div className="md:flex gap-10">
                    <li>
                      <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
                        <span className="block py-2 px-3 text-black md:bg-transparent rounded hover:bg-gray-100 md:hover:text-blue-700">Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/About" onClick={() => setIsMenuOpen(false)}>
                        <span className="block py-2 px-3 text-gray-900 hover:bg-gray-100 rounded md:hover:text-blue-700">About</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Card" onClick={() => setIsMenuOpen(false)}>
                        <span className="block py-2 px-3 text-gray-900 hover:bg-gray-100 rounded md:hover:text-blue-700">Card</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/Contact" onClick={() => setIsMenuOpen(false)}>
                        <span className="block py-2 px-3 text-gray-900 hover:bg-gray-100 rounded md:hover:text-blue-700">Contact</span>
                      </NavLink>
                    </li>
                  </div>

                  {token ? (
                    <>
                      <li className="relative" onClick={() => setIsMenuOpen(false)}>
                        <NavLink to="/Wishlist">
                          <FaRegHeart className="text-[30px] text-gray-700 hover:text-red-600 transition-colors duration-300" />
                          {userData?.user?.Rooms?.length > 0 && (
                            <div className="absolute -top-2 -right-3 h-6 w-6 flex items-center justify-center bg-red-600 text-white text-sm rounded-full">
                              {userData?.user?.Rooms?.length}
                            </div>
                          )}
                        </NavLink>
                      </li>

                      <li className="relative" onClick={() => setIsMenuOpen(false)}>
                        <NavLink to="/AddtoRooms">
                          <FaShoppingCart className="text-[30px] text-gray-700 hover:text-red-600 transition-colors duration-300" />
                          {userData?.user?.AddToCardRooms?.length > 0 && (
                            <div className="absolute -top-2 -right-3 h-6 w-6 flex items-center justify-center bg-red-600 text-white text-sm rounded-full">
                              {userData?.user?.AddToCardRooms?.length}
                            </div>
                          )}
                        </NavLink>
                      </li>

                      <li onClick={() => setIsMenuOpen(false)}>
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
                        <NavLink to="/Login" onClick={() => setIsMenuOpen(false)}>
                          <span className="py-1.5a px-3 md:mt-0 mt-1 text-gray-900 md:w-full w-20 rounded hover:bg-gray-100 md:hover:text-blue-700 flex justify-center items-center shadow shadow-gray-300">Login</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/SignIn" onClick={() => setIsMenuOpen(false)}>
                          <span className="py-2 px-2 md:mt-0 mt-2 md:w-full w-20 rounded bg-purple-800 text-white md:py-1 md:px-4 hover:bg-purple-600 flex justify-center items-center hover:shadow shadow-gray-300">Sign In</span>
                        </NavLink>
                      </li>
                    </>
                  )}
                </ul>
              </div>
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
