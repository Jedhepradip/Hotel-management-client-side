import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import PropTypes from 'prop-types';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const PaymentModal = ({ selectedProduct, closePaymentModal }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        console.log("selectedProduct :", selectedProduct);
        console.log("closePaymentModal :", closePaymentModal);



        const cardElement = elements.getElement(CardElement);

        setLoading(true);

        try {
            const { data: clientSecret } = await axios.post("http://localhost:3000/create-payment-intent", {
                amount: selectedProduct.price * 100, // Convert price to cents
                currency: 'usd',
            });

            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: 'Customer Name', // Optionally fetch from the form/user data
                    },
                },
            });

            if (paymentResult.error) {
                toast.error(paymentResult.error.message);
                setLoading(false);
            } else if (paymentResult.paymentIntent.status === 'succeeded') {
                toast.success('Payment successful!');
                closePaymentModal();
                setLoading(false);
            }
        } catch (error) {
            toast.error('Payment failed!');
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75 z-50">
            <ToastContainer />
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold mb-4">Complete your Payment</h2>
                <form onSubmit={handlePaymentSubmit}>
                    <p className="text-lg mb-4">Paying for: <strong>{selectedProduct?.title}</strong></p>
                    <p className="text-lg mb-4">Amount: <strong>${selectedProduct?.price}</strong></p>

                    {/* Stripe Card Element */}
                    <div className="mb-4">
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: '16px',
                                        color: '#424770',
                                        '::placeholder': { color: '#aab7c4' },
                                    },
                                    invalid: { color: '#9e2146' },
                                },
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md"
                        disabled={!stripe || loading}
                    >
                        {loading ? 'Processing...' : 'Pay Now'}
                    </button>

                    <button
                        type="button"
                        className="w-full bg-gray-300 text-black py-2 mt-3 rounded-md"
                        onClick={closePaymentModal}
                    >
                        Cancel
                    </button>
                </form>
            </div>
        </div>
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
