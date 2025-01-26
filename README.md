# PERSONAL PORTFOLIO PROJECT

This is a personal project that showcases my skills, expertise, and creativity.

live demo: https://amarachukwu-paul.netlify.app/

## TEAM

For this project I am working alone primarily because it is my personal portfolio. 

## TECHNOLOGIES USED:

### React JS

For building user interfaces, primarily for single-page applications, by efficiently updating and rendering components based on data changes.

### Tailwind CSS

 Allows building of custom designs quickly by applying pre-defined classes directly to HTML elements.

### Netlify

For Deployment of the react JS web app

## COMPONENT BASED ARCHITECTURE

This project utilizes React's component-based structure to create a dynamic user interface.

Navbar.jsx

Hero.jsx

About.jsx

Services.jsx

Projects.jsx

Contact.jsx

Footer.jsx

## Navbar component

This Navbar component creates a fixed, responsive navigation bar with a black background (bg-black) and white text (text-white). The navbar stays at the top of the page with fixed top-0 left-0 and spans the full width (w-full). Inside the navbar, the brand name "PORTFOLIO" is displayed on medium and larger screens using hidden md:inline, while navigation links (Home, About Me, My Services, etc.) are spaced with space-x-6 and change color on hover (hover:text-gray-400). Additionally, a "Connect with Me" button appears only on medium and larger screens (hidden md:inline) with a gradient background (bg-gradient-to-r from-green-400 to-blue-500) and a hover effect (hover:scale-105). The design is responsive, adjusting to different screen sizes while keeping the navbar fixed at the top for easy navigation.

## Hero component

This Hero component creates an introductory section with a black background and centered content. It features a circular hero image with a hover scaling effect (hover:scale-105). The heading introduces the user with a "HEY" in yellow and a gradient text effect for the name. Below, a description highlights their expertise in front-end development, UI/UX, and graphic design. Two buttons with gradient backgrounds (bg-gradient-to-r) are included, designed for interaction, though their actions are placeholders. Tailwind CSS is used for responsive design and smooth hover transitions.

## About component

This About component creates a section with a black background and white text, providing an introduction to the developer. The layout uses Flexbox (flex flex-col md:flex-row) to arrange an image (<img src={AboutImage} alt="Image of the developer" className="w-72 h-80 rounded object-cover" />) and text side by side on larger screens. The introduction paragraph (<p className="text-lg mb-8">) describes the developer’s expertise in front-end development and design. Skill proficiency is shown with progress bars, such as for HTML & CSS (w-10/12), React JS (w-9/12), and Figma & Corel Draw (w-11/12), styled using Tailwind's utility classes. Lastly, a stats section (<div className="mt-12 flex justify-between text-center">) highlights experience, projects completed, and happy clients, with values styled with gradient text (bg-gradient-to-r from-green-400 to-blue-500).

## Services component

This Service component renders a section showcasing different services offered by the developer. The services are stored in an array (const services = [...]), with each service having an id, title, and description. The component uses a responsive grid layout (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">) to display the services, adjusting the number of columns based on the screen size. Each service is displayed inside a div with Tailwind CSS classes for styling, such as bg-gray-800, rounded-lg, and hover:scale-105 for hover effects. The service title (<h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">) is styled with a gradient text effect, and the description (<p className="mt-2 text-gray-300">) is in gray. The component includes a placeholder link (<a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">), which can be customized or used for a demo. This layout is wrapped in a container with padding (py-20, px-8) to ensure proper spacing.

## Projects component

This Projects component displays a section of recent projects, each represented by a project card. The component uses an array of projects where each object contains details like id, name, image, and demo (link to the project demo). The section is styled with a black background (bg-black text-white py-20) and includes a grid layout (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">) for responsiveness, showing 1, 2, or 3 columns depending on the screen size. Each project is rendered as a div containing an image (<img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />), the project name (<h3 className="text-2xl font-bold mb-2">{project.name}</h3>), and a demo link styled as a button (<a href={project.demo} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Demo</a>). The hover:scale-105 and hover:shadow-lg effects add an interactive feel, making the cards scale slightly and show a shadow when hovered.
