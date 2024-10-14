// import { useState, useEffect } from 'react';
// import { FaRegHeart } from 'react-icons/fa';
// import { IoLocationOutline } from 'react-icons/io5';
// import { useSelector, useDispatch } from 'react-redux';
// import { NavLink, useParams, useNavigate } from 'react-router-dom';
// import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
// import { fetchCardData } from '../../App/CardSlice';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import PropTypes from 'prop-types';

// const RoomsAll = () => {
//   let { id } = useParams();
//   const [relativeHotels, setRelativeHotels] = useState([]);
//   const [cardData, setCardData] = useState([]);
//   const [image, setHotelImg] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showPaymentModal, setShowPaymentModal] = useState(false);
//   const dispatch = useDispatch();
//   const Navigate = useNavigate()
//   const cardInfo = useSelector((state) => state.cardData.Cardif);

//   const token = localStorage.getItem("Token")
//   const handleBuyNowClick = (product) => {
//     if (!token) return Navigate("/Login")
//     setSelectedProduct(product);
//     setShowPaymentModal(true);
//   };

//   const closePaymentModal = () => {
//     setShowPaymentModal(false);
//     setSelectedProduct(null);
//   };

//   useEffect(() => {
//     dispatch(fetchCardData());
//   }, [dispatch]);

//   useEffect(() => {
//     if (cardInfo.length > 0) {
//       const card = cardInfo.filter((e) => e._id === id);
//       if (card.length > 0) {
//         setCardData(card);
//         const relativeHotel = cardInfo.filter((e) => e?.location?.includes(card[0]?.location));
//         setRelativeHotels(relativeHotel);
//       }
//     }
//   }, [cardInfo, id]);

//   const stripePromise = loadStripe('pk_test_51Q7VKrP6jlrB3RhjwiYFqR25TaT6c8SGVXjkatIkKyq7nmtGNt4zhAFKF3lbjDUfp4emprVclNUXi1uGni0Vufje006Hvc0x24');

//   return (
//     <>
//       <Elements stripe={stripePromise}>
//         <div className='flex justify-center items-center mt-5 mb-2 relative font-serif'>
//           <div className='flex bg-white border border-gray-900 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
//             <div className='py-0 px-0 overflow-hidden'>
//               {cardData[0]?.images?.map((item, index) => (
//                 <div key={index} className='py-1 px-1 overflow-hidden'>
//                   <div className='bg-blue-700'>
//                     <img
//                       src={item.imgUrl}
//                       alt='Image'
//                       className='h-[105px] w-[110px] object-cover transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
//                       onClick={() => setHotelImg(item.imgUrl)}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className='flex bg-gray-800 overflow-hidden'>
//               <div className='flex justify-center items-center overflow-hidden'>
//                 <img
//                   src={image || cardData[0]?.thumbnail}
//                   alt='Image'
//                   className='h-[452px] w-[500px] object-cover transition-transform ease-in-out duration-300 hover:scale-110'
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='flex justify-around items-center flex-wrap font-serif md:p-0 p-5'>
//           {cardData?.map((val, index) => (
//             <div key={index} className='md:w-[50%] w-full bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5'>
//               <div className='p-5'>
//                 <a href='#'>
//                   <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans'>
//                     {val?.title}
//                   </h5>
//                 </a>
//                 <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
//                   {val?.description}
//                 </p>
//                 <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded font-bold'>
//                   <IoLocationOutline className='inline-block text-black mr-0 text-[25px]' />{' '}
//                   <span className='text-[19px]'>{val?.location}</span>
//                 </span>
//                 <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                   <FaRegHeart className='inline-block text-black mr-1 text-[24px]' />
//                   <span className='font-bold text-[18px] absolute mt-6 -ml-5'>{val?.likes?.length}</span>
//                 </span>
//                 <br />
//                 <div className='cursor-pointer'>
//                   <button
//                     className="rounded-lg relative py-1 bg-orange-500 text-white font-serif font-medium overflow-hidden"
//                     onClick={() => handleBuyNowClick(val)}
//                   >
//                     <span className="px-4 py-2">Buy Now</span>
//                   </button>
//                 </div>
//                 <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                   <span className='text-black text-[15px] font-bold'>
//                     {val.discountPercentage}% Off
//                   </span>
//                 </div>
//                 <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                   <p className='text-black text-[20px] font-bold'>
//                     ₹{val.discountPrice}
//                   </p>
//                 </div>
//                 <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
//                   <del className='text-black text-lg font-bold'>₹{val.price}</del>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <h1 className='font-bold text-3xl text-center hover:text-gray-600 font-serif'>Relative Hotels</h1>

