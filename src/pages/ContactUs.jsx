import React, {  useRef, useState } from 'react';
import axios from "axios";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import necessary icons

function ContactUs() {
  const formRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    Phone : '',
    email: '',
    subject: '',
    message: '',
    product: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    const { name, Phone, email, message } = formData;
    if (!name || !Phone || !email || !message) {
      alert("Please fill all required fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);
      alert("Message sent successfully!");
      console.log("✅ Success:", res.data);
      setFormData({
        name: "",
        Phone: "",
        email: "",
        subject: "",
        message: "",
        product: "",
      });
    } catch (err) {
      console.error("❌ Error submitting form:", err);
      alert("Something went wrong. Please try again.");
    }
  };
  return (
    <div className="font-poppins bg-[#FFF8E1] text-gray-800 leading-relaxed overflow-hidden">
      {/* Hero Section for Contact Page */}
      <section className="bg-gradient-to-r from-red-700 to-red-900 text-white py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          {/* Subtle background pattern or image */}
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://foodellafoods.com/wp-content/uploads/2023/10/Spicy-Wedges-247x300.png')" }}></div>
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">Get in Touch with Foodella</h1>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto opacity-90">
            We'd love to hear from you! Whether you have a question, feedback, or a business inquiry,
            our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-8 text-center lg:text-left">Our Details</h2>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-600 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Address:</h3>
                  <p className="text-gray-700">Foodella Foods Pvt. Ltd., <br /> 123 Food Street, Flavour Town, <br /> Delhi - 110001, India</p> {/* Replace with your actual address */}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhone className="text-red-600 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Phone:</h3>
                  <p className="text-gray-700">+91 98765 43210</p> {/* Replace with your actual phone number */}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-red-600 text-3xl flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email:</h3>
                  <p className="text-gray-700">info@foodella.com</p> {/* Replace with your actual email */}
                </div>
              </div>
            </div>
            {/* Social Media Links */}
            <div className="mt-10 border-t pt-8 border-gray-200">
              <h3 className="text-2xl font-bold text-red-700 mb-6 text-center lg:text-left">Connect With Us</h3>
              <div className="flex justify-center lg:justify-start space-x-6">
                <a href="https://www.instagram.com/foodellafoods?igsh=MTZhNTlneXhwOGxpbQ==" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transform hover:scale-125 transition-transform duration-300">
                  <FaInstagram size={30} />
                </a>
                <a href="https://linkedin.com/company/foodella" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:text-red-800 transform hover:scale-125 transition-transform duration-300">
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-8 text-center">Send Us a Message</h2>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-lg font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="Phone" className="block text-gray-700 text-lg font-semibold mb-2">Your Phone no</label>
                <input
                  type="number"
                  id="Phone"
                  name="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your Phone no."
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 text-lg font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              {/* NEW: Select Product Dropdown */}
              <div>
                <label htmlFor="product" className="block text-gray-700 text-lg font-semibold mb-2">Select Product</label>
                <select
                  id="product"
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 bg-white"
                  required // Make selection mandatory
                >
                  <option value="">-- Please select a product --</option> {/* Default placeholder */}
                  <option value="Fries">Fries</option>
                  <option value="Veg Patty">Veg Patty</option>
                  <option value="Wedges">Wedges</option>
                  <option value="Chilli Garlic Bites">Chilli Garlic Bites</option>
                  <option value="Hash Brown">Hash Brown</option>
                  <option value="Aloo Tikki">Aloo Tikki</option>
                  <option value="Potato Cheese Shotz">Potato Cheese Shotz</option>
                  <option value="Veggie Finger">Veggie Finger</option>
                  <option value="Other">Other Product</option>
                </select>
              </div>
              {/* END NEW */}

              <div>
                <label htmlFor="subject" className="block text-gray-700 text-lg font-semibold mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200"
                  placeholder="Subject of your message"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-lg font-semibold mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-200 resize-y"
                  placeholder="Type your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-700 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-red-800 hover:scale-[1.01] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Location Map Section */}
      <section className="py-16 px-4 md:px-8 bg-[#fdf5e6]">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-red-700 mb-8 text-center">Find Us on the Map</h2>
          <div className="aspect-w-16 aspect-h-9 w-full rounded-lg shadow-xl overflow-hidden">
            <iframe
              // The Google Maps src needs to be a valid embed URL.
              // "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126603.98353815809!2d75.81797438247484!3d22.77811703469133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3962fd6c7f36ee45%3A0xf4ffc07e973a0da5!2sSch.78%20Pratham%2C%20Plot%20No.%20362%2C%20Dewas%20Naka%2C%20Scheme%2078%20Part%201%20Phase%202%2C%20Indore%2C%20Madhya%20Pradesh%20452007!3m2!1d22.7775049!2d75.8973694!5e0!3m2!1sen!2sin!4v1753686145346!5m2!1sen!2sin" is NOT a valid Google Maps embed URL.
              // Please replace it with a valid one for your location, e.g.:
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d77.12345!3d28.76543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQyJzU0LjUiTiA3N8KwMDgnMTkuNyJF!5e0!3m2!1sen!2sin!4v1678901234567!5m2!1sen!2sin"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d126603.98353815809!2d75.81797438247484!3d22.77811703469133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3962fd6c7f36ee45%3A0xf4ffc07e973a0da5!2sSch.78%20Pratham%2C%20Plot%20No.%20362%2C%20Dewas%20Naka%2C%20Scheme%2078%20Part%201%20Phase%202%2C%20Indore%2C%20Madhya%20Pradesh%20452007!3m2!1d22.7775049!2d75.8973694!5e0!3m2!1sen!2sin!4v1753689703328!5m2!1sen!2sin" // Example for Raipur, Chhattisgarh
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Foodella Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer - Reusing your existing footer style */}
      <footer className="bg-red-900 text-yellow-100 text-center py-6 text-sm">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Foodella. All rights reserved.</p>
          <p className="mt-2">Tangy. Minty. Uniquely Delicious.</p>
        </div>
      </footer>
    </div>
  );
}

export default ContactUs;