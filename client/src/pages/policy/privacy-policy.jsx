import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
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
          className="text-sm py-4 px-3 text-white bg-black font-medium focus:outline-none transition-all"
        >
          ← Back to home
        </button>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-2 text-center tracking-tight">
          Privacy Policy
        </h1>
        <div className="h-1 w-20 bg-black mx-auto mb-8"></div>

        <div className="space-y-10">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                1
              </span>
              Privacy Commitment
            </h2>
            <p className="text-gray-700 leading-relaxed">
              BittersweetScent treats all customer data with utmost care and
              does not sell or rent any personal information to external
              organizations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                2
              </span>
              Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Personal details:</span> Name,
                billing and shipping addresses, email, phone number.
              </li>
              <li>
                <span className="font-medium">Transaction details:</span> Order
                history and related information.
              </li>
              <li>
                <span className="font-medium">Technical data:</span> Your
                device's IP address, operating system, browser type, and
                aggregated browsing behavior—statistics only, not tied to any
                individual.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                3
              </span>
              Use of Collected Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              BittersweetScent uses your data for:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                Processing and shipping orders, billing, and handling
                transactions.
              </li>
              <li>Keeping you informed about product updates.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                4
              </span>
              Sharing of Information
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be shared in the following cases:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                As required by law or to protect the company's rights or
                property.
              </li>
              <li>
                To complete a transaction at your request (e.g., sharing with
                delivery or payment processors).
              </li>
              <li>With service providers involved in fulfilling your order.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed pt-2">
              Additionally, if BittersweetScent cannot respect a request to
              restrict data usage, they reserve the right to delete customer
              information.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-2xl font-semibold flex items-start">
              <span className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                5
              </span>
              Privacy Policy Updates
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The policy is subject to change without prior notice. Users are
              encouraged to revisit the page periodically for updates.
            </p>
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

export default PrivacyPolicy;
