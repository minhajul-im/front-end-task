"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavAction } from "./nav-action";

export const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md transition-all duration-300 py-4">
      <section className="flex items-center justify-between mx-4 lg:mx-[120px]">
        <Link href="/">
          <nav className="flex items-center gap-2">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/Logo.png"
                alt="logo"
                fill
                className="w-full h-full absolute"
              />
            </div>
            <h2 className="text-xl lg:text-2xl font-bold text-headingText">
              Fresh Harvest
            </h2>
          </nav>
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-16 text-headingText">
            <li className="text-xl font-normal cursor-pointer">Home</li>
            <li className="text-xl font-normal cursor-pointer">Shop</li>
            <li className="text-xl font-normal cursor-pointer">Blog</li>
            <li className="text-xl font-normal cursor-pointer">About</li>
          </ul>
        </nav>

        <NavAction />
      </section>
    </header>
  );
};
