import React from "react";
// Importing social media icons from react-icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container for the footer content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Top section containing the description and subscription form */}
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          
          {/* Left side: Description about the developer */}
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Amarachukwu</h3>
            <p className="text-gray-400">
              Front-end Developer based in Nigeria, specializing in web design, UI/UX, graphic design, and video editing.
            </p>
          </div>

          {/* Right side: Email subscription form */}
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              {/* Email input field */}
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
              />
              {/* Subscribe button */}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom section: Footer links and copyright */}
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright text */}
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Social media links */}
          <div className="flex space-x-4 my-4 md:my-0">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            {/* GitHub */}
            <a href="https://github.com/PaulOnyejela" aria-label="GitHub" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>

          {/* Footer links for privacy policy and terms of service */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
