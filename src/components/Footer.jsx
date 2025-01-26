import React from "react";
// Importing social media icons from react-icons
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Container for the footer content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Top section containing the description, horizontally centered */}
        <div className="flex flex-col items-center mb-4"> {/* Only horizontally center the description */}
          
          {/* Description about the developer */}
          <div className="text-center"> {/* Added text-center to center the content */}
            <h3 className="text-2xl font-bold mb-2">Amarachukwu Onyejela</h3>
            <p className="text-gray-400">
              Front-end Developer based in Nigeria, specializing in web design, UI/UX, graphic design, and video editing.
            </p>
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
