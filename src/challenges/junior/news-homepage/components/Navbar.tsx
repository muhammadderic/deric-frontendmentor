import {
  useState,
  useEffect
} from "react";

import { menuItems } from "@challenges/junior/news-homepage/constants/newsHomepage.contants";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when window resizes above mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="py-6 flex justify-between items-center relative">
      {/* Logo */}
      <div className="text-6xl font-extrabold">
        W.
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="transition-colors duration-200 text-lg"
            style={{ color: 'hsl(236, 13%, 42%)' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(5, 85%, 63%)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(236, 13%, 42%)')}
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Hamburger Button (Mobile) */}
      <button
        className="md:hidden z-50 bg-white border-none cursor-pointer p-1"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          // Close Icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        ) : (
          // Menu Icon (Hamburger)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          } md:hidden`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <div className="flex flex-col pt-32 pl-8 space-y-6">
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-2xl font-medium transition-colors duration-200"
              style={{ color: 'hsl(240, 100%, 5%)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'hsl(5, 85%, 63%)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'hsl(240, 100%, 5%)')}
              onClick={toggleMenu}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};