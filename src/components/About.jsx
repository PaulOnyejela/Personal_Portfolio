import React from "react";
import AboutImage from "../assets/About-img.jpg"; // Importing the image for the "About" section

const About = () => {
  return (
    // Outer container for the "About" section with a black background and white text
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section heading */}
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        {/* Flexbox layout to arrange image and text */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          
          {/* Image of the developer */}
          <img
            src={AboutImage}
            alt="Image of the developer" // Adding alt text for accessibility
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          />
          
          {/* Text section */}
          <div className="flex-1">
            {/* Introduction text about the developer */}
            <p className="text-lg mb-8">
              I'm a Front-End Engineer with a passion for creating seamless, user-centered experiences.
              With a background in UI/UX design and graphic design,
              I specialize in translating complex ideas into intuitive, visually stunning digital solutions. 
              I thrive at the intersection of design and development, ensuring both form and function work in harmony. 
              Whether it's crafting responsive websites or designing engaging interfaces, 
              I'm committed to delivering high-quality, user-friendly products.
            </p>

            {/* Skill Progress Bars */}
            <div className="space-y-4">
              {/* Skill: HTML & CSS */}
              <div className="flex items-center">
                <label htmlFor="html-css" className="w-2/12">HTML & CSS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-10/12"
                  ></div>
                </div>
              </div>
              
              {/* Skill: React JS */}
              <div className="flex items-center">
                <label htmlFor="react-js" className="w-2/12">React JS</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-9/12"
                  ></div>
                </div>
              </div>

              {/* Skill: Figma & Corel Draw */}
              <div className="flex items-center">
                <label htmlFor="figma-coreldraw" className="w-2/12">FIGMA & COREL Draw</label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full 
                    transform transition-transform duration-300 hover:scale-105 w-11/12"
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats Section (Experience, Projects, Clients) */}
            <div className="mt-12 flex justify-between text-center">
              {/* Years of Experience */}
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  4+
                </h3>
                <p>Years Experience</p>
              </div>

              {/* Projects Completed */}
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  30+
                </h3>
                <p>Projects Completed</p>
              </div>

              {/* Happy Clients */}
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                  20+
                </h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
