import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0b0c2a] text-white px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-semibold mb-2">IPL Score Tracker</h2>
          <p className="text-sm text-gray-300">
            The ultimate destination for IPL cricket fans to stay updated with live scores, team standings, and match schedules.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Live Scores</a></li>
            <li><a href="#" className="hover:text-white">Schedule</a></li>
            <li><a href="#" className="hover:text-white">Teams</a></li>
            <li><a href="#" className="hover:text-white">Stats</a></li>
            <li><a href="#" className="hover:text-white">News</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Connect With Us</h2>
          <div className="flex space-x-4 mb-3">
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-black">
              <FaTwitter />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-black">
              <FaFacebookF />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-black">
              <FaInstagram />
            </a>
            <a href="#" className="p-2 bg-gray-700 rounded-full hover:bg-white hover:text-black">
              <FaYoutube />
            </a>
          </div>
          <p className="text-sm text-gray-300">
            Download our mobile app for a better experience
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © 2025 IPL Score Tracker. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
