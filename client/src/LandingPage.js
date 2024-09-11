import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import { MapPin, ThumbsUp, Trophy, Linkedin, Send, Phone, Menu } from 'lucide-react';
import FAQSection from './FAQSection';

const Section = ({ children, className }) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 } 
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
      <div className="flex items-center space-x-2">
        <img src="/aihealth.png" alt="AI Health Clinic Logo" className="w-8 h-auto" />
        <div className="text-xl font-bold text-lightSky">AI Health Clinic</div>
        </div>
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
  
  {/* Title */}
  <section className="py-16 text-center bg-gradient-to-b from-blue-50 to-white">
  {/* Title */}
  <h1 className="text-4xl font-bold text-lightSky mb-4 animate-fadeIn">Your AI-powered Health Assistant</h1>
  <p className="text-lg text-gray-700 mb-8 animate-fadeIn">
    Consult top doctors, get health tips, and check symptoms with our AI tools.
  </p>

  {/* Contact Information with Icon */}
  <p className="flex items-center justify-center text-lg font-semibold text-gray-600 mb-8">
  <img 
      src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/contact-us-icon.png" 
      alt="Contact Us Icon" 
      className="h-auto w-6 mr-2" 
    />
    Contact us: <span className="text-lightSky font-bold ml-1">+8 701 234 5678</span>
  </p>

  {/* Call-to-Action Button */}
  <a href="" className="mt-4 bg-lightSky text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-sky-700 transition-all duration-300 inline-block">
    Schedule a Consultation
  </a>

  {/* Image Section with Overlay */}
  <div className="relative mt-12 animate-fadeIn mx-auto w-3/4">
  <img 
    src="https://images.everydayhealth.com/homepage/health-topics-2.jpg?sfvrsn=757370ae_2" 
    alt="Health Assistant" 
    className="w-full h-auto rounded-lg shadow-lg" 
  />
  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white opacity-30"></div>
</div>

</section>



      {/* About the Clinic */}
      <section className="text-center py-8 bg-white shadow-md mt-6">
      <section className="py-12 bg-gradient-to-b from-blue-50 to-white text-center">
  <h1 className="text-4xl font-bold text-lightSky mb-6 animate-fadeInUp">Welcome to AI Health Clinic</h1>
  <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto animate-fadeInUp">
    We are an innovative healthcare service using AI to provide personalized medical consultations. Our team of experienced doctors collaborates with advanced AI technology to offer you the best in healthcare.
  </p>

  <h2 className="text-2xl font-semibold text-gray-700 mb-6 animate-fadeInUp">Our Core Services</h2>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fadeInUp">
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:bg-lightSky hover:text-white transition-colors">
      <h4 className="font-semibold">Personalized AI-driven Medical Consultations</h4>
      <p className="text-sm">Detailed consultations based on your needs.</p>
    </div>
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:bg-lightSky hover:text-white transition-colors">
      <h4 className="font-semibold">Specialist Doctor Appointments</h4>
      <p className="text-sm">Connect with top experts in their fields.</p>
    </div>
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:bg-lightSky hover:text-white transition-colors">
      <h4 className="font-semibold">Chronic Disease Management</h4>
      <p className="text-sm">Manage chronic conditions effectively with our tailored plans.</p>
    </div>
    <div className="p-6 border border-gray-300 rounded-lg shadow-sm hover:bg-lightSky hover:text-white transition-colors">
      <h4 className="font-semibold">Remote Healthcare Monitoring</h4>
      <p className="text-sm">Monitor your health remotely with our AI technology.</p>
    </div>
  </div>

  <button className="mt-10 bg-gradient-to-r from-lightSky to-sky-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
    Book a Consultation
  </button>
