  import React, { useRef, useEffect } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Header from './components/Header.jsx'; // Added .jsx extension
  import HeroSection from './sections/HeroSection.jsx'; // Added .jsx extension
  import AboutSection from './sections/AboutSection.jsx'; // Added .jsx extension
  import MenuSection from './sections/MenuSection.jsx'; // Added .jsx extension
  import ContactSection from './sections/ContactSection.jsx'; // Added .jsx extension
  import Footer from './components/Footer.jsx'; // Added .jsx extension
  import ScrollToTop from './components/ScrollToTop.jsx'; // Added .jsx extension
  import ReservationPage from './pages/ReservationPage.jsx'; // Added .jsx extension  

  function App() {
    // Refs for smooth scrolling
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const menuRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (sectionRef) => {
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Scroll to home section on load
    useEffect(() => {
      if (homeRef.current) {
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, []);

    return (
      <div className="min-h-screen font-inter"> {/* Removed bg-gray-900 */}
        <Router>
          <Header
            scrollToSection={scrollToSection}
            homeRef={homeRef}
            aboutRef={aboutRef}
            menuRef={menuRef}
            contactRef={contactRef}
          />
          <ScrollToTop />

          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    {/* Hero Section */}
                    <section
                      id="home"
                      ref={homeRef}
                      className="min-h-screen flex items-center justify-center relative"
                    >
                      <HeroSection scrollToSection={scrollToSection} menuRef={menuRef} />
                    </section>

                    {/* About Section - Reduced vertical padding */}
                    <section id="about" ref={aboutRef} className="py-12 md:py-16"> {/* Reduced py-20 to py-12/py-16 */}
                      <AboutSection />
                    </section>

                    {/* Menu Section - Reduced vertical padding */}
                    <section id="menu" ref={menuRef} className="py-12 md:py-16"> {/* Reduced py-20 to py-12/py-16 */}
                      <MenuSection />
                    </section>

                    {/* Contact Section - Reduced vertical padding */}
                    <section id="contact" ref={contactRef} className="py-12 md:py-16 bg-white"> {/* Reduced py-20 to py-12/py-16 */}
                      <ContactSection />
                    </section>
                  </>
                }
              />

              {/* Reservation Page */}
              <Route path="/reservation" element={<ReservationPage />} />
            </Routes>
          </main>

          <Footer />
        </Router> 
      </div>
    );
  }
  export default App;
