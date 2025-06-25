import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 transition duration-300",
        scrolled ? "bg-white shadow-md" : "bg-white md:bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-indigo-600">Ignatius.dev</div>

        <div className="hidden md:!flex space-x-6 bg-red-200 p-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-indigo-600 font-medium transition duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-700 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-gray-700 hover:text-indigo-600"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
