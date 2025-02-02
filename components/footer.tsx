import { DEVELOPER_DETAILS } from "@/consts";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "./social-links";

interface FooterProps {
  developerName: string;
  developerUrl: string;
}

const DeveloperBlock = ({ developerName, developerUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-4 mt-auto border border-t-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 mb-2 sm:mb-0">
            © {currentYear} All rights reserved.
          </p>
          <p className="text-sm text-gray-600">
            Developed by{" "}
            <Link
              href={developerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {developerName}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300">
      {/* Contact Info Bar */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <MapPin className="text-orange-500 mr-3" size={24} />
              <span>333 Middle Winchendon Rd, Rindge, NH 03461</span>
            </div>
            <div className="flex items-center justify-center md:justify-center">
              <Phone className="text-orange-500 mr-3" size={24} />
              <span>125-711-811 | 125-668-886</span>
            </div>
            <div className="flex items-center justify-start md:justify-end">
              <Mail className="text-orange-500 mr-3" size={24} />
              <span>Support.gymcenter@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="text-3xl font-bold">
                <span className="text-white">GY</span>
                <span className="text-orange-500">M</span>
              </span>
            </div>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore dolore magna aliqua endisse
              ultrices gravida lorem.
            </p>
            <SocialLinks />
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Useful links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  My account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Subscribe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Tips & Guides */}
          <div>
            <h3 className="text-white text-xl font-semibold mb-6">
              Tips & Guides
            </h3>
            <div className="space-y-6">
              <div>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <h4 className="text-white mb-2">
                    Physical fitness may help prevent depression, anxiety
                  </h4>
                  <div className="text-sm text-gray-400">
                    <span>3 min read</span>
                    <span className="mx-2">•</span>
                    <span>20 Comment</span>
                  </div>
                </a>
              </div>
              <div>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  <h4 className="text-white mb-2">
                    Fitness: The best exercise to lose belly fat and tone up...
                  </h4>
                  <div className="text-sm text-gray-400">
                    <span>3 min read</span>
                    <span className="mx-2">•</span>
                    <span>20 Comment</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DeveloperBlock {...DEVELOPER_DETAILS} />
    </footer>
  );
}
