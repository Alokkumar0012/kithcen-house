import React from 'react';

function AboutSection() {
  return (
    // Removed 'container mx-auto' to make it full width. Kept 'bg-white' as requested.
    <div className="w-full bg-white text-gray-800 text-center py-8 sm:py-12 md:py-16 px-4">
      <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 mb-1 sm:mb-2">
        Quality is at heart of everything we do
      </p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif leading-tight mb-4 sm:mb-8">
        Food Philosophy
      </h2>
      <div className="w-12 sm:w-16 h-1 bg-gray-300 mx-auto mb-8 sm:mb-12"></div>

      <p className="text-sm sm:text-lg max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed text-gray-700 px-2">
        Our daily changing menu represents the best of what our local markets have to offer. Our passion for sourcing fresh ingredients from farmers and suppliers we know, combining with traditional flavors and rewriting familiar recipes into exceptional cuisine is our mission and greatest joy.
      </p>

      {/* Three images below the text */}
      {/* Removed card styling (rounded-lg, shadow-lg, transform hover:scale-105 transition-transform duration-300) from each image container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto"> {/* Added max-w-7xl mx-auto to constrain content on very large screens */}
        <div className="w-full h-64 sm:h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/7360854/pexels-photo-7360854.jpeg')" }}>
        </div>
        <div className="w-full h-64 sm:h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2302809/pexels-photo-2302809.jpeg')" }}>
        </div>
        <div className="w-full h-64 sm:h-80 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg')" }}>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
