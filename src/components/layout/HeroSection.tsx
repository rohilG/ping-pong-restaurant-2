"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="relative w-full h-[480px] md:h-[600px] overflow-hidden">
      {/* Background food image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/food-background.jpg"
          alt="Ping Pong Restaurant Food"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-25" />
      </div>

      {/* Logo centered on top of food image */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[300px] h-[200px] md:w-[500px] md:h-[300px]">
          <Image
            src="/images/ping-pong-logo-big.png"
            alt="Ping Pong Restaurant"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
}
