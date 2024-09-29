import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CardInformation } from '../CardSlice/CardDate';

const RoomsLocationShow = () => {
    const [CardInf, setCardInfo] = useState([]);
    const [cardinfor, setcardinfo] = useState([])
    const [Searchreltive, setSearchreltiveProduc] = useState([])
    const Dispatch = useDispatch()
    const Search = useSelector(state => state.search.search)
    const user = useSelector(state => state.UserData.UserData);    

    if(user.length){
        let updata = user[0].text.RoomstobookingUser.length
        console.log("updata :",updata);        
    }

    useEffect(() => {
        const fetchRoomsData = async () => {
            try {
                // const response = await fetch('https://hotel-management-server-5drh.onrender.com/Product/data', {
                const response = await fetch('http://localhost:3000/Product/data', {
                    method: 'GET',
                });
                const data = await response.json();
                Dispatch(CardInformation(data.Product))
                
                setCardInfo(data.Product)
                console.log(data.Product);
                sessionStorage.setItem("Roomsdata", JSON.stringify(data.Product))
            } catch (error) {
                console.log(error);
            }
        };
        fetchRoomsData();
    }, [CardInf.length]);

    useEffect(() => {
        for (let index = 0; index < Search.length; index++) {
            let SearchProd = Search[index].text
            setSearchreltiveProduc(SearchProd)
            SearchProd = " "
        }
    }, [Search.length,CardInf])

    let locationarr = []

    CardInf.filter(e => locationarr.push(e.location))
    let Dublicetarr = [...new Set(locationarr)]

    let Pradiplocation = []
    for (let index = 0; index < Dublicetarr.length; index++) {
        const pradip = CardInf.filter((val) => val.location == Dublicetarr[index])
        Pradiplocation.push(pradip)
    }
    let finallocation = []
    for (let index = 0; index < Pradiplocation.length; index++) {
        if (index < 4) {
            finallocation.push(Pradiplocation[index][0])
        }
    }

    const handleClick = () => {
        setcardinfo(CardInf)
    }

    return (
        <>
            <div className='relative p-2  mt-10 bg-white font-serif'>
                <h1 className='text-[30px] font-semibold p-2' >Explore Nearby</h1><br />
                <button className=' bg-white h-[40px] w-[120px] rounded-lg float-right font-semibold mr-4 border border-black ' onClick={handleClick}>Explore More</button>
                <p className='text-[25px] p-2'>Find The Best Places To Stay Anywhere Or Near You</p>

            </div>
            <div className='flex justify-around items-center flex-wrap bg-white mt-5'>
                {Searchreltive.map((val, index) => (
                    <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <NavLink to={`/Card/${val._id}`}>
                            <span className='z-30 font-blod font-serif absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
                            <img src={val.thumbnail} alt='Image' className='h-[100%] w-[100%] p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
                        </NavLink>
                    </div>
                ))}

                {/* Explore More button */}

                {cardinfor.map((val, index) => (
                    <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <NavLink to={`/Card/${val._id}`}>
                            <span className='font-serif z-30 font-blod absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
                            <img src={val.thumbnail} alt='Image' className='h-[100%] w-[100%] p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
                        </NavLink>
                    </div>
                ))}

                {finallocation.map((val, index) => (
                    <div key={index} className="overflow-hidden h-[400px] w-[300px] py-0 px-0 mb-[30px] max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <NavLink to={`/Card/${val._id}`}>
                            <span className=' font-serif z-30 font-blod absolute text-[30px] text-white p-6 mt-80'>{val.location}</span>
                            <img src={val.thumbnail} alt='Image' className='h-[100%] w-[100%] p-0 object-cover rounded-t-lg transition-transform ease-in-out duration-300 overflow-hidden hover:scale-110' />
                        </NavLink>
                    </div>
                ))}

            </div>
        </>
    )
}

export default RoomsLocationShow
