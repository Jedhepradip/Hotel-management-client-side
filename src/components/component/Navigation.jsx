import React, { useEffect, useState } from 'react';
import { FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardInformation } from '../CardSlice/CardDate';
import { UserInfromation, setsearchlocation } from '../CardSlice/CardDate.js';
import "./SigIn.css";
import { IoIosSearch } from 'react-icons/io';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [Card, setCardData] = useState([]);
  const [profilimg, setProfilimg] = useState(null);
  const [Shoping, setShopping] = useState(0);
  const [Search, setSearchShow] = useState([]);
  const [Userdata, setUserData] = useState([]);
  const [likes, setLikes] = useState(0);
  const Dispatch = useDispatch();
  const navigate = useNavigate();
  let token = localStorage.getItem("Token");

  const CardInfo = useSelector(state => state.Cardif.Cardif);
  const user = useSelector(state => state.UserData.UserData);

  const handleSearch = (city) => {
    let Card = CardInfo[0].text;
    let duplicateLocationRemove = [];
    let SearchLocation = Card.filter(e => e.location.toUpperCase().includes(city.toUpperCase()));
    SearchLocation.filter(e => duplicateLocationRemove.push(e.location));
    let locationArr = [...new Set(duplicateLocationRemove)];
    setSearchShow(locationArr);

    if (city.length === 0) {
      setSearchShow("");
    }
  };

  const handleLocation = (location) => {
    const Card = CardInfo[0].text;
    let SearchLocation = Card.filter(e => e.location === location);
    Dispatch(setsearchlocation(SearchLocation));
    setSearchShow("");
  };

  useEffect(() => {
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await fetch("https://hotel-management-server-5drh.onrender.com/Profile/User/Data", {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("Token")}`,
            }
          });
          if (!response.ok) {
            console.log(response.status);
          }
          const userdata = await response.json();
          sessionStorage.setItem("Userdata", JSON.stringify(userdata));
          Dispatch(UserInfromation(userdata));
          console.log("userdata.user.ProfilImg :",userdata.user.ProfilImg);
          setProfilimg(userdata.user.ProfilImg);
          setUserData(userdata)
          let shoppingLen = userdata.RoomstobookingUser.length;
          setShopping(shoppingLen);
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserData();
    }
  }, [token, CardInfo, Dispatch]);


  useEffect(() => {
    const fetchRoomsData = async () => {
      try {
        const response = await fetch('https://hotel-management-server-5drh.onrender.com/Product/data', {
          method: 'GET',
        });
        const data = await response.json();
        Dispatch(CardInformation(data.Product))
        setCardData(data)
        sessionStorage.setItem("Roomsdata", JSON.stringify(data.Product))
      } catch (error) {
        console.log(error);
      }
    };
    fetchRoomsData();
  }, [Dispatch]);

  useEffect(() => {
    if (user.length && CardInfo.length) {
      let data = CardInfo[0].text || Card.Product
      let UserId = user[0].text.user
      let lwishlistuserlength = 0;
      data.map((e) => {
        if (e.likes.length > 0) {
          e.likes.map((val) => {
            if (val.like == UserId._id) {
              lwishlistuserlength += 1
            }
          })
          setLikes(lwishlistuserlength);
        }
      });


    } else {
      let Card = JSON.parse(sessionStorage.getItem("Roomsdata"));
      let User = JSON.parse(sessionStorage.getItem("Userdata"));
      console.log("User ", User);
      if (!User == "null") {
        let lwishlistuserlength = 0;
        Card.map((e) => {
          if (e.likes.length > 0) {
            if (e.likes[0].like === User.user._id) {
              lwishlistuserlength += 1;
            }
          }
        });
        setLikes(lwishlistuserlength);
      }
    }
  }, [Card, Userdata, Shoping, likes]);

  return (
    <>
      <nav className="bg-gray-800 nav border-gray-200 dark:bg-gray-900 fixed w-[100%]  z-50 font-serif text-[18px]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Pradip Jedhe...</span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-800 md:text-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div className='md:flex gap-10 mr-5'>
                <li>
                  <NavLink to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">
                    Home</NavLink>
                </li>
                <li className=' md:mt-0 mt-2'>
                  <NavLink to="/About" className="block py-2 px-3 md:text-white rounded hover:bg-gray-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                    About
                  </NavLink>
                </li>
                <li className=' md:mt-0 mt-2'>
                  <NavLink to="/Contact" className="block py-2 px-3 md:text-white rounded hover:bg-gray-800 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</NavLink>
                </li>
              </div>
              <li className="flex cursor-auto items-center md:space-x-1 md:mt-0 mt-2 relative ">
                <IoIosSearch className='md:bg-white cursor-pointer absolute font-blod text-[20px] text-black md:h-[33px] md:-ml-7 w-8 rounded-tl-lg rounded-bl-lg border border-gray-700 h-[34px] ' />
                <input type="text" placeholder="Search Location City"
                  className="px-2 py-1 border border-gray-900 focus:outline-none focus:ring-0 focus:ring-white md:mr-1 ml-8  text-black rounded-tr-lg rounded-br-lg" onChange={(e) => handleSearch(e.target.value)} />
              </li>
              {(token) ?
                <>
                  <li>
                    <NavLink to={"/Wishlist"}>
                      <div className="relative">
                        <FaRegHeart className="text-[30px] md:mt-0 mt-5" />
                        <div className="absolute md:top-0 md:right-0 md:-mr-2 md:-mt-2 bg-orange-500 text-white rounded-full h-5 w-5 flex justify-center items-center -mr-5 -mt-10 ml-5 ">{likes}</div>
                      </div>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/AddtoRooms">
                      <div className="relative">
                        <FaShoppingCart className="text-[30px] md:mt-0 mt-5" />
                        <div className="absolute md:top-0 md:right-0 md:-mr-2 md:-mt-2 md:mb-0 bg-orange-500 text-white rounded-full h-5 w-5 flex justify-center items-center -mr-5 -mt-10 ml-5 ">{Shoping}</div>
                      </div></NavLink>
                  </li>
                  <li className='relative z-50 md:mt-0 mt-5'>
                    <NavLink to={"/ProfilePage"}>
                      <div className="h-8 w-8 rounded-full bg-red-500 md:bg-white flex items-center justify-center cursor-pointer">
                        <img src={`http://localhost:3000/${profilimg}`} alt="Profile" className="h-full w-full rounded-full object-cover" />
                      </div>
                    </NavLink>
                  </li>
                </>
                :
                <li className='md:mt-0 mt-2'>
                  <NavLink to="/SignIn">
                    <div className="rounded-lg text-black bg-gray-100">
                      <button className="px-4 py-[5px] font-blod bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                        Sign In
                      </button>
                    </div>
                  </NavLink>
                </li>}
            </ul >
          </div >
        </div >
        <div className='h-auto w-full z-[1000] absolute mt-1'>
          <div className='h-auto w-[400px] float-right mr-[105px] py-1 px-10 rounded-lg'>
            {Search.length === 0 ? null : Search.map((val, index) => (
              <div key={index} onClick={() => handleLocation(val)} className='py-1 px-3 bg-white border border-black rounded-lg mt-1 mb-2 cursor-pointer hover:bg-red-600 hover:text-white'>
                <NavLink to={"/"} className='font-serif  text-[20px] '>{val}</NavLink><br />
              </div>
            ))}
          </div>
        </div>
      </nav >
    </>
  );
}

export default NavigationBar;


