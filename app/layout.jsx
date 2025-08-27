import GlobalProvider from "@/components/Application/GlobalProvider";
import "./globals.css";
import { Assistant } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
const assistantFont = Assistant({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: "Bitter Sweet Scent",
  description: "BitterSweetScent is your go-to destination for premium coffee pods. From Starbucks to Nespresso, we deliver your favorite blends and flavors straight to your door.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${assistantFont.className} antialiased`}
      >
        <GlobalProvider>
          <ToastContainer />
          {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
