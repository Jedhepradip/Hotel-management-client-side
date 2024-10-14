// import { useState, useEffect } from 'react';
// import { FaRegHeart } from 'react-icons/fa';
// import { IoLocationOutline } from 'react-icons/io5';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { fetchCardData } from '../../App/CardSlice';
// import PaymentModal from './PaymentModal';

// const RoomsAll = () => {
//   let { id } = useParams();
//   const [Relativehotle, setRelativehotles] = useState([])
//   const [carddata, SetCardData] = useState([])
//   const [Image, SethotleImg] = useState([])
//   // const navigate = useNavigate();
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const dispatch = useDispatch()
//   const Cardinfo = useSelector((state) => state.cardData.Cardif);

//   const handleBuyNowClick = (product) => {
//     setSelectedProduct(product);
//     setShowPaymentModal(true);
//   };

//   const closePaymentModal = () => {
//     setShowPaymentModal(false);
//     setSelectedProduct(null);
//   };

//   useEffect(() => {
//     dispatch(fetchCardData())
//   }, [dispatch])


//   useEffect(() => {
//     const card = Cardinfo.filter((e) => e._id == id)
//     const RelativeHotel = Cardinfo.filter((e) => e?.location?.includes(carddata[0]?.location));
//     setRelativehotles(RelativeHotel)
//     SetCardData(card)
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [Cardinfo])


//   return (
//     <>
//       <div className='flex justify-center items-center mt-5 mb-2 relative font-serif'>
//         <div className='flex bg-white border border-gray-900 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
//           <div className='py-0 px-0 overflow-hidden'>
//             {carddata[0]?.images?.map((item, index) => (
//               <div key={index} className='py-1 px-1 overflow-hidden'>
//                 <div className='bg-blue-700'>
//                   <img
//                     src={item.imgUrl}
//                     alt='Image'
//                     className='h-[105px] w-[110px] object-cover transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
//                     onClick={() => SethotleImg(item.imgUrl)}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className='flex bg-gray-800 overflow-hidden'>
//             <div className='flex justify-center items-center overflow-hidden'>
//               <img
//                 src={Image.length > 0 ? Image : carddata[0]?.thumbnail}
//                 alt='Image'
//                 className='h-[452px] w-[500px] object-cover transition-transform ease-in-out duration-300 hover:scale-110'
//               />
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className='flex justify-around items-center flex-wrap font-serif md:p-0 p-5'>
//         {carddata?.map((val, index) => (
//           <div key={index} className='md:w-[50%] w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
//             <div className='p-5'>
//               <a href='#'>
//                 <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans'>
//                   {val?.title}
//                 </h5>
//               </a>
//               <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
//                 {val?.description}
//               </p>
//               <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded font-bold'>
//                 <IoLocationOutline className='inline-block text-black mr-0 text-[25px]' />{' '}
//                 <span className='text-[19px]'>{val?.location}</span>
//               </span>
//               <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                 <FaRegHeart className='inline-block text-black mr-1 text-[24px]' />
//                 <span className='font-bold text-[18px] absolute mt-6 -ml-5'>{val?.likes?.length}</span>
//               </span>
//               <br />

//               <div className='cursor-pointer'>
//                 <button
//                   className="rounded-lg relative py-1 bg-orange-500 text-white font-serif font-medium overflow-hidden"
//                   onClick={() => handleBuyNowClick(val)}
//                 >
//                   <span className="px-4 py-2">Buy Now</span>
//                 </button>
//               </div>

//               <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                 <span className='text-black text-[15px] font-bold'>
//                   {val.discountPercentage}% Off
//                 </span>
//               </div>
//               <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                 <p className='text-black text-[20px] font-bold'>
//                   ₹{val.discountPrice}
//                 </p>
//               </div>
//               <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                 <del className='text-black text-lg font-bold'>₹{val.price}</del>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>


//       <h1 className='font-bold text-3xl text-center hover:text-gray-600 font-serif'>Relative Hotels</h1>


