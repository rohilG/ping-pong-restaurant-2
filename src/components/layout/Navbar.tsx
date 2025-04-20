"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="w-full py-4 px-6 md:px-10 flex justify-between items-center bg-[#f5e7c5]">
      <Link href="/" className="flex items-center">
        <div className="flex flex-col items-start">
          <h1 className="font-script text-[#c13c45] text-5xl md:text-6xl leading-tight">Ping Pong</h1>
          <p className="text-[#c13c45] text-xs md:text-sm mt-[-5px]">Food, friends, and fortune</p>
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-12">
        <Link
          href="/"
          className="text-gray-800 hover:text-[#c13c45] transition-colors text-sm"
        >
          Home
        </Link>
        <Link
          href="/reservation"
          className="text-gray-800 hover:text-[#c13c45] transition-colors text-sm"
        >
          Reservation
        </Link>
        <Link
          href="/menu"
          className="text-gray-800 hover:text-[#c13c45] transition-colors text-sm"
        >
          Menu
        </Link>
        <Link href="/online-order">
          <Button className="bg-[#8a7c35] hover:bg-[#6a5e29] text-white rounded-full px-6 py-1 text-xs font-normal h-auto">
            Online Order
          </Button>
        </Link>
      </div>

      {/* Mobile menu button - will be implemented later if needed */}
      <div className="md:hidden">
        <Button variant="ghost" className="text-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </Button>
      </div>
    </nav>
  );
}
