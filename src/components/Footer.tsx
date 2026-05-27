import React from "react";

const Footer = () => {
  return (
    <footer className="text-center px-6 py-6  text-sm text-gray-500 bg-white">
      © {new Date().getFullYear()}{" "}
      <strong className="text-[#085208]">Vicky&apos;s Cuisine</strong>. Lagos,
      Nigeria.
    </footer>
  );
};

export default Footer;
