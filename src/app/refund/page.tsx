import React from 'react'

const Refund = () => {
  return (
    <div className=''>
        <div className='px-4 md:px-40 md:pt-36 pt-20 md:pb-10 pb-4 bg-gray-200'>
            <h1 className='md:text-6xl text-stone-700 text-3xl'>Refund Policy</h1>
            <div>
                <h3 className='pt-5'>Last Updated: June 2024</h3>
            </div>
        </div>
        <div>
                <h3 className='px-4 md:px-36 py-4'>Welcome to TheVedicPandit.com. These terms and conditions outline the rules and regulations for the use of our app and services.</h3>
        </div>

        <div className='px-4 md:px-36 md:py-8 py-2'>
            <h3 className='text-2xl pb-4'>
            Refund Policy Overview
            </h3>
            <hr className='md:p-4 p-2'></hr>
            <p>Welcome to TheVedicPandit.com Refund Policy. This policy outlines our guidelines for refunds for services purchased through our app.</p>
        </div>

        <div className='px-4 md:px-36 md:py-10 py-2'>
            <h3 className='text-2xl pb-4'>
            Eligibility for Refunds
            </h3>
            <hr className='md:p-4 p-2'></hr>
            <p>We offer refunds under the following conditions:</p>
            <ol className='px-2'>
                <li>
                If the service booked is canceled within 24 hours of booking and at least 48 hours before the scheduled date.
                </li>
                <li>
                If there is a technical issue or error preventing the completion of the service.
                </li>
                <li>
                If there are extraordinary circumstances beyond your control that prevent you from utilizing the booked service.

                </li>
                
            </ol>
        </div>

        <div className='px-4 md:px-36 md:py-8 py-2'>
            <h3 className='text-2xl pb-4'>
            Refund Process
            </h3>
            <hr className='md:p-4 p-2'></hr>
            <p>To request a refund, please follow these steps:</p>
            <ol className='px-2'>
                <li>
                Contact our customer support team at refund@thevedicpandit.com within the eligible timeframe with your booking details and reason for the refund request.
                </li>
                <li>
                Our team will review your request and may ask for additional information to verify eligibility.
                </li>
                <li>
                If your request is approved, refunds will be processed within [number of days], depending on the payment method used.
                </li>
                
            </ol>
        </div>

        <div className='px-4 md:px-36 md:py-8 py-2'>
            <h3 className='text-2xl pb-4'>
            Refund Timeline
            </h3>
            <hr className='md:p-4 p-2'></hr>
            <p>We strive to process refunds promptly upon approval. The timeline for receiving your refund may vary:</p>
            <ol className='px-2'>
                <li>
                Credit Card: Typically, refunds appear on your statement within [number of days], depending on your card issuers policies.
                </li>
                <li>
                Bank Transfer: Refunds may take [number of days] to reflect in your account after processing.
                </li>
                <li>
                Payment Gateway: Refunds via online payment platforms may have their own processing times.
                </li>
                
            </ol>
        </div>

        <div className='px-4 md:px-36 md:py-8 py-2'>
            <h3 className='text-2xl pb-4'>
            Contact Us
            </h3>
            <hr className='md:p-4 p-2'></hr>
            <p>If you have any questions about this Refund Policy, please contact us at refund@thevedicpandit.com.</p>
            <p>You can also reach out to us through our Support Email or visit our Contact Page for more options.</p>
        </div>    

    </div>
  )
}

export default Refund