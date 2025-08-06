import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Left section (e.g., logo or copyright) */}
          <div>
            <p>&copy; {new Date().getFullYear()} MD. KHAIRUL ASHIK. All rights reserved.</p>
          </div>

          {/* Right section (e.g., social media links) */}
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Optional: Additional links */}
        <div className="mt-4 text-center">
          <ul className="flex justify-center gap-6 text-sm">
            <li><a href="/terms" className="hover:text-gray-400">Terms of Service</a></li>
            <li><a href="/privacy" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="/contact" className="hover:text-gray-400">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
