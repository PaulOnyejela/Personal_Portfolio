import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 left-0 w-full z-10'>
      {/* Container to center the content of the navbar */}
      <div className='container py-2 flex justify-center md:justify-between items-center'>
        
        {/* Logo or brand name, visible only on medium and larger screens */}
        <div className='text-2xl font-bold hidden md:inline'>PORTFOLIO</div>
        
        {/* Navbar links */}
        <div className='space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>My Services</a>
          <a href="#project" className='hover:text-gray-400'>Recent Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>

        {/* Button to "Connect with Me", visible only on medium and larger screens */}
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
        transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          <a href='#about'>Connect with Me</a>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
