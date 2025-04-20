import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-ping-pong-cream">
      <Navbar />

      <div className="container mx-auto py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl text-center font-playfair mb-12 text-amber-900">Our Menu</h1>

          <div className="grid gap-16">
            <section>
              <h2 className="text-2xl md:text-3xl mb-6 font-medium text-ping-pong-red">Appetizers</h2>
              <div className="grid gap-6">
                <div className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Spring Rolls</h3>
                    <span className="text-lg">$8</span>
                  </div>
                  <p className="text-gray-700">Fresh vegetables, rice noodles, and herbs wrapped in rice paper</p>
                </div>

                <div className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Fried Dumplings</h3>
                    <span className="text-lg">$12</span>
                  </div>
                  <p className="text-gray-700">Pork and vegetable filling, pan-fried and served with dipping sauce</p>
                </div>

                <div className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Lettuce Wraps</h3>
                    <span className="text-lg">$14</span>
                  </div>
                  <p className="text-gray-700">Minced chicken with water chestnuts, served with crisp lettuce cups</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl mb-6 font-medium text-ping-pong-red">Main Courses</h2>
              <div className="grid gap-6">
                <div className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Kung Pao Chicken</h3>
                    <span className="text-lg">$18</span>
                  </div>
                  <p className="text-gray-700">Stir-fried chicken with peanuts, vegetables, and chili peppers</p>
                </div>

                <div className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Beef with Broccoli</h3>
                    <span className="text-lg">$22</span>
                  </div>
                  <p className="text-gray-700">Tender beef slices and broccoli in a savory brown sauce</p>
                </div>

                <div className="border-b border-amber-200 pb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-medium">Mapo Tofu</h3>
                    <span className="text-lg">$16</span>
                  </div>
                  <p className="text-gray-700">Spicy Sichuan tofu dish with minced pork and chili bean paste</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
