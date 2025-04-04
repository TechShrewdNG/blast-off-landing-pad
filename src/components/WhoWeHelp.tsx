
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Briefcase, Users } from "lucide-react";

const clients = [
  {
    icon: <ShoppingCart className="h-12 w-12 text-mailblast-primary p-2 bg-blue-50 rounded-full" />,
    title: "Ecommerce Brands",
    description: "Drive repeat purchases and recover abandoned carts."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-mailblast-primary p-2 bg-blue-50 rounded-full" />,
    title: "Businesses & Agencies",
    description: "Nurture leads and maintain strong client engagement."
  },
  {
    icon: <Users className="h-12 w-12 text-mailblast-primary p-2 bg-blue-50 rounded-full" />,
    title: "Coaches & Creators",
    description: "Grow and engage your audience with ease."
  }
];

const WhoWeHelp = () => {
  return (
    <section id="clients" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            👥 Who <span className="gradient-text">We Help</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our solutions are perfect for these types of businesses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <CardHeader className="flex flex-col items-center">
                <div className="mb-4">{client.icon}</div>
                <CardTitle className="text-xl">{client.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
