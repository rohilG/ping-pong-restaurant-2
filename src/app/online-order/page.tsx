import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function OnlineOrderPage() {
  return (
    <main className="min-h-screen bg-ping-pong-cream">
      <Navbar />

      <div className="container mx-auto py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-center font-playfair mb-6 text-amber-900">Order Online</h1>
          <p className="text-center text-lg mb-12">Enjoy Ping Pong dishes in the comfort of your home</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-ping-pong-olive h-32 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-medium mb-4">Delivery</h2>
                <p className="text-gray-700 mb-6">
                  Have your favorite dishes delivered directly to your doorstep. We deliver within
                  a 5-mile radius of our restaurant.
                </p>
                <Link href="https://example.com" className="block w-full">
                  <button className="w-full bg-ping-pong-olive hover:bg-amber-800 text-white py-3 rounded-md font-medium transition-colors">
                    Order Delivery
                  </button>
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-ping-pong-olive h-32 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-medium mb-4">Pickup</h2>
                <p className="text-gray-700 mb-6">
                  Order ahead and pick up your meal at our restaurant. Your food will be
                  ready when you arrive.
                </p>
                <Link href="https://example.com" className="block w-full">
                  <button className="w-full bg-ping-pong-olive hover:bg-amber-800 text-white py-3 rounded-md font-medium transition-colors">
                    Order Pickup
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-medium mb-4">Order by Phone</h2>
            <p className="text-gray-700 mb-2">
              Prefer to order by phone? Give us a call at:
            </p>
            <p className="text-2xl font-medium text-ping-pong-red">773-281-7575</p>
            <p className="text-gray-700 mt-4">
              Our staff will be happy to assist you with your order.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
