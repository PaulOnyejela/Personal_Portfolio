import React, { useState } from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // Track form submission status

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevents the form from actually submitting and refreshing the page
    setIsSubmitting(true); // Set form submitting state to true

    try {
      const response = await fetch('https://formspree.io/f/xvgzzkgd', { // Formspree endpoint
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: new FormData(event.target), // Send form data as FormData
      });

      if (response.ok) {
        alert("Your message has been sent!");
      } else {
        alert("Failed to send message, please try again later.");
      }
    } catch (err) {
      alert("An error occurred. Please try again.");
      console.error(err);
    }

    // Optionally reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    setIsSubmitting(false); // Reset the submitting state
  };

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
            <form onSubmit={handleSubmit} className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input
                  type="text"
                  name="name" // Make sure name matches the field in Formspree
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name'
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input
                  type="email"
                  name="email" // Make sure name matches the field in Formspree
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email'
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea
                  name="message" // Make sure name matches the field in Formspree
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Message'
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting} // Disable button while submitting
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
