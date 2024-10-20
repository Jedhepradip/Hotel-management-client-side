import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { RxCross2 } from 'react-icons/rx';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FetchingUserData } from '../../App/UserSlice';
import { fetchCardData } from '../../App/CardSlice';

const ProfilePage = () => {
    const [userInfo, setUserInfo] = useState({});
    const [file, setFile] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const User = useSelector((state) => state?.Userdata.User)
    useSelector((state) => state?.cardData?.Cardif);
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        if (User) {
            setUserInfo(User?.user);
        }
    }, [User]);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    // Updata User Profile 
    const onSubmit = async (formData) => {
        const data = new FormData();
        data.append("ProfileImg", file)
        data.append("name", formData.name)
        data.append("email", formData.email)
        data.append("mobile", formData.mobile)

        try {
            // const response = await fetch("https://hotel-management-server-5drh.onrender.com/Eidit/User/Profile", {
            const response = await fetch(`http://localhost:3000/Eidit/User/Profile/${User?.user?._id}`, {
                method: "PUT",
                headers: {
                    authorization: `Bearer ${localStorage.getItem("Token")}`,
                },
                body: data,
            });

            if (!response.ok) {
                let responseData = await response.json()
                toast.error(`${responseData.Message}`)
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (response.ok) {
                await response.json();
                reset();
                toggleModal();
                toast.success(`Profile Update Successfull..`)
                setTimeout(() => {
                    // navigate("/")
                    setIsModalOpen(false)
                }, 2000)
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handelLogOut = async () => {
        localStorage.removeItem("Token")
        navigate("/SignIn")
    }

    useEffect(() => {
        dispatch(fetchCardData());
        dispatch(FetchingUserData())
    }, [dispatch, isModalOpen]);

    return (
        <div className="relative bg-white dark:bg-gray-800 flex flex-wrap items-center justify-center font-serif">
            <ToastContainer />
            {!isModalOpen && <div className="min-h-screen p-8">
                <div className="container mx-auto bg-white p-6 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                        <img
                            src={`http://localhost:3000/${userInfo?.ProfileImg}`}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-2 border-black"
                        />
                        <div>
                            <h2 className="text-2xl font-serif text-gray-800">{userInfo?.name}</h2>
                            <p className="text-gray-600">{userInfo?.email}</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-serif text-gray-700">Personal Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Name</h4>
                                <p className="text-gray-600">{userInfo?.name}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Email</h4>
                                <p className="text-gray-600">{userInfo?.email}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Phone</h4>
                                <p className="text-gray-600">91+ {userInfo?.mobile}</p>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                                <h4 className="font-serfi text-black">Address</h4>
                                <p className="text-gray-600">123 Street Name, City, Country</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-gray-700">Account Settings</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 font-serif">
                            <button className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md" onClick={toggleModal}>
                                Update
                            </button>
                            <button className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md" onClick={() => handelLogOut()}>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            }

            {isModalOpen && (
                <div
                    id="timeline-modal"
                    className="
                    z-50 fixed inset-0 flex items-center justify-center bg-opacity-50 mb-10"
                >
                    <div className="bg-white">
                        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg mx-auto">
                            <RxCross2
                                onClick={toggleModal}
                                className="float-right text-2xl ml-5 text-red-500 font-extrabold"
                            />
                            <div className="py-5 px-10">
                                <h2 className="text-[30px] font-serif font-medium text-gray-800 text-center mb-5">Edit Profile</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-2 " htmlFor="ProfileImg">
                                            Upload Profile Picture
                                        </label>
                                        <input
                                            {...register("ProfileImg")}
                                            type="file"
                                            id="ProfileImg"
                                            name="ProfileImg"
                                            className="shadow appearance-none border rounded w-full  text-gray-700 bg-white leading-tight focus:outline-none focus:shadow-outline"
                                            onChange={(e) => setFile(e.target.files[0])}
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-1" htmlFor="name">
                                            Username
                                        </label>
                                        <input
                                            {...register("name")}
                                            className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            id="name"
                                            defaultValue={userInfo?.name}
                                            type="text"
                                            name="name"
                                            placeholder="Username"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-1" htmlFor="mobile">
                                            Phone
                                        </label>
                                        <input
                                            {...register("mobile")}
                                            className="shadow appearance-none border rounded w-full py-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="mobile"
                                            defaultValue={userInfo?.mobile}
                                            type="number"
                                            placeholder="mobile"
                                        />
                                    </div>

                                    <div className="mb-1">
                                        <label className="block text-gray-700 text-[18px] mb-1" htmlFor="email">
                                            Email
                                        </label>
                                        <input
                                            {...register("email")}
                                            className="shadow appearance-none border rounded w-full py-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            name="email"
                                            defaultValue={userInfo?.email}
                                            type="email"
                                            placeholder="email"
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <button
                                            type="submit"
                                            className="bg-blue-700 mt-1 w-full border hover:bg-blue-700 text-white text-[20px] py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Update Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
