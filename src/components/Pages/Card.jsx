import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCardData } from '../../App/CardSlice';
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
const stripePromise = loadStripe('pk_test_51Q7VKrP6jlrB3RhjwiYFqR25TaT6c8SGVXjkatIkKyq7nmtGNt4zhAFKF3lbjDUfp4emprVclNUXi1uGni0Vufje006Hvc0x24');

const Card = () => {
    const [location, setLocation] = useState()
    const [Country, SetCounty] = useState()
    const [show, setshow] = useState()
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    /* ...other states, effects, and functions... */
    const Navigate = useNavigate()
    const dispatch = useDispatch();
    const cardifData = useSelector((state) => state.cardData.Cardif);

    useEffect(() => {
        dispatch(fetchCardData());
    }, [dispatch]);

    useEffect(() => {
        setshow(cardifData)
    }, [cardifData])

    useEffect(() => {
        if (cardifData?.length) {
            const locationset = cardifData?.map(e => e.location.toLowerCase());
            const uniqueLocations = [...new Set(locationset)];
            setLocation(uniqueLocations);
        }
        if (cardifData?.length) {
            const countryset = cardifData?.map(e => e.country.toLowerCase());
            const uniquecountry = [...new Set(countryset)];
            SetCounty(uniquecountry);
        }
    }, [cardifData])

    let token = localStorage.getItem("Token");

    const handellike = async (RoomsId) => {
        if (!token) {
            Navigate("/Login")
            return;
        }

        try {
            const response = await fetch(`https://hotel-management-server-1-n9cs.onrender.com/Rooms/User/Like/${RoomsId}`, {
                // const response = await fetch(`http://localhost:3000/Rooms/User/Like/${RoomsId}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`,
                }
            });
            await response.json();
            if (!response.ok) {
                console.log(response.status);
            }
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    const filterbyConuty = (country) => {
        if (cardifData?.length) {
            const similtercountry = cardifData?.filter((e) => e.country == country)
            setshow(similtercountry)
        }
    }

    const filterlocation = (location) => {
        if (cardifData?.length) {
            const similterlocation = cardifData?.filter((e) =>
                e.location.toLowerCase() === location.toLowerCase()
            );
            setshow(similterlocation)
        }
    }

    const setPrice = (priceRange) => {
        const price = parseFloat(priceRange); // Parse the price range
        let setpricerange = [];  // Use 'let' instead of 'const' to allow reassignment

        if (price >= 1000 && price <= 2000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 1000 && e.discountPrice <= 2000); // Compare as numbers
        }
        else if (price >= 2000 && price <= 3000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 2000 && e.discountPrice <= 3000);
        }
        else if (price >= 3000 && price <= 4000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 3000 && e.discountPrice <= 4000);
        }
        else if (price >= 4000 && price <= 5000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 4000 && e.discountPrice <= 5000);
        }
        else if (price >= 5000 && price <= 6000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 5000 && e.discountPrice <= 6000);
        }
        else if (price >= 6000 && price <= 7000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 6000 && e.discountPrice <= 7000);
        }
        else if (price >= 7000 && price <= 8000) {
            setpricerange = cardifData?.filter((e) => e.discountPrice >= 7000 && e.discountPrice <= 8000);
        }
        setshow(setpricerange);
    };

    const AddToCard = async (RoomsId) => {
        if (!token) {
            Navigate("/Login");
            return;
        }
        try {
            const response = await axios.put(`https://hotel-management-server-1-n9cs.onrender.com/User/AddToCard/${RoomsId}`, {}, {
                // const response = await axios.put(`http://localhost:3000/User/AddToCard/${RoomsId}`, {}, {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                toast.success(<div className='font-serif font-medium text-black'>Item added to cart successfully!</div>)
            }
            window.location.reload();
        } catch (error) {
            const errorMessage = error.response?.data?.message
            toast.error(<div className='font-serif font-medium text-red-600'>{errorMessage}</div>)
            console.log(error);
        }
    };

    // add the stripe code 
    const handleBuyNowClick = (product) => {
        setSelectedProduct(product);
        setShowPaymentModal(true);
    };

    const closePaymentModal = () => {
        setShowPaymentModal(false);
        setSelectedProduct(null);
    };

    return (

        <Elements stripe={stripePromise}>
            <div className='bg-gray-300 relative'>
                <ToastContainer />
                <div className='grid grid-cols-12 gap-4 p-4'>
                    {/* Filter Section */}
                    <div className='md:col-span-3 col-span-12 bg-white p-6 rounded-lg overflow-auto'>
                        <h1 className='font-bold text-center text-[25px] cursor-pointer'>Filter Rooms</h1>
                        <hr />

                        <h2 className='text-xl font-medium mb-4 px-2 cursor-pointer font-serif mt-4'>County</h2>
                        {Country?.map((val, index) => (
                            <>
                                <div className='px-3' key={index}>
                                    <input type="radio" id={val} name='Location-Filter-Jobs' className='mr-2' onClick={() => filterbyConuty(val)} />
                                    <label htmlFor={val} className='font-medium cursor-pointer font-serif'>{val}</label>
                                </div>
                            </>
                        ))}

                        <h2 className='text-xl font-medium mb-4 px-2 cursor-pointer font-serif mt-4'>Location</h2>
                        {location?.map((val, index) => (
                            <div className='px-3' key={index}>
                                <input type="radio" id={val} name='Location-Filter-Jobs' className='mr-2' onClick={() => filterlocation(val)} />
                                <label htmlFor={val} className='font-medium cursor-pointer font-serif'> {val.charAt(0).toUpperCase() + val.slice(1)}</label>
                            </div>
                        ))}

                        <h2 className='text-xl font-medium mb-0 px-2 mt-4 font-serif'>Price</h2>

                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary1" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("2000")} />
                            <label htmlFor="salary1" className='font-medium cursor-pointer'>1k to 2k</label>
                        </div>
                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary2" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("3000")} />
                            <label htmlFor="salary2" className='font-medium cursor-pointer'>2k to 3k</label>
                        </div>
                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary3" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("4000")}
                            />
                            <label htmlFor="salary3" className='font-medium cursor-pointer'>3k to 4k</label>
                        </div>
                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary4" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("5000")}
                            />
                            <label htmlFor="salary4" className='font-medium cursor-pointer'>4k to 5k</label>
                        </div>
                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary5" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("6000")}
                            />
                            <label htmlFor="salary5" className='font-medium cursor-pointer'>5k to 6k</label>
                        </div>
                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary6" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("7000")}
                            />
                            <label htmlFor="salary6" className='font-medium cursor-pointer'>6k to 7k</label>
                        </div>
                        <div className='px-3 ml-0'>
                            <input type="radio" id="salary7" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("8000")}
                            />
                            <label htmlFor="salary7" className='font-medium cursor-pointer'>7k to 8k</label>
                        </div>

                    </div>

                    {/* max-h-screen overflow-y-auto */}

                    <div className='md:col-span-9 col-span-12 bg-white shadow-gray-300 p-5 rounded-lg '>
                        <div className='grid grid-cols-12'>
                            <div className='col-span-12 grid md:grid-cols-3 gap-5 cursor-pointer'>
                                {show?.length ?
                                    <>
                                        {show?.map((val, index) => (
                                            <>
                                                <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto my-6">
                                                    {/* Image */}
                                                    <NavLink to={`/RoomsAll/${val._id}`}>
                                                        <img
                                                            className="w-full h-48 object-cover"
                                                            src={val?.thumbnail}
                                                            alt="Product Image"
                                                        />
                                                    </NavLink>

                                                    {/* Card Content */}
                                                    <div className="p-4">
                                                        {/* Title */}
                                                        <h2 className="text-2xl font-medium font-serif text-gray-900 mb-2 transition-colors duration-300 hover:text-blue-700">
                                                            {val.title}
                                                        </h2>

                                                        {/* Price Section */}
                                                        <div className="flex items-center justify-between font-serif">
                                                            <div className="text-xl font-semibold text-gray-900">${val.discountPrice}</div>
                                                            <div className="text-green-600 text-sm font-bold">
                                                                % {val.discountPercentage} Off
                                                            </div>
                                                            <div className=" text-gray-500 line-through">${val.price}</div>
                                                        </div>

                                                        {/* Description */}
                                                        <p className="mt-2 text-strat text-gray-600 font-medium font-serif">
                                                            {val.description}
                                                        </p>

                                                        {/* Icon and Location */}
                                                        <div className="flex items-center justify-between mt-4">
                                                            <span className="flex items-center">
                                                                <FaRegHeart
                                                                    className="text-[22px] text-gray-900 hover:text-red-500 cursor-pointer transition-transform duration-300 transform hover:scale-110"
                                                                    onClick={() => handellike(val._id)}
                                                                />
                                                                <h1 className="ml-2 font-serif text-[20px]">{val?.likes?.length}</h1>
                                                            </span>
                                                            <span className="flex items-center text-gray-600 font-serif">
                                                                <IoLocationOutline className="text-[22px]" />
                                                                {val.location}
                                                            </span>
                                                        </div>

                                                        {/* Add to Cart and Buy Now Buttons */}
                                                        <div className="flex items-center justify-between mt-4">
                                                            {/* Add to Cart Button */}
                                                            <button
                                                                className="bg-blue-500 text-white font-serif font-medium rounded-lg py-1"
                                                                onClick={() => AddToCard(val._id)}
                                                            >
                                                                <span className="px-4 py-2">Add to Cart</span>
                                                            </button>

                                                            {/* Buy Now Button */}
                                                            <button
                                                                className="rounded-lg relative py-1 bg-orange-500 text-white font-serif font-medium overflow-hidden"
                                                                onClick={() => handleBuyNowClick(val)}
                                                            >
                                                                <span className="px-4 py-2">Buy Now</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        ))}
                                    </>
                                    :
                                    <>
                                        <h1 className='mt-32 text-[30px] font-serif font-medium text-blue-500 relative inline-block hover:underline'>
                                            Rooms Not Found...
                                        </h1>
                                    </>
                                }
                            </div >
                        </div>
                    </div>

                </div>

                {/* Show Payment Modal */}
                {showPaymentModal && selectedProduct && (
                    <PaymentModal selectedProduct={selectedProduct} closePaymentModal={closePaymentModal} />
                )}

            </div >
        </Elements>
    );
};


