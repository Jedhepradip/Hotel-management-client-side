import  { useState, useEffect } from 'react'
const About = () => {

    const [ImgAbout1, setImg] = useState([])
    const [ImgAbout2, setImg1] = useState([])
    const [ImgAbout3, setImg2] = useState([])

    useEffect(() => {
        setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588123.jpg?k=1c90776a84f7e142b5278c3781b300cdc9fbebed45399b464960491b355ed224&o=")
        setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185045.jpg?k=71d1eac153f5026db9e6d9cc7ae16fda0c6d1b3a86a01107938e9015b15dd93c&o=")
        setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919269.jpg?k=dc9f41b3103afdf1900d17dd83e8c7554d24364e6f6a166fa12b1cc8f7932591&o=")
    }, [])


    const [items] = useState([

        {
            id: 1,
            name: 'John Doe',
            Img: "https://media.istockphoto.com/id/472183747/photo/chefs-in-a-cooking-class.jpg?s=612x612&w=0&k=20&c=1ocg6sbpFSRH6aRgP9sma34vvdJy3bBpx5L_gVkF24I=",
            description: 'John Doe is a highly skilled hotel manager responsible for overseeing all daily operations, ensuring exceptional guest experiences, managing staff, and handling any issues that '
        },
        {
            id: 2,
            name: 'Jane Smith',
            Img: "https://media.istockphoto.com/id/157726781/photo/chief.jpg?s=612x612&w=0&k=20&c=RLyax-ypcSENOu2Wn2IPnnqhthAExRv8rIUXRJd7y6E=",
            description: 'Jane Smith is a hospitality expert with extensive experience in enhancing guest experiences. She focuses on delivering personalized services, handling guest requests, and'
        },
        {
            id: 3,
            name: 'Alice Johnson',
            Img: "https://media.istockphoto.com/id/1450128373/photo/portrait-of-a-chef-with-students-on-background-during-cooking-class.jpg?s=612x612&w=0&k=20&c=Yd4amoCGAw3Ed3lyP5bPyA6KtY0TcimGhcA3qCMQ4cM=",
            description: 'Alice Johnson is an event planner specializing in organizing and coordinating large-scale events and conferences at the hotel. She ensures that every event runs smoothly, '
        },
        {
            id: 4,
            name: 'Bob Brown',
            Img: 'https://media.istockphoto.com/id/1175210698/photo/asian-chefs-working-with-menu.jpg?s=612x612&w=0&k=20&c=jCrGr7ArQJUajhGC_l1htifXYaHGqmE9MfpStISzGx4=',
            description: 'Bob Brown serves as the front desk manager, responsible for overseeing check-ins and check-outs, addressing guest concerns, and providing exceptional customer service. His role involves.'
        },
        {
            id: 5,
            name: 'Charlie Green',
            Img: "https://media.istockphoto.com/id/1163284737/photo/chefs-posing-in-a-professional-kitchen-of-a-gourmet-restaurant.jpg?s=612x612&w=0&k=20&c=UMGrbfVS8CuPTPixWFBAHXLvX40ToqXznvk7eEkxVnY=",
            description: 'Charlie Green is a talented hotel chef known for crafting exquisite gourmet meals and overseeing banquet planning. His culinary expertise and creativity ensure that guests enjoy a.'
        },
        {
            id: 6,
            name: 'Diana White',
            Img: "https://media.istockphoto.com/id/875991950/photo/indian-chef-at-his-restaurant-looking-at-the-camera-smiling-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=PwQsUkWm5uGKCq-2F8SWiUxwcOqA8y7GqlKiYSslvBw=",
            description: 'Diana White is the housekeeping supervisor who ensures that all guest rooms and common areas are impeccably clean and well-maintained. Her responsibilities include supervising. '
        },
    ]);

    return (
        <>
            <h1 className='bg-white font-serif font-bold text-5xl text-center py-5 px-5 w-full'>
                About <span className='font-semibold text-red-600 underline'>US</span>
            </h1>
            <div className='bg-white font-sans py-2 px-10 flex justify-around items-center w-full h-full flex-wrap'>
                <div className=' rounded-lg overflow-hidden md:w-[49%] w-full flex md:mb-0'>
                    <div className='h-[380px] w-[140px] bg-red-500'>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919288.jpg?k=2e7f454134aad9356719d764c952129535968b9c588a727f186c83fc18e042e8&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919288.jpg?k=2e7f454134aad9356719d764c952129535968b9c588a727f186c83fc18e042e8&o=")} />
                        </div>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919291.jpg?k=4615d35d14574331b394901b676ef0c4adbc378dfb67f53263348e93c1da80ba&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919291.jpg?k=4615d35d14574331b394901b676ef0c4adbc378dfb67f53263348e93c1da80ba&o=")} />
                        </div>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919296.jpg?k=a4e50055e4d8bb58c21e7f9bb81c73505da6d35e351d9bb5f5410a5fc2f83f66&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919296.jpg?k=a4e50055e4d8bb58c21e7f9bb81c73505da6d35e351d9bb5f5410a5fc2f83f66&o=")} />
                        </div>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919301.jpg?k=fefa08d13b069e217658c0dac5a3577581a6963548eec3fd04e58a0869cef526&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919301.jpg?k=fefa08d13b069e217658c0dac5a3577581a6963548eec3fd04e58a0869cef526&o=")} />
                        </div>
                    </div>

                    <div className='bg-pink-700 h-[380px] w-full'>
                        <div className='h-[284px] w-full bg-orange-500'>
                            <img src={ImgAbout3} alt=""
                                className='h-full w-full object-cover' />
                        </div>

                        <div className='h-[96px] w-full bg-blue-600 flex'>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/583919320.jpg?k=410f0aa91568edd749e4c552ee51a6e737f00df6296b76a3e2f33d68de072c1f&o=&hp=1" alt="" className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1280x900/583919320.jpg?k=410f0aa91568edd749e4c552ee51a6e737f00df6296b76a3e2f33d68de072c1f&o=&hp=1")} />
                            </div>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/583919296.jpg?k=a4e50055e4d8bb58c21e7f9bb81c73505da6d35e351d9bb5f5410a5fc2f83f66&o=&hp=1" alt="" className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1280x900/583919296.jpg?k=a4e50055e4d8bb58c21e7f9bb81c73505da6d35e351d9bb5f5410a5fc2f83f66&o=&hp=1")} />
                            </div>

                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919288.jpg?k=2e7f454134aad9356719d764c952129535968b9c588a727f186c83fc18e042e8&o=&hp=1s" alt="" className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919288.jpg?k=2e7f454134aad9356719d764c952129535968b9c588a727f186c83fc18e042e8&o=&hp=1s")} />
                            </div>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919362.jpg?k=7ada75ebe956ee5a693fd69b0d450d9ef135646615af93fd58a7df39b2606b3c&o=&hp=1" alt="" className='h-full w-full object-cover' onClick={() => setImg2("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919362.jpg?k=7ada75ebe956ee5a693fd69b0d450d9ef135646615af93fd58a7df39b2606b3c&o=&hp=1")} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-white py-5 px-10 rounded-lg md:w-[49%] w-full mb-4 md:mb-0'>
                    <div className=' h-full'>
                        <h1 className='font-bold font-serif text-[30px] text-black text-center'>Welcome to Hotel Management website</h1>
                        <p className='font-serif mt-1 text-[16px]'>
                            Welcome to our Hotel Management website. Our mission is to provide the best possible experience for our guests through exceptional service, outstanding amenities, and a commitment to hospitality excellence. Whether you re traveling for business or pleasure, our dedicated team is here to ensure your stay is comfortable, convenient, and memorable.
                            <br />
                            Established in 2025, our hotel management company has been at the forefront of the industry, setting standards for quality and innovation. We operate a diverse portfolio of properties, each offering unique experiences and tailored services to
                        </p>
                    </div>
                </div>

                <div className='bg-white py-5 px-10 rounded-lg md:w-[49%] w-full mb-4 md:mb-0 mt-5'>
                    <div className=' h-full'>
                        <h1 className='font-bold font-serif text-[34px] text-black text-center mb-5'>Executive </h1>
                        <p className='font-serif mt-1 text-[20px'>
                            <p>Jane is passionate about creating culinary delights that tantalize the taste buds. Her expertise brings a unique flavor to our dining experience.</p>

                            <li>Customer Satisfaction: We prioritize the needs and comfort of our guests above all else.</li>
                            <li>Quality: We strive to maintain the highest standards in all aspects of our service.</li>
                            <li>Integrity: We conduct our business with honesty and transparency.</li>
                            <li>Innovation: We continually seek to improve and innovate our services and facilities.</li>
                        </p>
                    </div>
                </div>

                <div className=' rounded-lg overflow-hidden md:w-[49%] w-full flex md:mb-0 mt-5'>
                    <div className='h-[380px] w-[140px] bg-red-500'>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185039.jpg?k=ef257f13e767dc0ced493df762e886938b6557b3dd8a3e3fd45287aef8ec882a&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185039.jpg?k=ef257f13e767dc0ced493df762e886938b6557b3dd8a3e3fd45287aef8ec882a&o=")} />
                        </div>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185046.jpg?k=4faf182f70f0e45c897864b442687be517845ffa9ba81653b5313e6930913d67&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185046.jpg?k=4faf182f70f0e45c897864b442687be517845ffa9ba81653b5313e6930913d67&o=")} />
                        </div>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185044.jpg?k=3ffdfd157dd7a2ba0d842da7a9320ea02996562c3f0740dc33aedf874ff064a2&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185044.jpg?k=3ffdfd157dd7a2ba0d842da7a9320ea02996562c3f0740dc33aedf874ff064a2&o=")} />
                        </div>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185048.jpg?k=8cd70a49a3d64611ed7ae911365a6f2b611f19c73c2341c659346e47bd00923d&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514185048.jpg?k=8cd70a49a3d64611ed7ae911365a6f2b611f19c73c2341c659346e47bd00923d&o=")} />
                        </div>
                    </div>

                    <div className='bg-pink-700 h-[380px] w-full'>
                        <div className='h-[284px] w-full bg-orange-500'>
                            <img src={ImgAbout2} alt=""
                                className='h-full w-full object-cover' />
                        </div>

                        <div className='h-[96px] w-full bg-blue-600 flex'>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/583295827.jpg?k=19d71f36338a0f8681b49a9521f1142eb9f3c9fa955da1d22f8f9e6b400c285c&o=&hp=1" alt="" className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1280x900/583295827.jpg?k=19d71f36338a0f8681b49a9521f1142eb9f3c9fa955da1d22f8f9e6b400c285c&o=&hp=1")} />
                            </div>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295798.jpg?k=150a9d54b89982bd35df4cd44a313ade436353b6a9d0ff006eb7ffbe385a7408&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295798.jpg?k=150a9d54b89982bd35df4cd44a313ade436353b6a9d0ff006eb7ffbe385a7408&o=")} />
                            </div>

                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295807.jpg?k=7f2d09aa10699053995828e8718f767b8bd273741bba28202039bab146d499df&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295807.jpg?k=7f2d09aa10699053995828e8718f767b8bd273741bba28202039bab146d499df&o=")} />
                            </div>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295795.jpg?k=d64106f5d609b191bf16249a0aec859f75cf1b3c2b71bb64b7d4d17f3960f2da&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg1("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295795.jpg?k=d64106f5d609b191bf16249a0aec859f75cf1b3c2b71bb64b7d4d17f3960f2da&o=")} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className=' rounded-lg overflow-hidden md:w-[49%] w-full flex md:mb-0 mt-5'>
                    <div className='h-[380px] w-[140px] bg-red-500'>
                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588128.jpg?k=5c7cd89d5409074b91a4804db927b7bbaf5e3cf698d4b4d2cc3c4a7fbcd1d078&o=" alt="" className='h-full w-full object-cover'
                                onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588128.jpg?k=5c7cd89d5409074b91a4804db927b7bbaf5e3cf698d4b4d2cc3c4a7fbcd1d078&o=")}
                            />
                        </div>

                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588131.jpg?k=712724656487464520b9782146129aafe57439f468aad7d4cac2de1080c1ebf3&o=" alt=""
                                className='h-full w-full object-cover'
                                onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588131.jpg?k=712724656487464520b9782146129aafe57439f468aad7d4cac2de1080c1ebf3&o=")}
                            />
                        </div>

                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588140.jpg?k=7bffd8db0f42e085151218856863738258b2f98ca2728b0d7877667f515a8d15&o=" alt=""
                                className='h-full w-full object-cover'
                                onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588140.jpg?k=7bffd8db0f42e085151218856863738258b2f98ca2728b0d7877667f515a8d15&o=")}
                            />
                        </div>

                        <div className='h-[95px] w-full bg-gray-700 border border-white'>
                            <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295798.jpg?k=150a9d54b89982bd35df4cd44a313ade436353b6a9d0ff006eb7ffbe385a7408&o=" alt=""
                                className='h-full w-full object-cover' onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583295798.jpg?k=150a9d54b89982bd35df4cd44a313ade436353b6a9d0ff006eb7ffbe385a7408&o=")} />
                        </div>

                    </div>

                    <div className='bg-pink-700 h-[380px] w-full'>
                        <div className='h-[284px] w-full bg-orange-500'>
                            <img src={ImgAbout1} alt=""
                                className='h-full w-full object-cover' />
                        </div>

                        <div className='h-[96px] w-full bg-blue-600 flex'>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588150.jpg?k=cf8bbe0a2190bf974cd92c0cd8bfeae2c7f19a91e3d1238293284a4c1c1a9644&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/576588150.jpg?k=cf8bbe0a2190bf974cd92c0cd8bfeae2c7f19a91e3d1238293284a4c1c1a9644&o=")} />
                            </div>

                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514187074.jpg?k=cf6f6c8fb4622006c78ada086c87e3caa14f61710769b9ed3b1c6c5e0c702100&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514187074.jpg?k=cf6f6c8fb4622006c78ada086c87e3caa14f61710769b9ed3b1c6c5e0c702100&o=")} />
                            </div>

                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/514187078.jpg?k=a8031767de2778c612b73bb656a13fa19dfda824eb4f27a963cbb0c1dae13bba&o=" alt="" className='h-full w-full object-cover' onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/514187078.jpg?k=a8031767de2778c612b73bb656a13fa19dfda824eb4f27a963cbb0c1dae13bba&o=")} />
                            </div>
                            <div className='w-full bg-gray-700 border border-white'>
                                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919362.jpg?k=7ada75ebe956ee5a693fd69b0d450d9ef135646615af93fd58a7df39b2606b3c&o=&hp=1" alt="" className='h-full w-full object-cover' onClick={() => setImg("https://cf.bstatic.com/xdata/images/hotel/max1024x768/583919362.jpg?k=7ada75ebe956ee5a693fd69b0d450d9ef135646615af93fd58a7df39b2606b3c&o=&hp=1")} />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-white py-10 px-10 rounded-lg md:w-[49%] w-full mb-4 md:mb-0 mt-5'>
                    <div className=' h-full'>
                        <h1 className='font-bold font-serif text-[29px] mb-5 text-center'>Your Comfort, Our Commitment </h1>
                        <p className='font-serif mt-1 p-0 text-[18px]'>
                            Our values are rooted in a passion for hospitality, a commitment to sustainability, and a dedication to the communities we serve. We believe in creating lasting memories for our guests while also contributing positively to the environment and society.
                            <br />
                            Thank you for choosing our hotel management services. We look forward to welcoming you and ensuring your stay exceeds your expectations.
                        </p>
                    </div>
                </div>


                <h1 className='mt-10 text-[40px] font-serif bg-white w-full text-center'>OUR TEAMS</h1>
                <div className='mt-5 mb-10 md:w-full col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  flex-col md:flex-row gap-5 justify-around items-center'>
                    {items.map((val, index) => (
                        <div key={index} className='bg-slate-100 rounded-lg overflow-hidden w-full md:w-auto'>
                            <div className='p-5'>
                                <div className='flex mb-2'>
                                    <img src={val.Img} alt="" className='h-20 w-20 object-cover rounded-full' />
                                    <h1 className='font-bold mb-2 font-serif text-[28px] ml-5 mt-4'>{val.name}</h1>
                                </div>
                                <p className='text-[15px] font-serif'>{val.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About
