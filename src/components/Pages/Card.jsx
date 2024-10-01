import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCardData } from '../../App/CardSlice';
import { FaRegHeart } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = () => {
    const [location, setLocation] = useState()
    const [Country, SetCounty] = useState()
    const [show, setshow] = useState()
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

    // let token = localStorage.getItem("Token");

    // const handeltocheecktoken = (Roomsid) => {
    //     if (!token) {
    //         navigate("/SignIn");
    //     } else {
    //         navigate(`/BillAuth/${Roomsid}`);
    //     }
    // };

    // const handelliketocheck = () => {
    //     if (!token) {
    //         navigate('/SignIn');
    //     }
    // };

    const handellike = async (RoomsId) => {
        console.log(RoomsId);
        try {
            // const response = await fetch(`https://hotel-management-server-5drh.onrender.com/Rooms/User/Like/${RoomsId}`, {
            const response = await fetch(`http://localhost:3000/Rooms/User/Like/${RoomsId}`, {
                method: "GET",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`,
                }
            });
            await response.json();
            if (!response.ok) {
                console.log(response.status);
            }
        } catch (error) {
            console.log(error);
        }
    };

    // const searchbyIndustry = (na) => {
    //     console.log(na);
    // }

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

        console.log(setpricerange);  // Log the filtered price range data
        setshow(setpricerange);  // Assuming 'setshow' updates the UI with the filtered results
    };

    console.log(cardifData);

    return (
        // <div className='bg-gray-50'>
        //     <h1 className='text-center text-[50px] font-serif'>OUR HOTELS</h1>
        //     <div className='flex justify-around items-center flex-wrap font-serif'>
        //         {cardlocation.map((val, index) => (
        //             <div key={index} className='max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 p-0 mb-[30px] mt-5 overflow-hidden'>
        //                 <div className='w-[100%] h-[270px] overflow-hidden'>
        //                     <NavLink to={`/RoomsAll/${val._id}`}>
        //                         <img src={val.thumbnail} alt='Image' className='h-[100%] w-[100%] p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110'
        //                         />
        //                     </NavLink>
        //                 </div>
        //                 <div className='p-5'>
        //                     <a href='#'>
        //                         <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white font-serif'>
        //                             {val.title}
        //                         </h5>
        //                     </a>
        //                     <p className='mb-1 font-normal text-gray-700 dark:text-gray-400'>
        //                         {val.description}
        //                     </p>
        //                     <span className='mb-2 inline-block text-gray-800 bg-white p-2 rounded font-bold'>
        //                         <IoLocationOutline className='inline-block text-black mr-0 text-[25px]' />{' '}
        //                         <span className='text-[19px]'>{val.location}</span>
        //                     </span>

        //                     <span onClick={() => handelliketocheck()} className=' relative mb-2 inline-block text-gray-800 bg-white p-2 rounded float-right'>
        //                         <FaRegHeart className='inline-block text-black mr-1 text-[24px]' onClick={() => handellike(val._id)} />
        //                         <span className='font-bold text-[18px] absolute mt-6 -ml-5'>
        //                             {val.likes?.length || 0}
        //                         </span>
        //                     </span>

        //                     <br />

        //                     {val.Booked ?
        //                         <>
        //                             <a className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-500 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 '>
        //                                 Rooms Booked
        //                             </a>
        //                         </>
        //                         :
        //                         <>
        //                             <div onClick={() => handeltocheecktoken(val._id)} className='cursor-pointer'>
        //                                 <a className='mt-1 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
        //                                     Book Now
        //                                     <svg className='rtl:rotate-180 w-3.5 h-3.5 ms-2' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 10'>
        //                                         <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
        //                                     </svg>
        //                                 </a>
        //                             </div>
        //                         </>
        //                     }

        //                     <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
        //                         <span className='text-black text-[15px] font-bold'>
        //                             {val.discountPercentage}% Off
        //                         </span>
        //                     </div>
        //                     <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
        //                         <p className='text-black text-[20px] font-bold'>
        //                             ₹{val.discountPrice}
        //                         </p>
        //                     </div>
        //                     <div className='inline-block text-gray-800 bg-white p-2 rounded float-right'>
        //                         <del className='text-black text-lg font-bold'>₹{val.price}</del>
        //                     </div>
        //                 </div>
        //             </div>
        //         ))}
        //     </div>
        // </div>

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

                            {/* {show?.length &&
                                <> */}
                            {show?.map((val, index) => (
                                <>
                                    <div key={index} className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 mx-auto my-6">
                                        {/* Image */}
                                        <img
                                            className="w-full h-48 object-cover"
                                            src={`http://localhost:3000/${val.thumbnail}`}
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
                                                    <h1 className='ml-[6px] font-serif text-[20px]'>{val?.likes?.length}</h1>
                                                </span>
                                                <span className='flex font-serif'>
                                                    <IoLocationOutline className='text-[22px]' />
                                                    {val.location}
                                                </span>
                                                {/* Add to Cart Button */}
                                                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                                                    Add to Cart
                                                </button>
                                            </div>

                                        </div>
                                    </div>
                                </>
                            ))}

                            {/* {Jobsdefualt.length ? (
                                <>
                                    {Jobsdefualt.map((val, index) => (
                                        <div key={index} className='py-3 px-5 shadow-md shadow-gray-300 rounded-lg overflow-hidden mb-10'>
                                            <div className='flex justify-between items-center mb-3'>
                                                <h1 className='font-medium text-[15px]'>{formatDate(val.createdAt)}</h1>
                                                <NavLink to="/SaveJobs" >
                                                    <div className='h-8 w-8 flex justify-center items-center p-1 bg-gray-100 rounded-full'>
                                                        <FaRegBookmark className='text-[18px]' />
                                                    </div></NavLink>
                                            </div>
                                            <div className='flex'>
                                                <div>
                                                    <img src={`http://localhost:8000/${val.company?.CompanyLogo}`} alt="Company Logo" className='h-12 w-12 rounded-lg object-cover' />
                                                </div>
                                                <div className='px-3'>
                                                    <h1 className='font-sans font-bold text-[14px]'>{val.companyName}</h1>
                                                    <h1 className='font-sans text-[11px] text-gray-500'>{val.location}</h1>
                                                </div>
                                            </div>
                                            <h1 className='py-1 font-bold text-[19px]'>{val?.title.charAt(0)?.toUpperCase() + val?.title?.slice(1)}</h1>
                                            <p className='font-serif'>{val.description}</p>
                                            <div className='flex justify-between items-center mt-3'>
                                                <h1 className='text-blue-800 px-2 font-bold rounded-lg text-[13px] shadow shadow-gray-300'>{`${val.position} Position`}</h1>
                                                <h1 className='text-red-500 px-3 font-bold rounded-lg text-[13px] shadow shadow-gray-300'>{val.jobtype}</h1>
                                                <h1 className='text-purple-700 px-3 font-bold rounded-lg text-[13px] shadow shadow-gray-300'>{`${val.salary} LPA`}</h1>
                                            </div>
                                            <div className='mt-3'>
                                                <NavLink to={`/JobsDetails/${val._id}`}>
                                                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Details</button>
                                                </NavLink>
                                                <button type="button" className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={() => handleSaveJobs(val._id)}>Save For Later</button>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            ) : (
                                <>
                                    <div className='h-screen flex justify-center items-center'>
                                        <h1 className='text-blue-800 hover:underline text-2xl px-2 mt-10 font-serif text-center'>Jobs Not Found...</h1>
                                    </div>
                                </>
                            )} */}
                        </div >
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;

