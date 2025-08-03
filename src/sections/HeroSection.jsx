import React from 'react';

function HeroSection({ scrollToSection, menuRef }) {
  return (
    <div className="relative w-full h-screen bg-white flex flex-col md:flex-row items-center justify-center text-gray-800 overflow-hidden">
      {/* Left half - Text content */}
      {/* On small screens, this will be full width and centered. On medium and larger, it will be half width and left-aligned. */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-center md:items-start px-4 py-8 md:px-8 md:py-16 md:pl-20 text-center md:text-left relative z-10">
        <p className="text-sm sm:text-base font-light mb-2 sm:mb-4 tracking-widest uppercase text-gray-600">
          Enjoy an unforgettable experience
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif leading-tight mb-4 sm:mb-8">
          Flavors from <br className="hidden sm:inline" /> Around the World
        </h1>
        <p className="text-sm sm:text-base max-w-xl mx-auto md:mx-0 mb-6 sm:mb-10 text-gray-700 px-2 md:px-0">
          Our daily changing menu represents the best of what our local markets have to offer.
        </p>
        <button
          onClick={() => scrollToSection(menuRef)}
          className="bg-transparent border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-6 sm:py-3 sm:px-8 rounded-full transition-colors duration-300 focus:outline-none text-sm sm:text-base"
        >
          VIEW MENU
        </button>
        {/* Vertical "WELCOME" text - hidden on small screens, visible on medium and larger */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -rotate-90 origin-top-left ml-4 md:ml-0 text-lg font-semibold text-gray-400 uppercase tracking-widest whitespace-nowrap hidden md:block">
          Welcome
        </div>
      </div>

      {/* Right half - Image content */}
      {/* On small screens, this will be full width and take less height. On medium and larger, it will be half width and full height. */}
      <div
        className="w-full md:w-1/2 h-64 md:h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')", // Placeholder image
        }}
      >
        <div className="flex items-end justify-end h-full p-4 md:p-8">
          <p className="text-black text-sm sm:text-lg font-bold uppercase tracking-widest transform rotate-90 origin-bottom-right">
            Taste the Difference
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
