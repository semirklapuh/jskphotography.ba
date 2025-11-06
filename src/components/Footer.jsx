import { FaInstagram, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="text-gray-800 py-8 mt-12"     style={{
    background: "linear-gradient(to right, #B3A398, #C6DCBA)",
  }}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white">JSK photography</h2>
          <p className="text-sm text-white">Bilježimo vaše najljepše trenutke</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MdEmail className="text-lg text-white" />
            <a href="mailto:jsk25.photo@gmail.com" className="text-white transition-colors duration-200 hover:[color:#B3A398]">
              jsk25.photo@gmail.com
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MdPhone className="text-lg text-white" />
            <a href="tel:+38761907565" className="text-white transition-colors duration-200 hover:[color:#B3A398]">
              +387 61 907 565
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <FaMapMarkerAlt className="text-lg text-white" />
            <a
              href="https://share.google/X7XWZrs6sQbDBjrGH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-200 hover:[color:#B3A398]"
            >
              Sarajevo, Bosnia and Herzegovina
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center">
          <a
            href="https://www.instagram.com/jskphotography.ba/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-200 hover:[color:#B3A398]"
          >
            <FaInstagram className="text-2xl" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61575724348573"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white transition-colors duration-200 hover:[color:#B3A398]"
          >
            <FaFacebook className="text-2xl" />
          </a>
        </div>
      </div>

      {/* Copyright */}
    <div className="text-center text-[#B3A398] text-xs mt-6 border-t border-[#B3A398] pt-4">
        © {new Date().getFullYear()} JSK Photography. All rights reserved.
      </div>
    </footer>
  );
}
