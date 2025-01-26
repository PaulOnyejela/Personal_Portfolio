import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  // Function to handle form submission and display a prompt
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from actually submitting and refreshing the page
    alert("Your message has been sent!"); // Show an alert when the button is clicked
  }

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-green-400 to-blue-500 mb-4'>Hey There!</h3>
            <p>Let's talk about everything front end, UI/UX, Graphic Design, Video Editing. I'm open to partnership opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                <a href="mailto:paulonyejela@gmail.com" className='hover:underline'>
                  paulonyejela@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                <span>+2348160074380</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                <span>Lagos, Nigeria</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    rows="5"
                    placeholder='Enter Your Message'/>
                </div>
                {/* Updated button to trigger the handleSubmit function */}
                <button 
                  type="button" 
                  className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline
                  transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
                  onClick={handleSubmit} // Adding onClick event handler
                >
                  Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
