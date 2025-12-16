import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

//components
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50
        bg-black/60 backdrop-blur-md
        py-6 xl:py-8
        text-white"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/**logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Trevor <span className="text-[#00ff99]">.</span>
          </h1>
        </Link>
        {/**desktop nav */}
        <div className="hidden  xl:flex items-center gap-8">
          <Navbar />
          <Link href="#contact">
            <Button className="hover:bg-[black] hover:text-[#00ff99] ">
              Hire me
            </Button>
          </Link>
        </div>
        {/**mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
