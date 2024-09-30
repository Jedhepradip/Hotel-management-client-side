import React, { useEffect } from 'react';
import 'flowbite';
import { useSelector } from 'react-redux';
import RoomsLocationShow from './RoomsLocationShow';
import About from "./About"

const Home = () => {

  const user = useSelector(state => state.UserData.UserData);

  useEffect(() => {
  
  }, [user])
  

  return (
    <>
      <div className="w-full h-auto relative bg-white">
        {/* <div id="default-carousel" className="relative w-full" data-carousel="slide"> */}
          {/* <div className="relative h-56 overflow-hidden md:h-96">
            <div className=" duration-700 ease-in-out" data-carousel-item>
              <img src="https://images.unsplash.com/photo-1680012590952-df33ea34a855?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHZpbGxhfGVufDB8fDB8fHww" alt="Slide 1" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />              
              <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                <p className='px-5'>Book entire houses, villaas, cabins and more</p>
              </div>

            </div>
            <div className=" duration-700 ease-in-out" data-carousel-item>
              <img src="https://media.istockphoto.com/id/805011628/photo/armchair-in-living-room.webp?b=1&s=170667a&w=0&k=20&c=weYI_kyxFnc7n_gJDOwBZ_3bOmVD6gEuLwjxi-fT0yI=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 2" />

              <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                <p className='px-5'>Book entire houses, villaas, cabins and more</p>
              </div>

            </div>
            <div className=" duration-700 ease-in-out" data-carousel-item>
              <img src="https://media.istockphoto.com/id/528487340/photo/beach-living-on-sea-view.jpg?s=612x612&w=0&k=20&c=-txUQWbvHNG6jOAPQrduesK9foBw8hQid6f3Y2GnwYo=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 3" />

              <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                <p className='px-5'>Book entire houses, villaas, cabins and more</p>
              </div>

            </div>
            <div className=" duration-700 ease-in-out" data-carousel-item>
              <img src="https://media.istockphoto.com/id/657740026/photo/modern-living-room-with-nature-view-3d-rendering-image.jpg?s=612x612&w=0&k=20&c=RopfrIj0G95mgiCX1iwyLEBmsY2AvdeqGcygd2t3-BE=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 4" />

              <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                <p className='px-5'>Book entire houses, villaas, cabins and more</p>
              </div>

            </div>
            <div className=" duration-700 ease-in-out" data-carousel-item>
              <img src="https://media.istockphoto.com/id/1366628059/photo/picture-frame-in-living-room-interior-mock-up-in-gray-tones-with-tropical-palm-tree-leaves-3d.webp?b=1&s=170667a&w=0&k=20&c=Jo_GEingzAZurGHJKW-VyfoH9xXgJafr0YNnKWleOrM=" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="Slide 5" />

              <div className='w-full h-full py-5 px-5 relative text-white font-serif'>
                <h1 className='px-5 font-bold md:mt-[70px] md:text-[50px] text-[30px] '>A piece of paradise</h1>
                <h1 className='px-5 font-bold md:text-[50px] text-[30px]'>just for you</h1>
                <p className='px-5'>Book entire houses, villaas, cabins and more</p>
              </div>

            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div> */}

        {/* <RoomsLocationShow /> */}
        <About/>
      </div>
    </>
  );
};

export default Home;

