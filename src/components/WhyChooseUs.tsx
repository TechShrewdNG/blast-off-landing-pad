
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Clock, Fingerprint, DollarSign } from "lucide-react";

const reasons = [
  {
    icon: <CheckCircle className="h-10 w-10 text-mailblast-primary" />,
    title: "Expert Team",
    description: "Our specialists have years of experience in email marketing and conversions."
  },
  {
    icon: <Clock className="h-10 w-10 text-mailblast-primary" />,
    title: "Time-Saving",
    description: "We handle everything so you can focus on growing your core business."
  },
  {
    icon: <Fingerprint className="h-10 w-10 text-mailblast-primary" />,
    title: "Custom-Tailored Approach",
    description: "Every strategy is personalized to your unique business needs."
  },
  {
    icon: <DollarSign className="h-10 w-10 text-mailblast-primary" />,
    title: "Affordable & Scalable",
    description: "Solutions that grow with your business without breaking the bank."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🌟 Why Choose <span className="gradient-text">Mail Blast</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            What makes our service stand out from the competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="mb-4 flex justify-center">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
