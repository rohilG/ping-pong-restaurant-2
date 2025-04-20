"use client";

export default function StorySection() {
  return (
    <section className="bg-[#f5e7c5] py-14 px-6 md:px-10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-script text-[#93814d] text-4xl mb-10 text-center">
          Our Story
        </h2>

        <div className="text-gray-800 max-w-3xl mx-auto px-4">
          <p className="text-base leading-relaxed mb-6">
            Two bags of groceries, a secondhand hotplate and a memorized list of recipes
            got pingpong through its first night of business. Now many years later our
            dream of creating a popular neighborhood casual dining restaurant comes to
            life each night.
          </p>

          <p className="text-base leading-relaxed mb-8">
            We are still inspired by a healthy diet of simple and fresh Asian
            flavors and the good company of close friends and well-made cocktails.
          </p>

          <p className="text-base italic mb-1">
            See you soon and all the best,
          </p>

          <p className="text-base">
            Your friends at Ping Pong
          </p>
        </div>
      </div>
    </section>
  );
}
