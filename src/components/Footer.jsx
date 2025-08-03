// src/components/Footer.jsx
import React from 'react';
import { Instagram, Facebook, Twitter, Link as LucideLink } from 'lucide-react'; // Using lucide-react for social icons, renamed Link to LucideLink to avoid conflict
import { Link } from 'react-router-dom'; // Import Link for navigation

function Footer() {
  return (
    <footer className="bg-gray-600 text-gray-200 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Welcome to Alone Kitchen */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Welcome to Alone Kitchen</h3>
          <p className="text-sm leading-relaxed mb-4">
            Alone Kitchen, founded in 2024, is dedicated to all those who love to wander far and wide.
          </p>
          <p className="text-sm leading-relaxed">
            We invite you on a wholesome culinary adventure, where you'll explore undiscovered gourmet experiences.
          </p>
        </div>

        {/* Column 2: Visit, Talk, Write */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Visit</h3>
          <p className="text-sm mb-4">123 bhediya thawe <br /> Gopalganj, Bihar, IND 841440</p>

          <h3 className="text-xl font-bold text-white mb-6">Talk</h3>
          <p className="text-sm mb-4">+91 123-456-7</p>

          <h3 className="text-xl font-bold text-white mb-6">Write</h3>
          <p className="text-sm">eat@AloneKitchen.com</p>
        </div>

        {/* Column 3: Reservations, Hours */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Reservations</h3>
          {/* Link to the new reservation page */}
          <Link
            to="/reservation"
            className="bg-transparent border border-white text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:text-gray-800 transition-colors duration-300 mb-8 inline-block" // Added inline-block for Link to behave like a button
          >
            BOOK YOUR TABLE
          </Link>

          <h3 className="text-xl font-bold text-white mb-6">Hours</h3>
          <p className="text-sm mb-2">MONDAY - FRIDAY</p>
          <p className="text-sm mb-4">11am - 9pm</p>
          <p className="text-sm mb-2">SATURDAY/SUNDAY</p>
          <p className="text-sm">10am - 11pm</p>
        </div>

        {/* Column 4: About, Follow Along */}
        <div>
          <h3 className="text-xl font-bold text-white mb-6">About</h3>
          <ul className="text-sm space-y-2 mb-8">
            <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Reservation Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors duration-300">Health & Safety</a></li>
          </ul>

          <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300">
              <Twitter size={24} />
            </a>
            {/* Replaced Yelp, Tripadvisor, Tiktok with generic LucideLink icons or custom SVGs
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"> */}
              {/* Using a generic LucideLink icon for Yelp */}
              {/* <LucideLink size={24} /> */}
            {/* </a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"> */}
              {/* Using a generic LucideLink icon for Tripadvisor */}
              {/* <LucideLink size={24} />
            </a>
            <a href="#" className="text-gray-200 hover:text-white transition-colors duration-300"> */}
              {/* Using a generic LucideLink icon for Tiktok */}
              {/* <LucideLink size={24} />
            </a> */}
          </div>
        </div>
      </div>

      {/* Bottom copyright section */}
      <div className="bg-gray-950 py-6 mt-12 text-gray-400 text-center text-sm">
        <div className="container mx-auto px-4 flex justify-between items-center flex-wrap">
          <p>&copy; 2023 AloneKitchen. ALL RIGHTS RESERVED.</p>
          <p className="text-white font-bold tracking-wider">Alone Kitchen</p>
          <p className="text-orange-500 uppercase tracking-widest">Taste the Difference</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
