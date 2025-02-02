import React from "react";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa6";
export const SocialLinks = () => {
  return (
    <div className="hidden md:flex items-center space-x-4">
      <FaFacebook className="w-5 h-5 hover:text-[#FF4A17] cursor-pointer" />
      <FaXTwitter className="w-5 h-5 hover:text-[#FF4A17] cursor-pointer" />
      <FaYoutube className="w-5 h-5 hover:text-[#FF4A17] cursor-pointer" />
      <FaInstagram className="w-5 h-5 hover:text-[#FF4A17] cursor-pointer" />
    </div>
  );
};
