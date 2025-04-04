
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Zap, Users, BarChart, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: <Mail className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Email Campaign Management",
    description: "We craft, design, and send emails that convert."
  },
  {
    icon: <Zap className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Automation & Drip Campaigns",
    description: "Set up sequences that nurture leads and increase sales."
  },
  {
    icon: <Users className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "List Segmentation & Personalization",
    description: "Target the right people with the right message."
  },
  {
    icon: <BarChart className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Performance Tracking & Optimization",
    description: "We analyze your results and refine for better ROI."
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "High Deliverability",
    description: "We ensure your emails land in inboxes, not spam."
  }
];

const WhatWeDo = () => {
  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✅ What <span className="gradient-text">We Do</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive email marketing services designed to drive engagement and boost your revenue
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