//       <div className='flex justify-around items-center flex-wrap bg-gray-100 mt-5 p-5 font-serif'>
//         {Relativehotle.map((val, index) => (
//           <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//             <NavLink to={`/RoomsAll/${val._id}`}>
//               <span className='z-30  absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
//               <img src={val.thumbnail} alt='Image' className='h-[100%] w-full p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
//             </NavLink>
//           </div>
//         ))}
//       </div>

//       {showPaymentModal && selectedProduct && (
//         <PaymentModal selectedProduct={selectedProduct} closePaymentModal={closePaymentModal} />
//       )}

//     </>
//   );
// };

// export default RoomsAll;

import { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { fetchCardData } from '../../App/CardSlice';
import PaymentModal from './PaymentModal';

const RoomsAll = () => {
  let { id } = useParams();
  const [relativeHotels, setRelativeHotels] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [image, setHotelImg] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const dispatch = useDispatch();
  const Navigate = useNavigate()
  const cardInfo = useSelector((state) => state.cardData.Cardif);

  const token = localStorage.getItem("Token")
  const handleBuyNowClick = (product) => {
    if (!token) return Navigate("/Login")
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  const closePaymentModal = () => {
    setShowPaymentModal(false);
    setSelectedProduct(null);
  };

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  useEffect(() => {
    if (cardInfo.length > 0) {
      const card = cardInfo.filter((e) => e._id === id);
      if (card.length > 0) {
        setCardData(card);
        const relativeHotel = cardInfo.filter((e) => e?.location?.includes(card[0]?.location));
        setRelativeHotels(relativeHotel);
      }
    }
  }, [cardInfo, id]);

  return (
    <>
      <div className='flex justify-center items-center mt-5 mb-2 relative font-serif'>
        <div className='flex bg-white border border-gray-900 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
          <div className='py-0 px-0 overflow-hidden'>
            {cardData[0]?.images?.map((item, index) => (
              <div key={index} className='py-1 px-1 overflow-hidden'>
                <div className='bg-blue-700'>
                  <img
                    src={item.imgUrl}
                    alt='Image'
                    className='h-[105px] w-[110px] object-cover transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
                    onClick={() => setHotelImg(item.imgUrl)}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className='flex bg-gray-800 overflow-hidden'>
            <div className='flex justify-center items-center overflow-hidden'>
              <img
                src={image || cardData[0]?.thumbnail}
                alt='Image'
                className='h-[452px] w-[500px] object-cover transition-transform ease-in-out duration-300 hover:scale-110'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-around items-center flex-wrap font-serif md:p-0 p-5'>
        {cardData?.map((val, index) => (
          <div key={index} className='md:w-[50%] w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
            <div className='p-5'>
              <a href='#'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans'>
                  {val?.title}
                </h5>
              </a>
              <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
                {val?.description}
              </p>
              <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded font-bold'>
                <IoLocationOutline className='inline-block text-black mr-0 text-[25px]' />{' '}
                <span className='text-[19px]'>{val?.location}</span>
              </span>
              <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
                <FaRegHeart className='inline-block text-black mr-1 text-[24px]' />
                <span className='font-bold text-[18px] absolute mt-6 -ml-5'>{val?.likes?.length}</span>
              </span>
              <br />
              <div className='cursor-pointer'>
                <button
                  className="rounded-lg relative py-1 bg-orange-500 text-white font-serif font-medium overflow-hidden"
                  onClick={() => handleBuyNowClick(val)}
                >
                  <span className="px-4 py-2">Buy Now</span>
                </button>
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
        {relativeHotels.map((val, index) => (
          <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <NavLink to={`/RoomsAll/${val._id}`}>
              <span className='z-30 absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
              <img src={val.thumbnail} alt='Image' className='h-[100%] w-full p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
            </NavLink>
          </div>
        ))}
      </div>

      {showPaymentModal && selectedProduct && (
        <PaymentModal selectedProduct={selectedProduct} closePaymentModal={closePaymentModal} />
      )}
    </>
  );
};

export default RoomsAll;
