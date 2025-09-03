import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Cancellation & Refund',
    links: [
        { label: 'Cancellation & Refund' },
    ]
}

const CancellationAndRefunds = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Cancellation & Refund</h1>

                <p><b>When a refund or replacement is offered:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>You are eligible for replacement or refund if:</li>
                    <ul className='list-disc ps-10 mt-2'>
                        <li>You don't receive your order, suspected due to courier loss.</li>
                        <li>You receive an incorrect item.</li>
                        <li>The item arrives damaged or tampered with.</li>
                    </ul>
                </ul>

                <p className='mt-5'><b>Company’s rights:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>They may require product identification to process a claim.</li>
                    <li>They reserve the right to determine if the item has been abused, used, or improperly handled, potentially affecting eligibility.</li>
                </ul>
            </div>
        </div>
    )
}

export default CancellationAndRefunds
