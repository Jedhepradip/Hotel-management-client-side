import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCardData } from '../../App/CardSlice';
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const Card = () => {
    const [location, setLocation] = useState()
    const [Country, SetCounty] = useState()
    const [show, setshow] = useState()
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
        if (cardifData) {
            const locationset = cardifData.map(e => e.location);
            const uniqueLocations = [...new Set(locationset)];
            setLocation(uniqueLocations);
        }
        if (cardifData) {
            const countryset = cardifData.map(e => e.country);
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
            // const response = await fetch(`https://hotel-management-server-5drh.onrender.com/Rooms/User/Like/${RoomsId}`, {
            const response = await fetch(`http://localhost:3000/Rooms/User/Like/${RoomsId}`, {
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
        if (cardifData) {
            const similtercountry = cardifData.filter((e) => e.country == country)
            setshow(similtercountry)
        }
    }

    const filterlocation = (location) => {
        if (cardifData) {
            const similterlocation = cardifData.filter((e) => e.location == location)
            setshow(similterlocation)
        }
    }

    const setPrice = (priceRange) => {
        const price = parseFloat(priceRange); // Parse the price range
        let setpricerange = [];  // Use 'let' instead of 'const' to allow reassignment

        if (price >= 1000 && price <= 2000) {
            setpricerange = cardifData.filter((e) => e.price >= 1000 && e.price <= 2000); // Compare as numbers
        }
        else if (price >= 2000 && price <= 3000) {
            setpricerange = cardifData.filter((e) => e.price >= 2000 && e.price <= 3000);
        }
        else if (price >= 3000 && price <= 4000) {
            setpricerange = cardifData.filter((e) => e.price >= 3000 && e.price <= 4000);
        }
        else if (price >= 4000 && price <= 5000) {
            setpricerange = cardifData.filter((e) => e.price >= 4000 && e.price <= 5000);
        }
        else if (price >= 5000 && price <= 6000) {
            setpricerange = cardifData.filter((e) => e.price >= 5000 && e.price <= 6000);
        }
        else if (price >= 6000 && price <= 7000) {
            setpricerange = cardifData.filter((e) => e.price >= 6000 && e.price <= 7000);
        }
        else if (price >= 7000 && price <= 8000) {
            setpricerange = cardifData.filter((e) => e.price >= 7000 && e.price <= 8000);
        }
        setshow(setpricerange);
    };

    const AddToCard = async (RoomsId) => {
        if (!token) {
            Navigate("/Login");
            return;
        }
        try {
            const response = await axios.put(`http://localhost:3000/User/AddToCard/${RoomsId}`, {}, {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            });

            if (response.status === 200) {
                toast.success("Item added to cart successfully!", {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("Failed to add item to cart. Please try again.", {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
            });
            console.log(error);
        }
    };


    return (

        <div className='bg-gray-300'>
            <ToastContainer />
            <div className='grid grid-cols-12 gap-4 p-4'>
                {/* Filter Section */}
                <div className='md:col-span-3 col-span-12 bg-white p-6 rounded-lg'>
                    <h1 className='font-bold text-center text-[25px] cursor-pointer'>Filter Jobs</h1>
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
                        <>
                            <div className='px-3' key={index}>
                                <input type="radio" id={val} name='Location-Filter-Jobs' className='mr-2' onClick={() => filterlocation(val)} />
                                <label htmlFor={val} className='font-medium cursor-pointer font-serif'>{val}</label>
                            </div>
                        </>
                    ))}

                    <h2 className='text-xl font-medium mb-0 px-2 mt-4 font-serif'>Price</h2>

                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary1" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("2000")} />
                        <label htmlFor="salary1" className='font-medium cursor-pointer'>1k to 2k</label>
                    </div>
                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary2" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("3000")} />
                        <label htmlFor="salary2" className='font-medium cursor-pointer'>2k to 3k</label>
                    </div>
                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary3" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("4000")}
                        />
                        <label htmlFor="salary3" className='font-medium cursor-pointer'>3k to 4k</label>
                    </div>
                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary4" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("5000")}
                        />
                        <label htmlFor="salary4" className='font-medium cursor-pointer'>4k to 5k</label>
                    </div>
                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary5" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("6000")}
                        />
                        <label htmlFor="salary5" className='font-medium cursor-pointer'>5k to 6k</label>
                    </div>
                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary6" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("7000")}
                        />
                        <label htmlFor="salary6" className='font-medium cursor-pointer'>6k to 7k</label>
                    </div>
                    <div className='px-3 font-serif ml-0'>
                        <input type="radio" id="salary7" name='Location-Filter-Jobs' className='mr-2' onClick={() => setPrice("8000")}
                        />
                        <label htmlFor="salary7" className='font-medium cursor-pointer'>7k to 8k</label>
                    </div>

                </div>

                <div className='md:col-span-9 col-span-12 bg-white shadow-gray-300 p-5 rounded-lg'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-12 grid md:grid-cols-3 gap-5 cursor-pointer'>
                            {show?.length ?
                                <>
                                    {show?.map((val, index) => (
                                        <>
                                            <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto my-6">
                                                {/* Image */}
                                                <img
                                                    className="w-full h-48 object-cover"
                                                    src={`http://localhost:3000/${val?.thumbnail}`}
                                                    alt="Product Image"
                                                />

                                                {/* Card Content */}
                                                <div className="p-4">
                                                    {/* Price Section */}
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-xl font-semibold text-gray-900">${val.discountPrice}</div>
                                                        <div className="text-sm text-gray-500 line-through">${val.price}</div>
                                                    </div>

                                                    {/* Discount Badge */}
                                                    <div className="mt-2 text-green-600 text-sm font-bold">
                                                        % {val.discountPercentage}
                                                    </div>

                                                    {/* Description */}
                                                    <p className="mt-2 text-gray-600 font-medium font-serif">
                                                        {val.description}
                                                    </p>
                                                    {/* Icon and Button */}
                                                    <div className="flex items-center justify-between mt-4">
                                                        <span>
                                                            <FaRegHeart className="text-[22px] text-gray-900 hover:text-gray-500 cursor-pointer transition-colors duration-300" onClick={() => handellike(val._id)} />
                                                            <h1 className='ml-[6px] font-serif text-[20px]'>
                                                                {val?.likes?.length}
                                                            </h1>
                                                        </span>
                                                        <span className='flex font-serif'>
                                                            <IoLocationOutline className='text-[22px]' />
                                                            {val.location}
                                                        </span>
                                                        {/* Add to Cart Button */}
                                                        <button className="bg-blue-700 text-white px-4 py-1.5 rounded-lg hover:bg-blue-500 transition-colors duration-300 font-serif font-medium" onClick={() => AddToCard(val._id)}>
                                                            Add to Cart
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
        </div >
    );
};

export default Card;
