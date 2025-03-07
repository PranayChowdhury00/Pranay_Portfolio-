import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Branding Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#FF014F]">Your Name</h2>
            <p className="mt-2 text-sm">
              Frontend Developer | Creating modern & user-friendly designs.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#about" className="hover:text-[#FF014F]">
                  About Me
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#FF014F]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF014F]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-[#FF014F]">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
  <h3 className="text-lg font-semibold text-white">Contact</h3>
  <p className="mt-2 text-gray-400">Pranay Chowdhury</p>
  <p className="mt-1 text-gray-400">
    📧 <a href="mailto:pranaychowdhury00@gmail.com" className="hover:text-[#FF014F]">
      pranaychowdhury00@gmail.com
    </a>
  </p>
  <p className="mt-2 text-gray-400">📍 Dhaka, Bangladesh</p>
  <p className="mt-2 text-gray-400">
    📞 <a href="tel:+8801303572144" className="hover:text-[#FF014F]">
      +880 1303 572144
    </a>
  </p>
</div>


          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Me</h3>
            <div className="flex mt-3 space-x-4">
              <a
                href="https://github.com/PranayChowdhury00"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-2xl text-gray-400 hover:text-[#FF014F]" />
              </a>
              <a
                href="www.linkedin.com/in/pranay-chowdhury"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-2xl text-gray-400 hover:text-[#FF014F]" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-gray-400 hover:text-[#FF014F]" />
              </a>
              <a
                href="https://www.facebook.com/share/19ztW6gzmb/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-2xl text-gray-400 hover:text-[#FF014F]" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          &copy; {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
