
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 px-6 bg-gradient-to-br from-white via-mailblast-light to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6 inline-flex items-center rounded-full bg-mailblast-light px-3 py-1 text-sm font-medium text-mailblast-secondary">
              <span>Done-for-You Email Marketing</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">💥 Mail Blast</span> – Done-for-You Email Marketing
            </h1>
            <p className="text-xl mb-6 text-mailblast-secondary max-w-lg">
              💡 We Handle Your Email Marketing, So You Focus on Growing Your Business
            </p>
            <p className="text-lg mb-8 text-mailblast-secondary max-w-lg">
              📩 Engage your audience, boost sales, and nurture customer relationships with expertly crafted email campaigns – without lifting a finger!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-mailblast-primary hover:bg-mailblast-primary/90 text-mailblast-secondary">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-mailblast-secondary border-mailblast-secondary hover:bg-mailblast-light">
                Learn More
              </Button>
            </div>
            <div className="mt-8 flex items-center text-sm text-mailblast-secondary">
              <span>Your First 100 Emails Are On Us!</span>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full animate-fade-in rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-mailblast-primary to-mailblast-secondary opacity-90 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-5">
                <div className="flex items-center mb-4">
                  <div className="h-5 w-24 bg-gray-200 rounded"></div>
                </div>
                <div className="h-10 w-full bg-gray-100 rounded mb-4"></div>
                <div className="space-y-2 mb-4">
                  <div className="h-3 w-full bg-gray-100 rounded"></div>
                  <div className="h-3 w-full bg-gray-100 rounded"></div>
                  <div className="h-3 w-2/3 bg-gray-100 rounded"></div>
                </div>
                <div className="h-10 w-full bg-mailblast-primary rounded"></div>
                <div className="mt-4 text-xs text-center text-gray-400">Ready to boost your engagement?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
