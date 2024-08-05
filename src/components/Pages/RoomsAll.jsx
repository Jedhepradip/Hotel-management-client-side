import React, { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';

const RoomsAll = () => {
  let { id } = useParams();
  const [images, setImages] = useState([]);
  const [imagesFour, setImagesFour] = useState([]);
  const [relativeImg, setRelativeImg] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const navigate = useNavigate();

  const Cardinfo = useSelector(state => state.Cardif.Cardif);

  const processCardData = (Card) => {
    const cardAll = Card.filter(e => e._id === id);
    setImagesFour(cardAll[0].images);
    setImages(cardAll);
    setImgUrl(cardAll[0].thumbnail);
    let relativeProduct = cardAll.map(e => e.location);
    const cardRelative = Card.filter(e => relativeProduct.includes(e.location));
    let cardrelativetoremovetp = cardRelative.filter(e => e._id !== id)
    setRelativeImg(cardrelativetoremovetp);
  };

  useEffect(() => {
    if (Cardinfo.length) {
      processCardData(Cardinfo[0].text);
    } else {
      let data = sessionStorage.getItem("Roomsdata");
      if (data) {
        let Card = JSON.parse(data);
        processCardData(Card);
      }
    }
  }, [Cardinfo, id]);

  let token = localStorage.getItem("Token");

  const handleCheckToken = (Roomsid) => {
    if (!token) {
      navigate("/SignIn");
    } else {
      navigate(`/BillAuth/${Roomsid}`);
    }
  };

  return (
    <>
      <div className='flex justify-center items-center mt-5 mb-2 relative font-serif'>
        <div className='flex bg-white border border-gray-900 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
          <div className='py-0 px-0 overflow-hidden'>
            {imagesFour.map((item, index) => (
              <div key={index} className='py-1 px-1 overflow-hidden'>
                <div className='bg-blue-700'>
                  <img
                    src={item.imgUrl}
                    alt='Image'
                    className='h-[105px] w-[110px] object-cover transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
                    onClick={() => setImgUrl(item.imgUrl)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='flex bg-gray-800 overflow-hidden'>
            <div className='flex overflow-hidden'>
              <img
                src={imgUrl}
                alt='Image'
                className='h-[452px] w-[500px] object-cover transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around items-center flex-wrap font-serif md:p-0 p-5'>
        {images.map((val, index) => (
          <div key={index} className='md:w-[50%] w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans'>
                  {val.title}
                </h5>
              </a>
              <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
                {val.description}
              </p>
              <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded font-bold'>
                <IoLocationOutline className='inline-block text-black mr-0 text-[25px]' />{' '}
                <span className='text-[19px]'>{val.location}</span>
              </span>
              <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
                <FaRegHeart className='inline-block text-black mr-1 text-[24px]' />
                <span className='font-bold text-[18px] absolute mt-6 -ml-5'>{val.likes.length}</span>
              </span>
              <br />

              <div onClick={() => handleCheckToken(val._id)} >
                {val.Booked ?
                  <>
                    <a
                      className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 '
                    >
                      Rooms Booked
                      {/* <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'
                                        >
                                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'
                                            />
                                        </svg> */}
                    </a>
                  </>
                  :
                  <>
                    <NavLink to={`/BillAuth/${val._id}`}>
                      <div className='cursor-pointer'>

                        <a
                          className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '
                        >
                          Book Now
                          <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'
                          >
                            <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9'
                            />
                          </svg>
                        </a>
                      </div>
                    </NavLink>
                  </>
                }
              </div>

              <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                <span className='text-black text-[15px] font-bold'>
                  {val.discountPercentage}% Off
                </span>
              </div>
              <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                <p className='text-black text-[20px] font-bold'>
                  ₹{val.discountPrice}
                </p>
              </div>
              <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                <del className='text-black text-lg font-bold'>₹{val.price}</del>
              </div>
            </div>
          </div>
        ))}
      </div>


      <h1 className='font-bold text-3xl text-center hover:text-gray-600 font-serif'>Relative Hotels</h1>


      <div className='flex justify-around items-center flex-wrap bg-gray-100 mt-5 p-5 font-serif'>
        {relativeImg.map((val, index) => (
          <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NavLink to={`/RoomsAll/${val._id}`}>
              <span className='z-30  absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
              <img src={val.thumbnail} alt='Image' className='h-[100%] w-full p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default RoomsAll;

