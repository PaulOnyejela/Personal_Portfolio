import React from "react";

// Array of services with details: id, title, and description
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "UI/UX",
    description: "Creating intuitive, user-centered designs that enhance usability and deliver seamless digital experiences.",
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Crafting visually stunning designs that communicate your message and elevate your brand identity.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Creating engaging, informative, and compelling content that resonates with your audience and drives results.",
  },
  {
    id: 6,
    title: "Video Editing",
    description: "Creating intuitive, user-centered designs that enhance usability and deliver seamless digital experiences.",
  },
];

const Service = () => {
  return (
    // Section wrapping the services, with background color and padding
    <div className="bg-black text-white py-20" id="service">
      {/* Container to center the content */}
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        
        {/* Title for the section */}
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        
        {/* Grid layout for services, responsive design with different columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Looping through each service and rendering the details */}
          {services.map((service) => (
            <div
              key={service.id}  // Unique key for each service
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              {/* Service Title with gradient text effect */}
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>

              {/* Service description with gray text */}
              <p className="mt-2 text-gray-300">{service.description}</p>
              
              {/* Demo link (currently no link, placeholder) */}
              <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
