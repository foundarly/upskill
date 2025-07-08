import React from 'react';
import { Mail, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      { name: 'Courses', href: '#courses' },
      { name: 'Community', href: '#community' },
      { name: 'Mentorship', href: '#mentorship' },
      { name: 'Success Stories', href: '#stories' },
    ],
    Resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Templates', href: '#templates' },
      { name: 'Startup Tools', href: '#tools' },
      { name: 'Funding Guide', href: '#funding' },
    ],
    Company: [
      { name: 'About Us', href: '#about' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
      { name: 'Contact', href: '#contact' },
    ],
    Legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Refund Policy', href: '#refunds' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' },
  ];

  return (
    <footer className="bg-[#1a365d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold">
                Upskill<span className="text-[#ff7849]">.</span>
              </h3>
              <p className="text-gray-300 mt-2">
                Transform from learner to founder through practical entrepreneurship education.
              </p>
            </div>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white bg-opacity-10 border border-gray-600 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#ff7849] focus:border-transparent"
                />
                <button className="bg-[#ff7849] px-4 py-2 rounded-r-lg hover:bg-[#e66938] transition-colors duration-300">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-300 hover:text-[#ff7849] transition-colors duration-300"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-[#ff7849] transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © 2024 Upskill Foundarly. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-[#ff7849] text-sm transition-colors duration-300">
              Status
            </a>
            <a href="#" className="text-gray-300 hover:text-[#ff7849] text-sm transition-colors duration-300">
              Security
            </a>
            <a href="#" className="text-gray-300 hover:text-[#ff7849] text-sm transition-colors duration-300">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;