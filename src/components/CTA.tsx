
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-mailblast-primary to-mailblast-secondary">
      <div className="max-w-5xl mx-auto text-center text-mailblast-secondary">
        <div className="mb-8 flex justify-center">
          <Mail className="h-16 w-16 text-white" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          💥 Let's Boost Your Email Marketing!
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto text-white/90">
          Want to see how Mail Blast can grow your business?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="https://hub.mail-blast.com/login">
          <Button size="lg" className="bg-white text-mailblast-secondary hover:bg-gray-100">
          Get Started
          </Button>
          </a>
        </div>
        <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-medium text-white">🎁 7 Days Free Trial. No credit card required!</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
