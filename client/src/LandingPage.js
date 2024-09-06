import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { MapPin, ThumbsUp, Trophy, Linkedin, Send, Phone, Menu } from 'lucide-react';

// Component for smooth fade and shadow animation
const Section = ({ children, className }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the section is in view
    );

    const section = document.querySelector(`#${className}`);
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, [className]);

  return (
    <motion.section
      id={className}
      className={`py-10 px-4 transition-all duration-700 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0.5, boxShadow: isInView ? '0 4px 20px rgba(0, 0, 0, 0.15)' : 'none' }}
    >
      {children}
    </motion.section>
  );
};

const LandingPage = () => {
  return (
    <div className="font-sans bg-softWhite text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-lightSky">AI Health Clinic</div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li className="hover:text-lightSky">About Us</li>
            <li className="hover:text-lightSky">Services</li>
            <li className="hover:text-lightSky">Contact</li>
          </ul>
        </nav>
        <button className="hidden md:block border border-lightSky text-lightSky px-4 py-2 rounded hover:bg-lightSky hover:text-white">
          Book a Consultation
        </button>
        <button className="md:hidden">
          <Menu className="w-6 h-6 text-lightSky" />
        </button>
      </header>

      {/* Hero Section */}
      <Section className="hero-section bg-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-lightSky text-center">Your AI-powered Health Assistant</h1>
        <p className="text-lg md:text-xl mb-4 text-center">Consult top doctors, get health tips, and check symptoms with our AI tools.</p>
        <p className="text-lg text-center">Contact us: +1 123 345 4667</p>
        <img src="/api/placeholder/1200/400" alt="Health services" className="w-full h-48 md:h-64 object-cover mt-6 rounded-md" />
      </Section>

      {/* About the Clinic */}
      <Section className="about-section">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-lightSky text-center">Welcome to AI Health Clinic</h2>
        <p className="text-base md:text-lg mb-4 text-center">
          We are an innovative healthcare service using AI to provide personalized medical consultations. Our team of experienced doctors collaborates with advanced AI technology to offer you the best in healthcare.
        </p>
      </Section>

      {/* Services */}
      <Section className="services-section bg-lightGray">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-lightSky">Our Services</h2>
        <p className="text-base md:text-lg mb-8 text-center">Explore the services we offer to help you maintain your health.</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <a href="/ai-chatbot" className="bg-white p-4 rounded shadow w-full md:w-64 hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/200x150" alt="AI Chatbot" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-lightSky">AI Symptom Checker</h3>
            <p>Check your symptoms and receive recommendations using our AI-powered chatbot.</p>
          </a>

          <a href="/doctor-profiles" className="bg-white p-4 rounded shadow w-full md:w-64 hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/200x150" alt="Doctor Profiles" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-lightSky">Doctor Profiles</h3>
            <p>Browse profiles of highly qualified doctors available for consultations.</p>
          </a>

          <a href="/ai-health-tips" className="bg-white p-4 rounded shadow w-full md:w-64 hover:shadow-lg transition-shadow">
            <img src="https://via.placeholder.com/200x150" alt="Health Tips" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-lightSky">AI-based Health Tips</h3>
            <p>Receive personalized health tips and advice tailored to your needs.</p>
          </a>
        </div>
      </Section>

      {/* Call to Action */}
      <Section className="cta-section bg-lightSky text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Take Control of Your Health</h2>
        <p className="text-base md:text-xl mb-8 text-center">Sign up today and start your journey towards better health with AI-powered consultations.</p>
        <button className="bg-white text-lightSky px-8 py-3 rounded text-lg font-semibold hover:bg-lightGray w-1/3" style={{ marginLeft: '33%' }}>
            Get Started
        </button>

      </Section>

      {/* Clinic Advantages */}
      <Section className="advantages-section">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-lightSky">Why Choose Us?</h2>
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-8 md:space-y-0">
          {[
            { icon: <MapPin className="w-12 h-12 text-lightSky" />, text: "Convenient online consultations with top specialists." },
            { icon: <ThumbsUp className="w-12 h-12 text-lightSky" />, text: "AI-powered health tools to make smart decisions." },
            { icon: <Trophy className="w-12 h-12 text-lightSky" />, text: "Highly experienced doctors and state-of-the-art technology." }
          ].map((advantage, index) => (
            <div key={index} className="text-center w-full md:w-64">
              <div className="flex justify-center mb-4">{advantage.icon}</div>
              <p>{advantage.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="contact-section bg-lightGray">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-lightSky">Contact Us</h2>
        <div className="flex flex-col md:flex-row justify-between max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <p className="mb-2">Phone: +1 123 456 78</p>
            <p className="mb-2">Email: <span className="text-lightSky">support@aihealthclinic.com</span></p>
            <p className="mb-4">Address: 123 Health St, Wellness City</p>
            <div className="flex space-x-4">
              <Linkedin className="w-6 h-6 text-lightSky" />
              <Send className="w-6 h-6 text-lightSky" />
              <Phone className="w-6 h-6 text-lightSky" />
            </div>
          </div>
          <form className="w-full md:w-1/2">
            <input type="email" placeholder="E-mail" className="w-full mb-4 p-2 rounded border" />
            <input type="text" placeholder="Name" className="w-full mb-4 p-2 rounded border" />
            <textarea placeholder="Message" className="w-full mb-4 p-2 rounded border h-32"></textarea>
            <button className="bg-blue text-white px-8 py-3 rounded text-lg font-semibold w-full hover:bg-lightSky">
              Submit
            </button>
          </form>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 text-center">
        <p>© 2024 AI Health Clinic. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
