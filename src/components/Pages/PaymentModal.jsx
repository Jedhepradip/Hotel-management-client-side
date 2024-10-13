import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
//     const stripe = useStripe();
//     const elements = useElements();
//     const [loading, setLoading] = useState(false);

//     const handlePaymentSubmit = async (e) => {
//         e.preventDefault();

//         if (!stripe || !elements) {
//             return;
//         }

//         const cardElement = elements.getElement(CardElement);
//         setLoading(true);

//         try {
//             const { data: clientSecret } = await axios.post("http://localhost:3000/create-payment-intent", {
//                 amount: selectedProduct.price * 100, // Convert price to cents
//                 currency: 'usd',
//             });

//             const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//                 payment_method: {
//                     card: cardElement,
//                     billing_details: {
//                         name: 'Customer Name', // Optionally fetch from the form/user data
//                     },
//                 },
//             });

//             if (paymentResult.error) {
//                 toast.error(paymentResult.error.message);
//                 setLoading(false);
//             } else if (paymentResult.paymentIntent.status === 'succeeded') {
//                 toast.success('Payment successful!');
//                 closePaymentModal();
//                 setLoading(false);
//             }
//         } catch (error) {
//             toast.error('Payment failed!');
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="inset-0 flex justify-center bg-gray-500 bg-opacity-75 z-50 absolute h-auto">
//             <ToastContainer />
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//                 <h2 className="text-xl font-bold mb-4">Complete your Payment</h2>
//                 <form onSubmit={handlePaymentSubmit}>
//                     <p className="text-lg mb-4">Paying for: <strong>{selectedProduct?.title}</strong></p>
//                     <p className="text-lg mb-4">Amount: <strong>${selectedProduct?.price}</strong></p>

//                     {/* Stripe Card Element */}
//                     <div className="mb-4">
//                         <CardElement
//                             options={{
//                                 style: {
//                                     base: {
//                                         fontSize: '16px',
//                                         color: '#424770',
//                                         '::placeholder': { color: '#aab7c4' },
//                                     },
//                                     invalid: { color: '#9e2146' },
//                                 },
//                             }}
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded-md"
//                         disabled={!stripe || loading}
//                     >
//                         {loading ? 'Processing...' : 'Pay Now'}
//                     </button>

//                     <button
//                         type="button"
//                         className="w-full bg-gray-300 text-black py-2 mt-3 rounded-md"
//                         onClick={closePaymentModal}
//                     >
//                         Cancel
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// PaymentModal.propTypes = {
//     selectedProduct: PropTypes.shape({
//         title: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//     }).isRequired,
//     closePaymentModal: PropTypes.func.isRequired,
// };

// export default PaymentModal;



// Define the PaymentModal component inside the same file
const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlePayment = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) return;

        setLoading(true);

        try {
            const Token = localStorage.getItem("Token");
            if (!Token) {
                return navigate("/login");
            }
            const { data } = await axios.post('http://localhost:4000/payment/api/create-payment-intent', {
                amount: Number(selectedProduct.price) * 100,
                // eslint-disable-next-line react/prop-types
                courseId: selectedProduct._id,
            }, {
                headers: {
                    Authorization: `Bearer ${Token}`
                }
            });

            const clientSecret = data.clientSecret;

            const result = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: elements.getElement(CardElement),
                },
            });

            if (result.error) {
                console.error(result.error.message);
                toast.error(result.error.message);
            } else if (result.paymentIntent?.status === 'succeeded') {
                toast.success('Payment succeeded!');
                console.log('Payment succeeded!');
            }
        } catch (error) {
            console.error('Payment error:', error);
        } finally {
            setLoading(false);
            closePaymentModal();
        }
    };

    return (
        <div className=" inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 absolute">
            <ToastContainer />
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-2xl relative mb-[2000px]">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white text-center">{selectedProduct.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-center">Price: ₹{selectedProduct.price}</p>

                <form onSubmit={handlePayment} className="space-y-6">
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
                        className={`w - full py-3 px-4 rounded-lg text-white ${loading ? 'bg-gray-500' : 'bg-green-600 hover:bg-green-700'} transition duration-300 `}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>
                </form>
                <button
                    onClick={closePaymentModal}
                    className="absolute top-4 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition duration-300"
                >
                    &times;
                </button>
            </div>
        </div >
    );
};

PaymentModal.propTypes = {
    selectedProduct: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }).isRequired,
    closePaymentModal: PropTypes.func.isRequired,
};


export default PaymentModal;