import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Shipping & Delivery',
    links: [
        { label: 'Shipping & Delivery' },
    ]
}

const ShippingAndDelivery = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Shipping & Delivery</h1>

                <p><b>1. Shipping & Delivery:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Orders are typically shipped the next business day, barring any movement restrictions or regulatory delays.</li>
                    <li>You’ll receive a tracking link via email once dispatched.</li>
                </ul>

                <p className='mt-5'><b>2. Shipping Charges:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Flat rate of ₹99 per order.</li>
                    <li>Free shipping for orders above ₹2,500.</li>
                </ul>

                <p className='mt-5'><b>3. Cash on Delivery (COD):</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Available for orders up to ₹6,000.</li>
                </ul>

                <p className='mt-5'><b>4. Express Delivery (Mumbai only):</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>24-hour delivery is offered within Mumbai at ₹99, which is free for orders over ₹2,500.</li>
                    <li>Deliveries are scheduled during business hours the next day, though the 24-hour window isn't guaranteed.</li>
                </ul>

                <p className='mt-5'><b>5. Delivery Timeframe:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Standard deliveries typically arrive within 2–5 business days.</li>
                    <li>No dispatch on Sundays or public holidays, as courier partners are unavailable on those days.</li>
                </ul>
            </div>
        </div>
    )
}

export default ShippingAndDelivery
