"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#8a7c35] text-white py-10 px-6 md:px-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="mb-6">
            <h3 className="font-normal text-xl mb-2">Open 7 Days a Week</h3>
            <p className="text-lg">4PM - 11PM</p>
          </div>

          <div>
            <h3 className="font-normal text-xl mb-2">Contact</h3>
            <p className="text-lg">773-281-7575</p>
            <address className="not-italic text-lg">
              3322 N. Broadway Street<br />
              Chicago, Illinois 60657
            </address>
          </div>

          <div className="pt-6">
            <p className="italic">See you soon and all the best,</p>
            <div className="relative w-56 h-24 mt-2"> {/* Increased height for logo */}
              <Image
                src="/images/ping-pong-logo-transparent.png"
                alt="Ping Pong Restaurant"
                fill
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center md:justify-end items-center">
          <div className="relative w-48 h-48">
            <Image
              src="/images/fortune-cookies.png"
              alt="Fortune Cookies"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6 pt-4 border-t border-amber-200/30 text-center">
        <p className="text-xs opacity-70">© {new Date().getFullYear()} Ping Pong Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
}
