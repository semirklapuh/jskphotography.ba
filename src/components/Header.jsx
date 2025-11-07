import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-[80%] lg:w-[70%] rounded-3xl backdrop-blur-xl bg-white/20 border border-white/30 shadow-lg transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo centered */}
        <div className="flex-1 flex justify-center px-4 md:px-0">
<Link
  to="/"
  onClick={() => setIsOpen(false)}
  className="text-2xl font-bold text-gray-900 cursor-pointer drop-shadow-sm px-4 py-2"
  style={{ fontFamily: '"Snell Roundhand", cursive' }}
>
  JSKphotography.ba
</Link>
</div>



          {/* Desktop menu */}
          <nav className="hidden md:flex absolute right-4 space-x-6">
            <Link to="/" className="text-gray-900 hover:text-[#B3A398] transition">
              Početna
            </Link>
            <Link to="/" className="text-gray-900 hover:text-[#B3A398] transition">
              Portfolio
            </Link>
            <Link to="/o-nama" className="text-gray-900 hover:text-[#B3A398] transition">
              O nama
            </Link>
            <Link to="/kontakt" className="text-gray-900 hover:text-[#B3A398] transition">
              Kontakt
            </Link>
          </nav>

          {/* Hamburger menu for mobile */}
          <div className="absolute right-4 md:hidden">
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
        <div className="md:hidden bg-white/30 backdrop-blur-xl shadow-lg border-t border-white/20 rounded-b-3xl">
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
