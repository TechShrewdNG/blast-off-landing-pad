
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-white via-mailblast-light to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Supercharge Your <span className="gradient-text">Email Marketing</span>
            </h1>
            <p className="text-lg mb-8 text-gray-700 max-w-lg">
              Send beautiful emails, grow your audience, and boost conversions with powerful automation and analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mailblast-primary hover:bg-mailblast-secondary text-white">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-gray-500">
              <Mail className="h-4 w-4 mr-2" />
              <span>No credit card required • 14-day free trial</span>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full animate-fade-in rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mailblast-primary to-mailblast-accent opacity-90 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5">
                <div className="h-5 w-24 bg-gray-200 rounded mb-4"></div>
                <div className="h-10 w-full bg-gray-100 rounded mb-4"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-gray-100 rounded"></div>
                  <div className="h-3 w-full bg-gray-100 rounded"></div>
                  <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
                </div>
                <div className="h-10 w-full bg-mailblast-primary rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