//         <div className='flex justify-around items-center flex-wrap bg-gray-100 mt-5 p-5 font-serif'>
//           {relativeHotels.map((val, index) => (
//             <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//               <NavLink to={`/RoomsAll/${val._id}`}>
//                 <span className='z-30 absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
//                 <img src={val.thumbnail} alt='Image' className='h-[100%] w-full p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
//               </NavLink>
//             </div>
//           ))}
//         </div>

//         {showPaymentModal && selectedProduct && (
//           <PaymentModal selectedProduct={selectedProduct} closePaymentModal={closePaymentModal} />
//         )}
//       </Elements>
//     </>
//   );
// };

// const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [loading, setLoading] = useState(false);
//   const [userName, setUserName] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const navigate = useNavigate();

//   const handlePayment = async (event) => {
//     event.preventDefault();
//     if (!stripe || !elements) return;
//     setLoading(true);
//     try {
//       const Token = localStorage.getItem("Token");
//       // Check if the token exists, if not redirect to login page
//       if (!Token) {
//         toast.error('You need to log in first.');
//         return navigate("/login");
//       }

//       // Initiating API call to create payment intent
//       const { data } = await axios.post('http://localhost:3000/Payment/api/create-payment-intent', {
//         amount: Number(selectedProduct.price),
//         // eslint-disable-next-line react/prop-types
//         RoomsId: selectedProduct._id,
//         userName, // Ensure userName is available
//         userEmail, // Ensure userEmail is available
//       }, {
//         headers: {
//           Authorization: `Bearer ${Token}`,
//         },
//       });

//       const clientSecret = data.clientSecret;
//       if (!clientSecret) {
//         throw new Error("Failed to retrieve payment intent.");
//       }

//       // Confirming the payment
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             name: userName,
//             email: userEmail,
//           },
//         },
//       });

//       if (result.error) {
//         console.error('Payment failed:', result.error.message);
//         toast.error(result.error.message);
//         toast.error(<div className='text-red-600 font-serif'>{result.error.message}</div>);

//       } else if (result.paymentIntent?.status === 'succeeded') {
//         toast.success(<div className='text-black font-serif'>Payment succeeded!</div>);
//         console.log('Payment succeeded:', result.paymentIntent);
//       } else {
//         toast.error(<div className='font-serif text-red-600 '>Payment status is not successful.</div>);
//       }
//     } catch (error) {
//       // Differentiating error types and messages
//       if (error.response) {
//         console.error('API error:', error.response.data.message);
//         toast.error(<div className='font-serif text-red-600 '>{error.response.data.message}</div>);
//       } else if (error.request) {
//         console.error('Network error:', error.request);
//         toast.error(<div className='font-serif text-600'>Network error occurred. Please try again.</div>);
//       } else {
//         console.error('General error:', error.message);
//         toast.error(<div className='font-serif text-red-600'>{error.message}</div>);
//       }
//     } finally {
//       setLoading(false);
//       setTimeout(() => {
//         closePaymentModal();
//       }, 2500);
//     }

//   };

//   return (
//     <>
//       <ToastContainer />
//       <div className=" inset-0 bg-gray-800 bg-opacity-75 md:flex md:items-center md:justify-center flex justify-center items-center z-50 absolute md:p-40">
//         <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg md:p-6 md:w-[55%] w-[80%] p-7 max-w-2xl md:mt-44 relative mb-[2000px]">
//           <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">{selectedProduct.title}</h2>
//           <p className="text-gray-700 dark:text-gray-300 mb-6 text-center ">Price: ₹{selectedProduct.price}</p>

//           <form onSubmit={handlePayment} className="space-y-2">

