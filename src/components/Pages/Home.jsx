import { useEffect, useState } from 'react';
import 'flowbite';
import About from "./About"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';
import Dashborad from "../Admin/Dashboard"
import { IoIosSearch } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [userData, setuserdata] = useState([])
  const [Search, setSearchShow] = useState([])
  const dispatch = useDispatch()
  const cardifData = useSelector((state) => state?.cardData?.Cardif);
  const User = useSelector((state) => state?.Userdata.User)

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
    if (!city) return setSearchShow([]);
    let filteredLocations = cardifData?.filter(e =>
      e.location.toUpperCase().includes(city.toUpperCase())
    );

    // Remove duplicate locations
    let uniqueLocations = filteredLocations.filter(
      (location, index, self) =>
        index === self.findIndex((loc) => loc.location === location.location)
    );
    setSearchShow(uniqueLocations);
  };

  const handleLocation = (location) => {
    const filteredLocations = cardifData.filter(e => e.location === location);
    console.log(filteredLocations);
    setSearchShow([]);
  };
  return (
    <>
      {(userData?.user?.isAdmin == "false" || userData?.length == 0 || (!localStorage.getItem("Token"))) &&
        <>
          <div className="w-full h-auto relative bg-white py-20 px-10 lg:px-20">
            <h1 className="text-[30px] lg:text-[36px] font-serif font-semibold text-center">
              Welcome To <span className="text-red-500">Hotel Management</span>
            </h1>

            <div className="max-w-3xl mx-auto mt-6">
              <p className="text-center font-serif text-[19px] lg:text-[22px] py-3 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta quidem, perspiciatis dolores, tempora neque.
              </p>

              <div className="relative mt-6 w-full px-10 lg:px-20">
                <IoIosSearch className="absolute text-gray-500 w-6 h-6 ml-3 top-1/2 transform -translate-y-1/2 transition-transform duration-300 hover:text-red-500" />
                <input
                  type="text"
                  placeholder="Search Location City"
                  className="pl-12 py-3 w-full border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-red-200 transition-all shadow-md hover:shadow-xl bg-gray-50 hover:bg-white text-gray-800 placeholder-gray-400 placeholder-opacity-75 duration-300"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </div>
            </div>

            {Search?.length > 0 && (
              <div className="bg-white shadow-lg rounded-lg p-4 mt-4 max-w-3xl mx-auto transition-all duration-300">
                {Search.map((val, index) => (
                  <>
                    <NavLink to={`/RoomsAll/${val._id}`}>
                      <div
                        key={index}
                        className="py-3 px-5 hover:bg-gray-100 cursor-pointer transition-all duration-300 flex justify-between items-center rounded-lg"
                        onClick={() => handleLocation(val)}
                      >

                        <div className="text-lg font-semibold text-gray-800">{val?.title}</div>
                        <div className="text-sm text-gray-500">{val?.location}</div>

                      </div>
                    </NavLink>
                  </>
                ))}
              </div>
            )}
          </div>

          <About />
        </>
      }
      {
        userData?.user?.isAdmin == "true" &&
        <>
          <Dashborad />
        </>
      }
    </>
  );
};

export default Home;

