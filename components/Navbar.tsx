"use client";
import { useEffect, useState } from "react";
const links = ["Home", "About", "Skills", "Projects", "Resume", "contact"];

export default function Navbar() {
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
    <nav className="flex   gap-8">
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
                  : "text-xl capitalize font-medium transition-all hover:text-[#00ff99]"
              }
            `}
          >
            {link}
          </a>
        );
      })}
    </nav>
  );
}