//             <div className="p-2">
//               <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-serif">Name:</label>
//               <input
//                 type="text"
//                 id="name"
//                 value={userName}
//                 onChange={(e) => setUserName(e.target.value)}
//                 className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-serif"
//                 placeholder="Enter your name"
//                 required
//               />
//             </div>


//             <div className="p-2">
//               <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-serif">Email:</label>
//               <input
//                 type="email"
//                 id="email"
//                 value={userEmail}
//                 onChange={(e) => setUserEmail(e.target.value)}
//                 className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-serif"
//                 placeholder="Enter your email"
//                 required
//               />
//             </div>


//             <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
//               <CardElement
//                 className="p-2"
//                 options={{
//                   style: {
//                     base: {
//                       fontSize: '16px',
//                       color: '#424770',
//                       '::placeholder': {
//                         color: '#aab7c4',
//                       },
//                     },
//                     invalid: {
//                       color: '#9e2146',
//                     },
//                   },
//                 }}
//               />
//             </div>


//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 px-4 rounded-lg text-white ${loading ? 'bg-blue-500 loading' : 'bg-blue-500 hover:bg-blue-700'} transition duration-300`}
//             >
//               {loading ? 'Processing...' : `Pay ₹${selectedProduct.price}`}
//             </button>
//           </form>

//           <button
//             onClick={closePaymentModal}
//             className="absolute md:top-4 md:right-4 top-2 right-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-full md:px-3 md:py-1 px-2 text-xl transition duration-300"
//           >
//             &times;
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// PaymentModal.propTypes = {
//   selectedProduct: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
//   closePaymentModal: PropTypes.func.isRequired,
// };

// export default RoomsAll;



import { useState, useEffect } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { fetchCardData } from '../../App/CardSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const RoomsAll = () => {
  const { id } = useParams();
  const [relativeHotels, setRelativeHotels] = useState([]);
  const [cardData, setCardData] = useState([]);
  const [image, setHotelImg] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cardInfo = useSelector((state) => state.cardData.Cardif);

  const token = localStorage.getItem('Token');

  // Handle Buy Now Button Click
  const handleBuyNowClick = (product) => {
    if (!token) return navigate('/Login');
    setSelectedProduct(product);
    setShowPaymentModal(true);
  };

  // Close the payment modal
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

  const stripePromise = loadStripe('pk_test_51Q7VKrP6jlrB3RhjwiYFqR25TaT6c8SGVXjkatIkKyq7nmtGNt4zhAFKF3lbjDUfp4emprVclNUXi1uGni0Vufje006Hvc0x24');

  return (
    <>
      <Elements stripe={stripePromise}>
        <ToastContainer />
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
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-sans'>
                  {val?.title}
                </h5>
                <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>{val?.description}</p>
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
                  <span className='text-black text-[15px] font-bold'>{val.discountPercentage}% Off</span>
                </div>
                <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
                  <p className='text-black text-[20px] font-bold'>₹{val.discountPrice}</p>
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
      </Elements>
    </>
  );
};

// PaymentModal Component
// eslint-disable-next-line react/prop-types
// const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setIsProcessing(true);

//     try {
//       const { data: { clientSecret } } = await axios.post('/Payment/api/create-payment-intent', {
//         // eslint-disable-next-line react/prop-types
//         price: selectedProduct?.discountPrice,
//       });

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: { name, email },
//         },
//       });

//       if (result.error) {
//         toast.error(result.error.message);
//       } else if (result.paymentIntent.status === 'succeeded') {
//         toast.success('Payment successful!');
//         closePaymentModal();
//       }
//     } catch (error) {
//       toast.error('Error processing payment!');
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <div className=' top-0 left-0 w-full h-[100%] bg-black bg-opacity-50 flex justify-center items-center absolute'>
//       <div className='bg-white p-5 rounded-lg shadow-lg w-[400px]'>
//         <h2 className='text-xl font-bold mb-4'>Make Payment</h2>
//         <form onSubmit={handleSubmit}>
//           <div className='mb-4'>
//             <label className='block text-gray-700'>Name</label>
//             <input
//               type='text'
//               className='w-full border p-2 rounded-lg'
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label className='block text-gray-700'>Email</label>
//             <input
//               type='email'
//               className='w-full border p-2 rounded-lg'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className='mb-4'>
//             <label className='block text-gray-700'>Card Details</label>
//             <CardElement className='border p-2 rounded-lg' />
//           </div>
//           <button
//             type='submit'
//             className='bg-orange-500 text-white px-4 py-2 rounded-lg w-full'
//             disabled={isProcessing}
//           >            
//             {isProcessing ? 'Processing...' : 'Pay ₹'}
//           </button>
//         </form>
//         <button
//           className='mt-4 bg-gray-500 text-white px-4 py-2 rounded-lg w-full'
//           onClick={closePaymentModal}
//         >
//           Cancel
//         </button>
//       </div>
//     </div>
//   );
// };

