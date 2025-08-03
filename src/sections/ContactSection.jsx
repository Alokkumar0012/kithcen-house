import React from 'react';
import { Phone, Mail } from 'lucide-react';
// import { Link } from 'react-router-dom'; // Commented out Link as it requires a Router context

function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-center gap-12 text-gray-800 min-h-screen"> {/* Removed bg-white and card-like styling */}
      {/* Left half - Image content */}
      <div className="w-full md:w-1/2 h-96 md:h-auto rounded-lg shadow-lg overflow-hidden"> {/* Changed to overflow-hidden for img */}
        <img
          src="https://images.pexels.com/photos/28618632/pexels-photo-28618632.jpeg" // Using the new image URL
          alt="Delicious Dish"
          className="w-full h-full object-cover" // Ensure image covers the div
          onError={(e) => {
            e.target.onerror = null; // Prevent infinite loop if fallback fails
            e.target.src = "https://placehold.co/960x1080/D3D3D3/000000?text=Image+Not+Loaded"; // Fallback placeholder if the main image fails to load
          }}
        />
      </div>

      {/* Right half - Contact Information */}
      <div className="w-full md:w-1/2 text-center md:text-left p-4">
        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8">
          Find Us
        </h2>

        {/* WHERE section */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">WHERE</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">
            123 Bhediya Thawe <br /> Gopalganj, Bihar, IND 841440
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4"> {/* Adjusted for better button stacking on small screens */}
            <button className="bg-gray-800 text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-700 transition-colors duration-300">
              VIEW MAP
            </button>
            {/* Changed to a regular <a> tag to avoid React Router context errors */}
            <a href="/reservation" className="bg-transparent border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 hover:text-white transition-colors duration-300">
              BOOK A TABLE
            </a>
          </div>
        </div>

        {/* WHEN section */}
        <div className="mb-10">
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">WHEN</p>
          <p className="text-lg font-semibold text-gray-800 mb-2">Monday - Friday</p>
          <p className="text-lg font-semibold text-gray-800 mb-4">11am - 9pm</p>
          <p className="text-lg font-semibold text-gray-800 mb-2">Saturday/Sunday</p>
          <p className="text-lg font-semibold text-gray-800">10am - 11pm</p>
        </div>

        {/* Additional Contact Info */}
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600 mb-2">Contact Us</p>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <Phone size={20} className="text-gray-600 mr-2" />
              <p className="text-lg text-gray-800">+91 123 456 7890</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail size={20} className="text-gray-600 mr-2" />
              <p className="text-lg text-gray-800">info@Alonekitchen.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
