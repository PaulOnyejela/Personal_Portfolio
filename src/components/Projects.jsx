import React from "react";
// Importing images for the projects
import Translator from "../assets/LanguageTranslator.jpeg";
import Weather from "../assets/Weather-app.jpg";
import Todo from "../assets/todo.jpg";

// Array of project data, including project name, image, and demo link
const projects = [
  {
    id: 1,
    name: "Language Translator",
    image: Translator,  // Image for the Language Translator project
    demo: "https://spkit.netlify.app",  // Demo link for the project
  },
  {
    id: 2,
    name: "Weather App",
    image: Weather,  // Image for the Weather App project
    demo: "https://paulonyejela.github.io/CelestialSnap/",  // Demo link for the project
  },
  {
    id: 3,
    name: "Todo List",
    image: Todo,  // Image for the Todo List project
    demo: "https://wc-react-todo-app.netlify.app/",  // Demo link for the project
  },
];

const Projects = () => {
  return (
    // Main section of the projects, with background color and padding
    <div className="bg-black text-white py-20" id="project">
      {/* Container to center the content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Title of the section */}
        <h2 className="text-4xl font-bold text-center mb-12">Recent Projects</h2>
        
        {/* Grid to display the project cards, responsive design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapping over the projects array to display each project */}
          {projects.map((project) => (
            <div
              key={project.id} 
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
              transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image for the project, with rounded corners and a fixed height */}
              <img 
                src={project.image} 
                alt={project.name} 
                className="rounded-lg mb-4 w-full h-48 object-cover" 
              />
              
              {/* Project name */}
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              
              {/* Demo link button */}
              <a 
                href={project.demo} 
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
