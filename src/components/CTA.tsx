
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-mailblast-primary to-mailblast-accent">
      <div className="max-w-5xl mx-auto text-center text-white">
        <div className="mb-8 flex justify-center">
          <Mail className="h-16 w-16" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          💥 Let's Boost Your Email Marketing!
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Want to see how Mail Blast can grow your business?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-mailblast-primary hover:bg-gray-100">
            Get a Free Consultation
            <Mail className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            Contact Us
            <Phone className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="mt-8 inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
          <span className="text-sm font-medium">🎁 Your First 100 Emails Are On Us!</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
