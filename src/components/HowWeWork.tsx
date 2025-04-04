
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessagesSquare, Send, LineChart } from "lucide-react";

const steps = [
  {
    icon: <MessagesSquare className="h-12 w-12 text-white p-2" />,
    title: "Consultation & Strategy",
    description: "We understand your goals and build a tailored email marketing plan."
  },
  {
    icon: <Send className="h-12 w-12 text-white p-2" />,
    title: "Campaign Creation & Execution",
    description: "Our team designs, writes, and schedules high-impact emails."
  },
  {
    icon: <LineChart className="h-12 w-12 text-white p-2" />,
    title: "Monitoring & Optimization",
    description: "We track performance and continuously improve results."
  }
];

const HowWeWork = () => {
  return (
    <section id="process" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔄 How <span className="gradient-text">We Work</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our streamlined process ensures you get exceptional results with minimal effort
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="border-none shadow-lg h-full">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-mailblast-primary to-mailblast-accent rounded-full w-16 h-16 flex items-center justify-center">
                  {step.icon}
                </div>
                <CardHeader className="pt-16 flex items-center">
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-2 bg-gray-200 z-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
