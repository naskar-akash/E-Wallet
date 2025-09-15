import React from "react";

const Footer = () => {
  return (
      <footer className="w-full bg-gradient-to-r from-blue-900 to-pink-700 text-white py-6 my-8 rounded-lg">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4">
          <div className="text-lg font-semibold">
            E-Wallet &copy; {new Date().getFullYear()}
          </div>
          <div className="flex gap-6 text-sm">
            <a href="https://github.com/naskar-akash" className="hover:underline">
              GitHub
            </a>
            <a href="mailto:naskar.akash1971@gmail.com" className="hover:underline">
              Contact
            </a>
          </div>
          <div className="text-xs text-gray-300">
            Made with <span className="text-pink-400">♥</span> by Akash Naskar
          </div>
        </div>
      </footer>
  );
};

export default Footer;
