import WebsiteBreadcrumb from '@/components/Application/Website/WebsiteBreadcrumb'
import React from 'react'

const breadcrumb = {
    title: 'Terms & Conditions',
    links: [
        { label: 'Terms & Conditions' },
    ]
}

const TermsAndConditions = () => {
    return (
        <div>
            <WebsiteBreadcrumb props={breadcrumb} />
            <div className='lg:px-40 px-5 py-20'>
                <h1 className='text-xl font-semibold mb-3'>Terms & Conditions</h1>

                <p><b>1. Agreement to Terms:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>By using the website, you accept all Terms and Conditions. If you disagree with any part, please do not use the site.</li>
                    <li>These terms may be amended at any time at the company's discretion. Users are responsible for staying informed of such updates.</li>
                    <li>If any clause is found unenforceable, the rest of the terms remain valid.</li>
                </ul>

                <p className='mt-5'><b>2. Personal Information:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>BittersweetScent is committed to safeguarding your personal information. They do not rent or sell it.</li>
                    <li>Data is securely stored and shared only with trusted partners to facilitate order-related services.</li>
                </ul>

                <p className='mt-5'><b>3. Order and Acceptance:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Submitting an order is considered an offer to purchase and is subject to the company’s acceptance.</li>
                    <li>Orders may be refused if:
                        <ul className='list-disc ps-10 mt-2'>
                            <li>There’s incorrect customer information.</li>
                            <li>There’s an error on the website regarding product details or pricing.</li>
                        </ul>
                    </li>
                    <li>Once accepted, you'll receive an email confirmation. If not, reach out before reordering.</li>
                </ul>

                <p className='mt-5'><b>4. Refunds & Replacements:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>No Refund / No Replacement policy applies due to the perishable nature of products and absence of local service centers.</li>
                    <li>No cash refunds are provided.</li>
                    <li>Damaged-in-transit items may be refunded/reimbursed to the original credit card.</li>
                    <li>Credit card refunds, for eligible claims, are processed within 7 working days (or as per card issuer's terms).</li>
                    <li>The company reserves the right to request identification and assess product condition before approving refunds.</li>
                </ul>

                <p className='mt-5'><b>5. Warranties:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>The site and its servers are not guaranteed to be free from viruses or harmful components.</li>
                    <li>Users download content at their own risk and are solely responsible for any resulting damage.</li>
                </ul>

                <p className='mt-5'><b>6. Indemnity:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>Users agree to indemnify BittersweetScent and its affiliates against any claims, liabilities, or damages resulting from user actions, including legal violations, infringement, or misuse.</li>
                </ul>

                <p className='mt-5'><b>7. Copyright & Trademark:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>All content on the site is protected by copyright, trademarks, or other intellectual property laws.</li>
                    <li>International brands listed are registered trademarks of respective owners and not property of BittersweetScent.</li>
                </ul>

                <p className='mt-5'><b>8. Governing Law:</b></p>
                <ul className='list-disc ps-10 mt-3'>
                    <li>These terms are governed by Indian law, and disputes are subject to the exclusive jurisdiction of the courts of Mumbai.</li>
                </ul>
            </div>
        </div>
    )
}

export default TermsAndConditions
