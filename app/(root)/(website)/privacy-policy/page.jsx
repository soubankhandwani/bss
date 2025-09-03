import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Privacy Policy',
    links: [
        { label: 'Privacy Policy' },
    ]
}

const PrivacyPolicy = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Privacy Policy</h1>
                
                <h2 className='font-semibold mt-5'>1. Privacy Commitment</h2>
                <p className='mt-3'>
                    BittersweetScent treats all customer data with utmost care and does not sell or rent any personal information to external organizations.
                </p>

                <h2 className='font-semibold mt-5'>2. Information We Collect</h2>
                <ul className='list-disc ps-10 mt-3'>
                    <li><b>Personal details:</b> Name, billing and shipping addresses, email, phone number.</li>
                    <li><b>Transaction details:</b> Order history and related information.</li>
                    <li><b>Technical data:</b> Your device's IP address, operating system, browser type, and aggregated browsing behavior—statistics only, not tied to any individual.</li>
                </ul>

                <h2 className='font-semibold mt-5'>3. Use of Collected Information</h2>
                <p className='mt-3'>BittersweetScent uses your data for:</p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Processing and shipping orders, billing, and handling transactions.</li>
                    <li>Keeping you informed about product updates.</li>
                </ul>

                <h2 className='font-semibold mt-5'>4. Sharing of Information</h2>
                <p className='mt-3'>Your information may be shared in the following cases:</p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>As required by law or to protect the company's rights or property.</li>
                    <li>To complete a transaction at your request (e.g., sharing with delivery or payment processors).</li>
                    <li>With service providers involved in fulfilling your order.</li>
                </ul>
                <p className='mt-3'>
                    Additionally, if BittersweetScent cannot respect a request to restrict data usage, they reserve the right to delete customer information.
                </p>

                <h2 className='font-semibold mt-5'>5. Privacy Policy Updates</h2>
                <p className='mt-3'>
                    The policy is subject to change without prior notice. Users are encouraged to revisit the page periodically for updates.
                </p>
            </div>
        </div>
    )
}

export default PrivacyPolicy