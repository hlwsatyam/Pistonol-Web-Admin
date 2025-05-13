import React from 'react';
import Layout from '../Layout/Layout';
import { FaOilCan, FaTools, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="bg-[#222792] text-white min-h-screen w-full">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center px-4 py-20 md:py-32">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Powering India's Engines with <span className="text-[#f83930]">Pistonol Lubetech</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl text-gray-200 mb-8">
            Trusted across industries for premium lubricants including engine oils, greases, additives, coolants, and more. ISO 9001:2015 & ISO 14001:2015 Certified.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/contact"
              className="bg-[#f83930] text-white font-semibold px-6 py-3 rounded-md hover:bg-red-600 transition"
            >
              Get in Touch
            </a>
            <a
              href="/login"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#222792] transition"
            >
              Login
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white text-[#222792] py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Pistonol?</h2>
            <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <FaOilCan className="text-[#f83930] text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Automotive Oils</h3>
                <p>
                  Blended with precision to ensure high engine performance and protection for all types of vehicles.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <FaTools className="text-[#f83930] text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">OEM Compatibility</h3>
                <p>
                  Designed to meet the specifications of engines made by top global manufacturers and OEMs.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <FaOilCan className="text-[#f83930] text-4xl mb-4" />
                <h3 className="text-xl font-semibold mb-2">50,000+ Liters/Day</h3>
                <p>
                  High-capacity, automated production plants in Gujarat, delivering quality at scale with consistency.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer / Social */}
        <footer className="bg-[#222792] text-white py-8">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4">
            <p className="text-sm mb-4 md:mb-0">&copy; 2025 Pistonol Lubetech Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://facebook.com/pistonol" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-xl hover:text-[#f83930]" />
              </a>
              <a href="https://instagram.com/pistonol" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-xl hover:text-[#f83930]" />
              </a>
              <a href="https://twitter.com/pistonol" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-xl hover:text-[#f83930]" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  );
};

export default Home;
