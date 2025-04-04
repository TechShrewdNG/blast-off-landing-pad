
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-mailblast-primary to-mailblast-accent">
      <div className="max-w-5xl mx-auto text-center text-white">
        <div className="mb-8 flex justify-center">
          <Mail className="h-16 w-16" />
        </div>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Email Marketing?
        </h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
          Join thousands of businesses that use MailBlast to grow their audience and boost conversions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-mailblast-primary hover:bg-gray-100">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
            Schedule a Demo
          </Button>
        </div>
        <p className="mt-6 text-sm opacity-80">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default CTA;
