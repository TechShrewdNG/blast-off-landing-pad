
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, TrendingUp, Check, Calendar, Users, Send } from "lucide-react";

const features = [
  {
    icon: <Mail className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Beautiful Email Templates",
    description: "Craft stunning emails with our drag-and-drop editor and professional templates."
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Advanced Analytics",
    description: "Track opens, clicks, and conversions to optimize your email campaigns."
  },
  {
    icon: <Users className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Audience Segmentation",
    description: "Deliver targeted content to the right subscribers at the right time."
  },
  {
    icon: <Calendar className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Marketing Automation",
    description: "Create automated workflows that nurture leads and drive conversions."
  },
  {
    icon: <Send className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Reliable Delivery",
    description: "Ensure your emails reach the inbox with our optimized sending infrastructure."
  },
  {
    icon: <Check className="h-10 w-10 text-mailblast-primary p-2 bg-blue-50 rounded-lg" />,
    title: "Easy Integration",
    description: "Connect with your favorite tools and platforms seamlessly."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            MailBlast provides all the tools you need to create, send, and optimize your email marketing campaigns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
