import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div>
      <div className="flex min-h-screen w-full">
        <div className="hidden lg:flex items-center justify-center bg-black w-1/2 px-12">
          <div className="max-w-md space-y-6 text-center text-primary-foreground">
            <h1 className="text-4xl font-extrabold tracking-tight">
              Welcome to ECommerce Shopping
            </h1>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </div>
      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 text-center text-gray-600 text-sm">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} BittersweetScent. All rights reserved.
          </p>

          {/* Policy Links */}
          <div className="mt-4 flex flex-wrap justify-center gap-x-8 gap-y-2 text-xs">
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
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
        {/* Contact Information Section */}
        <div className="mb-6">
          <div className="mt-3 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <a
                href="mailto:bittersweetscent1@gmail.com"
                className="hover:underline"
              >
                bittersweetscent1@gmail.com
              </a>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <a href="tel:7977771949" className="hover:underline">
                7977771949
              </a>
            </div>

            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
              </svg>
              <a
                href="https://instagram.com/bittersweet_scent"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                bittersweet_scent
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AuthLayout;