// eslint-disable-next-line react/prop-types
const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [userEmail, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [isProcessing, setLoading] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    try {
      const Token = localStorage.getItem("Token");
      // Check if the token exists, if not redirect to login page
      if (!Token) {
        toast.error('You need to log in first.');
        return navigate("/login");
      }

      // Initiating API call to create payment intent
      const { data } = await axios.post('http://localhost:3000/Payment/api/create-payment-intent', {
        // eslint-disable-next-line react/prop-types
        amount: Number(selectedProduct.price),
        // eslint-disable-next-line react/prop-types
        RoomsId: selectedProduct._id,
        userName, // Ensure userName is available
        userEmail, // Ensure userEmail is available
      }, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      });

      const clientSecret = data.clientSecret;
      if (!clientSecret) {
        throw new Error("Failed to retrieve payment intent.");
      }

      // Confirming the payment
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: userName,
            email: userEmail,
          },
        },
      });

      if (result.error) {
        console.error('Payment failed:', result.error.message);
        toast.error(result.error.message);
        toast.error(<div className='text-red-600 font-serif'>{result.error.message}</div>);

      } else if (result.paymentIntent?.status === 'succeeded') {
        toast.success(<div className='text-black font-serif'>Payment succeeded!</div>);
        console.log('Payment succeeded:', result.paymentIntent);
      } else {
        toast.error(<div className='font-serif text-red-600 '>Payment status is not successful.</div>);
      }
    } catch (error) {
      // Differentiating error types and messages
      if (error.response) {
        console.error('API error:', error.response.data.message);
        toast.error(<div className='font-serif text-red-600 '>{error.response.data.message}</div>);
      } else if (error.request) {
        console.error('Network error:', error.request);
        toast.error(<div className='font-serif text-600'>Network error occurred. Please try again.</div>);
      } else {
        console.error('General error:', error.message);
        toast.error(<div className='font-serif text-red-600'>{error.message}</div>);
      }
    } finally {
      setLoading(false);
      setTimeout(() => {
        closePaymentModal();
      }, 2500);
    }

  };

  return (
    <div className='absolute inset-0 z-50 bg-black bg-opacity-60 flex justify-center items-center'>
      <div className='bg-white p-8 rounded-lg shadow-lg w-[400px] relative'>
        <h2 className='text-3xl font-serif mb-4 text-center'>Make Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-1.5'>
            <label className='block text-gray-700 font-medium mb-2 font-serif text-[19px]'>Name</label>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
              value={userName}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label className='block text-gray-700 font-medium mb-2 font-serif text-[19px]'>Email</label>
            <input
              type='email'
              className='w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400'
              value={userEmail}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700 font-medium mb-2 font-serif text-[21px]'>Card Details</label>
            <div className='p-3 border border-gray-300 rounded-lg focus:outline-none'>
              <CardElement />
            </div>
          </div>
          <button
            type='submit'
            className={`w-full bg-orange-500 text-white px-4 py-2.5 font-serif rounded-lg font-medium text-lg
            transition-transform duration-200 ease-in-out transform hover:scale-105
            ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-600'}`}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : `Pay ₹`}
          </button>
        </form>
        <button
          className='mt-4 bg-gray-600 text-white px-4 py-2.5 rounded-lg font-serif w-full font-medium text-lg transition-transform duration-200 ease-in-out transform hover:scale-105 hover:bg-gray-700'
          onClick={closePaymentModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};


export default RoomsAll;
