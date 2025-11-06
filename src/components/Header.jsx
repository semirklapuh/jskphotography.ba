import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 relative">
          {/* Logo centered */}
          <div className="flex-1 flex justify-center">
            <h1 className="text-2xl font-bold text-gray-800 cursor-pointer" 
            style={{ fontFamily: '"Snell Roundhand", cursive' }}>
              JSKphotography.ba
            </h1>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex absolute right-0 space-x-6">
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Početna
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Portfolio
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              O nama
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              <Link to="/kontakt" className="text-gray-800 hover:text-gray-500">Kontakt</Link>
            </a>
          </nav>

          {/* Hamburger menu for mobile */}
          <div className="absolute right-0 md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
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
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col p-4 space-y-2">
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Početna
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              Portfolio
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
              O nama
            </a>
            <a href="#" className="text-gray-800 hover:text-gray-500">
             <Link to="/kontakt" className="text-gray-800 hover:text-gray-500">Kontakt</Link>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
