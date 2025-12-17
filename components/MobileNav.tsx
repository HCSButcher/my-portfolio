"use client";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Skills", "Projects", "Resume", "contact"];

export default function MobileNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  });

  return (
    <Sheet>
      <SheetTrigger className="flex  justify-center items-center">
        <CiMenuFries className="text-[32px] text-[#00ff99]" />
      </SheetTrigger>
      <SheetContent className="flex bg-transparent  flex-col">
        {/*logo */}
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Trevor
              <span className="text-[#00ff99]"> •</span>
            </h1>
          </Link>
        </div>
        {/** nav */}
        <nav className="flex flex-col justify-center gap-8 items-center">
          {links.map((link) => {
            const id = link.toLowerCase();

            return (
              <a
                href={`#${id}`}
                key={link}
                className={`
              text-xl capitalize transition-all
              ${
                active === id
                  ? "text-[#00ff99] border-b-2 border-[#00ff99]"
                  : "text-xl capitalize transition-all hover:text-[#00ff99]"
              }
            `}
              >
                {link}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
