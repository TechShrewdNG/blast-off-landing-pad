
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import EmailCampaignPreview from "@/components/EmailCampaignPreview";

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
              <span className="gradient-text">Your Message, Their Inbox—No Algorithms!</span>
            </h1>
            <p className="text-xl mb-6 text-mailblast-secondary max-w-lg">
            We Handle Your Email Marketing, So You Focus on Growing Your Business
            </p>
            <p className="text-lg mb-8 text-mailblast-secondary max-w-lg">
            Engage your audience, boost sales, and nurture customer relationships with expertly crafted email campaigns – without lifting a finger!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
            <a href="tel:+2348165907113">
              <Button size="lg" className="bg-mailblast-primary hover:bg-mailblast-primary/90 text-mailblast-secondary">
              📞 Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </a>
            </div>
            <div className="mt-8 flex items-center text-sm text-mailblast-secondary">
              <span>Your First 100 Emails Are On Us!</span>
            </div>
          </div>
          <div className="relative h-[400px] md:h-[500px] w-full animate-fade-in rounded-lg shadow-xl overflow-hidden">
            <EmailCampaignPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
