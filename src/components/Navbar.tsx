
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/62bc1fd4-54d9-4c8f-a432-488e63a1141d.png" 
            alt="Mail Blast Logo" 
            className="h-10" 
          />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium text-mailblast-secondary hover:text-mailblast-accent transition-colors">
            What We Do
          </a>
          <a href="#process" className="text-sm font-medium text-mailblast-secondary hover:text-mailblast-accent transition-colors">
            How We Work
          </a>
          <a href="#clients" className="text-sm font-medium text-mailblast-secondary hover:text-mailblast-accent transition-colors">
            Who We Help
          </a>
          <a href="#why-choose-us" className="text-sm font-medium text-mailblast-secondary hover:text-mailblast-accent transition-colors">
            Why Choose Us
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-sm text-mailblast-secondary">
            Contact
          </Button>
          <Button className="bg-mailblast-primary hover:bg-mailblast-primary/90 text-mailblast-secondary">
            Get Started
          </Button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-mailblast-secondary hover:text-mailblast-accent">
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
              className="py-2 px-4 text-sm font-medium text-mailblast-secondary hover:bg-mailblast-light"
              onClick={() => setIsMenuOpen(false)}
            >
              What We Do
            </a>
            <a 
              href="#process" 
              className="py-2 px-4 text-sm font-medium text-mailblast-secondary hover:bg-mailblast-light"
              onClick={() => setIsMenuOpen(false)}
            >
              How We Work
            </a>
            <a 
              href="#clients" 
              className="py-2 px-4 text-sm font-medium text-mailblast-secondary hover:bg-mailblast-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Help
            </a>
            <a 
              href="#why-choose-us" 
              className="py-2 px-4 text-sm font-medium text-mailblast-secondary hover:bg-mailblast-light"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </a>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="ghost" className="justify-center text-mailblast-secondary">
                Contact
              </Button>
              <Button className="bg-mailblast-primary hover:bg-mailblast-primary/90 text-mailblast-secondary justify-center">
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
