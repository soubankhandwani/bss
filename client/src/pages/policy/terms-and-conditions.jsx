import { useNavigate } from 'react-router-dom';

const TermsAndConditions = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header with Back Button */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-200 px-6 flex justify-end z-10">
        <button
          onClick={handleBackClick}
          className="text-sm font-medium bg-black py-4 px-3 text-white focus:outline-none transition-all flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back to home
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            Terms and Conditions
          </h1>
          <div className="h-1 w-20 bg-black mx-auto"></div>
        </div>

        <div className="space-y-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              Agreement to Terms
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                By using the website, you accept all Terms and Conditions. If
                you disagree with any part, please do not use the site.
              </p>
              <p className="text-gray-700 leading-relaxed">
                These terms may be amended at any time at the company's
                discretion. Users are responsible for staying informed of such
                updates.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If any clause is found unenforceable, the rest of the terms
                remain valid.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              Personal Information
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                BittersweetScent is committed to safeguarding your personal
                information. They do not rent or sell it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Data is securely stored and shared only with trusted partners to
                facilitate order-related services.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              Order and Acceptance
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Submitting an order is considered an offer to purchase and is
                subject to the company’s acceptance.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Orders may be refused if:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>There’s incorrect customer information.</li>
                <li>
                  There’s an error on the website regarding product details or
                  pricing.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed pt-2">
                Once accepted, you'll receive an email confirmation. If not,
                reach out before reordering.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                4
              </span>
              Refunds & Replacements
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                No Refund / No Replacement policy applies due to the perishable
                nature of products and absence of local service centers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                No cash refunds are provided.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Damaged-in-transit items may be refunded/reimbursed to the
                original credit card.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Credit card refunds, for eligible claims, are processed within 7
                working days (or as per card issuer's terms).
              </p>
              <p className="text-gray-700 leading-relaxed">
                The company reserves the right to request identification and
                assess product condition before approving refunds.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                5
              </span>
              Warranties
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                The site and its servers are not guaranteed to be free from
                viruses or harmful components.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Users download content at their own risk and are solely
                responsible for any resulting damage.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                6
              </span>
              Indemnity
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                Users agree to indemnify BittersweetScent and its affiliates
                against any claims, liabilities, or damages resulting from user
                actions, including legal violations, infringement, or misuse.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                7
              </span>
              Copyright & Trademark
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                All content on the site is protected by copyright, trademarks,
                or other intellectual property laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                International brands listed are registered trademarks of
                respective owners and not property of BittersweetScent.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                8
              </span>
              Governing Law
            </h2>
            <div className="ml-11 space-y-3">
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by Indian law, and disputes are subject
                to the exclusive jurisdiction of the courts of Mumbai.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          <p>
            © {new Date().getFullYear()} BittersweetScent. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-8 text-xs">
            <a href="/policy/privacy-policy" className="hover:underline">
              Privacy Policy
            </a>
            <a href="/policy/terms-and-conditions" className="hover:underline">
              Terms & Conditions
            </a>
            <a
              href="/policy/cancellation-and-refunds"
              className="hover:underline"
            >
              Cancellation & Refunds
            </a>
            <a href="/policy/shipping-and-delivery" className="hover:underline">
              Shipping & Delivery
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsAndConditions;
