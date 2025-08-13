import { useNavigate } from 'react-router-dom';

const CancellationAndRefunds = () => {
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
            Cancellation and Refunds
          </h1>
          <div className="h-1 w-20 bg-black mx-auto"></div>
        </div>

        <div className="space-y-12 mb-12">
          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              When a refund or replacement is offered
            </h2>
            <div className="ml-11 space-y-3">
              <p>You are eligible for replacement or refund if:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  You don't receive your order, suspected due to courier loss.
                </li>
                <li>You receive an incorrect item.</li>
                <li>The item arrives damaged or tampered with.</li>
              </ul>
              <p>Company&apos;s Rights:</p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>
                  They may require product identification to process a claim.
                </li>
                <li>
                  They reserve the right to determine if the item has been
                  abused, used, or improperly handled, potentially affecting
                  eligibility.
                </li>
              </ul>
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

export default CancellationAndRefunds;
