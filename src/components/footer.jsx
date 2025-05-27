// src/components/Footer.jsx
import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white text-center py-6">
      <p className="text-sm">&copy; {new Date().getFullYear()} Kota Malang. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