const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();

    const handlePayment = async (event) => {
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

            const { data } = await axios.post('https://hotel-management-server-1-n9cs.onrender.com/Payment/api/create-payment-intent', {
                // const { data } = await axios.post('http://localhost:3000/Payment/api/create-payment-intent', {
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
        <>
            <ToastContainer />
            <div className=" inset-0 bg-gray-800 bg-opacity-75 md:flex md:items-center md:justify-center flex justify-center items-center z-50 absolute md:p-40">
                <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg md:p-6 md:w-[55%] w-[80%] p-7 max-w-2xl md:mt-44 relative mb-[2000px]">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">{selectedProduct.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-center ">Price: ₹{selectedProduct.price}</p>

                    <form onSubmit={handlePayment} className="space-y-2">

                        <div className="p-2">
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-serif">Name:</label>
                            <input
                                type="text"
                                id="name"
                                value={userName}
                                onChange={(e) => setUserName(e.target.value)}
                                className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-serif"
                                placeholder="Enter your name"
                                required
                            />
                        </div>


                        <div className="p-2">
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-serif">Email:</label>
                            <input
                                type="email"
                                id="email"
                                value={userEmail}
                                onChange={(e) => setUserEmail(e.target.value)}
                                className="w-full p-2 rounded-lg bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white font-serif"
                                placeholder="Enter your email"
                                required
                            />
                        </div>


                        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg border border-gray-300 dark:border-gray-600">
                            <CardElement
                                className="p-2"
                                options={{
                                    style: {
                                        base: {
                                            fontSize: '16px',
                                            color: '#424770',
                                            '::placeholder': {
                                                color: '#aab7c4',
                                            },
                                        },
                                        invalid: {
                                            color: '#9e2146',
                                        },
                                    },
                                }}
                            />
                        </div>


                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-3 px-4 rounded-lg text-white ${loading ? 'bg-blue-500 loading' : 'bg-blue-500 hover:bg-blue-700'} transition duration-300`}
                        >
                            {loading ? 'Processing...' : `Pay ₹${selectedProduct.price}`}
                        </button>
                    </form>

                    <button
                        onClick={closePaymentModal}
                        className="absolute md:top-4 md:right-4 top-2 right-1 bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white rounded-full md:px-3 md:py-1 px-2 text-xl transition duration-300"
                    >
                        &times;
                    </button>
                </div>
            </div>
        </>
    );
};

PaymentModal.propTypes = {
    selectedProduct: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    closePaymentModal: PropTypes.func.isRequired,
};

export default Card;
