
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Mail className="h-6 w-6 text-mailblast-primary" />
          <span className="font-display font-bold text-xl">Mail Blast</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            What We Do
          </a>
          <a href="#process" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            How We Work
          </a>
          <a href="#clients" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            Who We Help
          </a>
          <a href="#why-choose-us" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            Why Choose Us
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm">
            Contact
          </Button>
          <Button className="bg-mailblast-primary hover:bg-mailblast-secondary text-white">
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-500 hover:text-gray-700">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
          <div className="flex flex-col p-4">
            <a 
              href="#services" 
              className="py-2 px-4 text-sm font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </a>
            <a 
              href="#process" 
              className="py-2 px-4 text-sm font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              How We Work
            </a>
            <a 
              href="#clients" 
              className="py-2 px-4 text-sm font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Help
            </a>
            <a 
              href="#why-choose-us" 
              className="py-2 px-4 text-sm font-medium hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="ghost" className="justify-center">
                Contact
              </Button>
              <Button className="bg-mailblast-primary hover:bg-mailblast-secondary text-white justify-center">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
