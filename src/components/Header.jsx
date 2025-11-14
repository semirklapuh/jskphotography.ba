import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] xl:w-[75%] rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16 relative">
          {/* Left placeholder for symmetry */}
          <div className="flex-1" />

          {/* Centered logo */}
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-bold text-gray-900 cursor-pointer drop-shadow-sm px-4 py-2 text-center"
            style={{ fontFamily: '"MyCustomFont", cursive' }}
          >
            JSKphotography.ba
          </Link>

          {/* Desktop menu (hidden below 1024px) */}
          <nav className="hidden xl:flex flex-1 justify-end space-x-6">
            <Link to="/" className="text-gray-900 hover:text-[#B3A398] transition">
              Početna
            </Link>
            <Link to="/portfolio" className="text-gray-900 hover:text-[#B3A398] transition">
              Portfolio
            </Link>
            <Link to="/o-nama" className="text-gray-900 hover:text-[#B3A398] transition">
              O nama
            </Link>
            <Link to="/kontakt" className="text-gray-900 hover:text-[#B3A398] transition">
              Kontakt
            </Link>
          </nav>

          {/* Hamburger for mobile/tablet (visible below xl) */}
          <div className="flex-1 flex justify-end xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/30 backdrop-blur-xl shadow-lg border-t border-white/20 rounded-b-3xl">
          <nav className="flex flex-col p-4 space-y-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-[#B3A398] transition"
            >
              Početna
            </Link>
            <Link
              to="/portfolio"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-[#B3A398] transition"
            >
              Portfolio
            </Link>
            <Link
              to="/o-nama"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-[#B3A398] transition"
            >
              O nama
            </Link>
            <Link
              to="/kontakt"
              onClick={() => setIsOpen(false)}
              className="text-gray-900 hover:text-[#B3A398] transition"
            >
              Kontakt
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
