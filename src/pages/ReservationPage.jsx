import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function ReservationPage() {
  useEffect(() => {
    document.title = 'Alone Kitchen';
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">

        <h2 className="text-4xl md:text-5xl font-serif leading-tight mb-8 text-center">
          Book Your Table
        </h2>
        <p className="text-gray-600 text-center mb-10">
          We will confirm your reservation within 20
           minutes via Email.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column: Opening Times */}
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-800 mb-4 uppercase tracking-widest">
              Opening Times
            </h3>
            <p className="text-lg font-semibold text-gray-800 mb-2">Monday - Friday</p>
            <p className="text-lg text-gray-700 mb-4">11am - 9pm</p>
            <p className="text-lg font-semibold text-gray-800 mb-2">Saturday/Sunday</p>
            <p className="text-lg text-gray-700">10am - 11pm</p>
          </div>

          {/* Right Column: Reservation Form */}
          <div className="text-left">
            <form className="space-y-6">
              <div>
                <label htmlFor="resName" className="block text-sm font-bold mb-2 uppercase text-gray-600">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="resName"
                  name="resName"
                  required
                  placeholder="Enter your name"
                  className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label htmlFor="resEmail" className="block text-sm font-bold mb-2 uppercase text-gray-600">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="resEmail"
                  name="resEmail"
                  required
                  placeholder="Enter your email"
                  className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label htmlFor="resDate" className="block text-sm font-bold mb-2 uppercase text-gray-600">
                  Date*
                </label>
                <input
                  type="date"
                  id="resDate"
                  name="resDate"
                  required
                  className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase text-gray-600">
                  Time*
                </label>
                <div className="flex flex-wrap gap-4">
                  {['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'].map((time) => (
                    <label key={time} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="resTime"
                        value={time}
                        required
                        className="form-radio h-5 w-5 text-gray-800"
                      />
                      <span className="ml-2 text-gray-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="resGuests" className="block text-sm font-bold mb-2 uppercase text-gray-600">
                  Number of People*
                </label>
                <input
                  type="number"
                  id="resGuests"
                  name="resGuests"
                  min="1"
                  required
                  placeholder="How many guests?"
                  className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                />
              </div>

              <div>
                <label htmlFor="resMessage" className="block text-sm font-bold mb-2 uppercase text-gray-600">
                  Your Message*
                </label>
                <textarea
                  id="resMessage"
                  name="resMessage"
                  rows="5"
                  required
                  placeholder="Write any message here..."
                  className="w-full py-3 px-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-800"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded shadow-lg transition duration-300"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Back to Home link moved here */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-sm text-orange-600 font-semibold hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ReservationPage;
