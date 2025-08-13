import { useNavigate } from 'react-router-dom';

const ShippingDelivery = () => {
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
          className="text-sm py-4 px-3 bg-black text-white font-medium focus:outline-none transition-all flex items-center"
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
            Shipping & Delivery Policy
          </h1>
          <div className="h-1 w-20 bg-black mx-auto"></div>
        </div>

        <div className="space-y-10">
          {/* Section 1 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-medium">1</span>
              </div>
              <h2 className="text-2xl font-semibold">Shipping & Delivery</h2>
            </div>
            <div className="ml-11 space-y-2">
              <p className="text-gray-700 leading-relaxed">
                Orders are typically shipped the next business day, barring any
                movement restrictions or regulatory delays.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You'll receive a tracking link via email once dispatched.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-medium">2</span>
              </div>
              <h2 className="text-2xl font-semibold">Shipping Charges</h2>
            </div>
            <div className="ml-11 space-y-2">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Flat rate of <span className="font-medium">₹99</span> per
                  order
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Free shipping for orders above{' '}
                  <span className="font-medium">₹2,500</span>
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-medium">3</span>
              </div>
              <h2 className="text-2xl font-semibold">Cash on Delivery (COD)</h2>
            </div>
            <div className="ml-11 space-y-2">
              <p className="text-gray-700 leading-relaxed">
                Available for orders up to{' '}
                <span className="font-medium">₹6,000</span>.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-medium">4</span>
              </div>
              <h2 className="text-2xl font-semibold">
                Express Delivery (Mumbai only)
              </h2>
            </div>
            <div className="ml-11 space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  24‑hour delivery is offered within Mumbai at{' '}
                  <span className="font-medium">₹99</span>, which is free for
                  orders over <span className="font-medium">₹2,500</span>.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Deliveries are scheduled during business hours the next day,
                  though the 24‑hour window isn't guaranteed.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section className="space-y-4">
            <div className="flex items-start">
              <div className="bg-black text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                <span className="font-medium">5</span>
              </div>
              <h2 className="text-2xl font-semibold">Delivery Timeframe</h2>
            </div>
            <div className="ml-11 space-y-3">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  Standard deliveries typically arrive within{' '}
                  <span className="font-medium">2–5 business days</span>.
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">
                  No dispatch on Sundays or public holidays, as courier partners
                  are unavailable on those days.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Delivery Timeline Visualization */}
        <div className="mt-16 border-t border-gray-200 pt-10">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Delivery Process Timeline
          </h3>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0 w-1/5">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <span className="text-white font-medium">1</span>
              </div>
              <p className="text-center text-sm font-medium">Order Placed</p>
            </div>

            <div className="hidden md:block flex-grow border-t-2 border-dashed border-gray-300 mt-6"></div>

            <div className="flex flex-col items-center mb-8 md:mb-0 w-1/5">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <span className="text-white font-medium">2</span>
              </div>
              <p className="text-center text-sm font-medium">Processing</p>
            </div>

            <div className="hidden md:block flex-grow border-t-2 border-dashed border-gray-300 mt-6"></div>

            <div className="flex flex-col items-center mb-8 md:mb-0 w-1/5">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <span className="text-white font-medium">3</span>
              </div>
              <p className="text-center text-sm font-medium">Dispatched</p>
            </div>

            <div className="hidden md:block flex-grow border-t-2 border-dashed border-gray-300 mt-6"></div>

            <div className="flex flex-col items-center mb-8 md:mb-0 w-1/5">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <span className="text-white font-medium">4</span>
              </div>
              <p className="text-center text-sm font-medium">In Transit</p>
            </div>

            <div className="hidden md:block flex-grow border-t-2 border-dashed border-gray-300 mt-6"></div>

            <div className="flex flex-col items-center w-1/5">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-3">
                <span className="text-white font-medium">5</span>
              </div>
              <p className="text-center text-sm font-medium">Delivered</p>
            </div>
          </div>
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

export default ShippingDelivery;