</section>

  <section className="py-12 bg-white">
  <h2 className="text-3xl font-bold text-gray-700 text-center mb-8">How It Works</h2>

  <div className="relative max-w-3xl mx-auto">
    <div className="absolute w-1 bg-lightSky h-full left-1/2 transform -translate-x-1/2"></div>

    {/* Step 1 */}
    <div className="mb-8 flex justify-between items-center w-full">
      <div className="w-5/12 text-right">
        <h3 className="text-lg font-semibold text-gray-700">Book your consultation online.</h3>
        <p className="text-gray-600 mt-2">Schedule your consultation at a time that suits you.</p>
      </div>
      <div className="w-1/12 flex justify-center items-center">
        <div className="bg-lightSky rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-white font-bold">1</span>
        </div>
      </div>
    </div>

    {/* Step 2 */}
    <div className="mb-8 flex justify-between items-center w-full flex-row-reverse">
      <div className="w-5/12 text-left">
        <h3 className="text-lg font-semibold text-gray-700">Provide your medical history or symptoms.</h3>
        <p className="text-gray-600 mt-2">Share details about your condition or symptoms.</p>
      </div>
      <div className="w-1/12 flex justify-center items-center">
        <div className="bg-lightSky rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-white font-bold">2</span>
        </div>
      </div>
    </div>

    {/* Step 3 */}
    <div className="mb-8 flex justify-between items-center w-full">
      <div className="w-5/12 text-right">
        <h3 className="text-lg font-semibold text-gray-700">Get matched with an experienced doctor.</h3>
        <p className="text-gray-600 mt-2">Our system matches you with the best doctor for your needs.</p>
      </div>
      <div className="w-1/12 flex justify-center items-center">
        <div className="bg-lightSky rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-white font-bold">3</span>
        </div>
      </div>
    </div>

    {/* Step 4 */}
    <div className="mb-8 flex justify-between items-center w-full flex-row-reverse">
      <div className="w-5/12 text-left">
        <h3 className="text-lg font-semibold text-gray-700">Receive a consultation via video call.</h3>
        <p className="text-gray-600 mt-2">Speak directly to your doctor using our secure platform.</p>
      </div>
      <div className="w-1/12 flex justify-center items-center">
        <div className="bg-lightSky rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-white font-bold">4</span>
        </div>
      </div>
    </div>

    {/* Step 5 */}
    <div className="mb-8 flex justify-between items-center w-full">
      <div className="w-5/12 text-right">
        <h3 className="text-lg font-semibold text-gray-700">Follow up with personalized care recommendations.</h3>
        <p className="text-gray-600 mt-2">Receive tailored advice and a personalized care plan.</p>
      </div>
      <div className="w-1/12 flex justify-center items-center">
        <div className="bg-lightSky rounded-full w-8 h-8 flex items-center justify-center">
          <span className="text-white font-bold">5</span>
        </div>
      </div>
    </div>
  </div>
</section>

  {/* FAQ Section */}
  <FAQSection />

</section>

      <Section className="services-section bg-lightGray">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-lightSky">Our Services</h2>
        <p className="text-base md:text-lg mb-8 text-center">Explore the services we offer to help you maintain your health.</p>
        <div className="flex flex-col md:flex-row justify-center md:space-x-4 space-y-4 md:space-y-0">
          <a href="/ai-chatbot" className="bg-white p-4 rounded shadow w-full md:w-64 hover:shadow-lg transition-shadow">
            <img src="https://img.freepik.com/free-vector/healthy-people-carrying-different-icons_53876-66139.jpg" alt="AI Chatbot" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-lightSky">AI Symptom Checker</h3>
            <p>Check your symptoms and receive recommendations using our AI-powered chatbot.</p>
          </a>

          <a href="/doctor-profiles" className="bg-white p-4 rounded shadow w-full md:w-64 hover:shadow-lg transition-shadow">
            <img src="https://www.healthcareitnews.com/sites/hitn/files/Global%20healthcare_2.jpg" alt="Doctor Profiles" className="w-full h-40 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-lightSky">Doctor Profiles</h3>
            <p>Browse profiles of highly qualified doctors available for consultations.</p>
          </a>

          <a href="/ai-health-tips" className="bg-white p-4 rounded shadow w-full md:w-64 hover:shadow-lg transition-shadow">
            <img src="https://cdn.shopify.com/s/files/1/0817/7988/4088/articles/2ZQTdBKFxvkLYhrtyeWOdg_8fa4b085-dafa-4196-9a61-36db54e3c457.jpg?v=1712945641" alt="Health Tips" className="w-full h-40 object-cover mb-4 rounded-md" />
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

     
    </div>
  );
};

export default LandingPage;
