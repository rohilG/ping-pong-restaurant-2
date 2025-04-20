import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ReservationPage() {
  return (
    <main className="min-h-screen bg-ping-pong-cream">
      <Navbar />

      <div className="container mx-auto py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-center font-playfair mb-12 text-amber-900">Make a Reservation</h1>

          <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Your Name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-gray-700 font-medium">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="(555) 555-5555"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="block text-gray-700 font-medium">Date</label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="time" className="block text-gray-700 font-medium">Time</label>
                <select
                  id="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select a time</option>
                  <option>4:00 PM</option>
                  <option>4:30 PM</option>
                  <option>5:00 PM</option>
                  <option>5:30 PM</option>
                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                  <option>9:00 PM</option>
                  <option>9:30 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="guests" className="block text-gray-700 font-medium">Number of Guests</label>
                <select
                  id="guests"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select number of guests</option>
                  <option>1 person</option>
                  <option>2 people</option>
                  <option>3 people</option>
                  <option>4 people</option>
                  <option>5 people</option>
                  <option>6 people</option>
                  <option>7 people</option>
                  <option>8 people</option>
                  <option>9+ people (please call us)</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label htmlFor="special_requests" className="block text-gray-700 font-medium">Special Requests (Optional)</label>
                <textarea
                  id="special_requests"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Tell us about any special requests or dietary restrictions"
                />
              </div>

              <div className="md:col-span-2 flex justify-center pt-4">
                <button
                  type="submit"
                  className="bg-ping-pong-olive hover:bg-amber-800 text-white py-3 px-10 rounded-full text-lg font-medium transition-colors"
                >
                  Book Table
                </button>
              </div>
            </form>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 text-lg">
              For parties larger than 8 or special events, please call us directly at:
            </p>
            <p className="text-xl font-medium mt-2">773-281-7575</p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
