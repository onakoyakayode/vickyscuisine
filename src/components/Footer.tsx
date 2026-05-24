import React from "react";

const Footer = () => {
  return (
    <footer className="text-center px-6 py-6 border-t border-[#1A0F05]/08 text-sm text-gray-800">
      © {new Date().getFullYear()}{" "}
      <strong className="text-[#085208]">Vicky&apos;s Cuisine</strong>. Lagos,
      Nigeria.
    </footer>
  );
};

export default Footer;
