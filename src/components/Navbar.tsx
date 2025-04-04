
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-6 border-b fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Mail className="h-6 w-6 text-mailblast-primary" />
          <span className="font-display font-bold text-xl">MailBlast</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            Pricing
          </a>
          <a href="#testimonials" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            Testimonials
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-mailblast-primary transition-colors">
            FAQ
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="text-sm hidden md:inline-flex">
            Log in
          </Button>
          <Button className="bg-mailblast-primary hover:bg-mailblast-secondary text-white">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
