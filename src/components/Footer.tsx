
import React from "react";
import { Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Mail className="h-6 w-6 text-mailblast-primary" />
              <span className="font-display font-bold text-xl text-white">Mail Blast</span>
            </div>
            <p className="text-gray-400 mb-4">
              Done-for-You Email Marketing that converts and drives growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="hover:text-white transition-colors">Email Campaign Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Automation & Drip Campaigns</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">List Segmentation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Performance Tracking</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#clients" className="hover:text-white transition-colors">Who We Help</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>Email: hello@mailblast.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>123 Email St, Marketing City</li>
              <li>Mon-Fri: 9AM-5PM EST</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">© 2025 Mail Blast. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
