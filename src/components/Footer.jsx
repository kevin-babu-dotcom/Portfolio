import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black rounded-4xl border-gray-800 border text-white py-8 mt-8">
      <div className="max-w-[1600px] mx-auto px-6 text-center">
        <div className="border-t border-white pt-6">
          <p className="text-white text-sm">
            © 2025 Kevin Babu. Made with ❤️ and lots of coffee.
          </p>
          <p className="text-gray-400 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;